import { fireEvent, screen, within } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import ImplantPresentation from '../src/components/ImplantPresentation';
import { renderWithUser } from './helpers/render';

function renderPresentation() {
  const onClose = vi.fn();
  const result = renderWithUser(<ImplantPresentation onClose={onClose} />);
  const dialog = screen.getByRole('dialog');

  return { ...result, onClose, dialog, content: within(dialog) };
}

it('Given a new presentation, when rendered, then Welcome requests autoplay', () => {
  // Given / When
  const { content } = renderPresentation();

  // Then
  expect(content.getByLabelText('Welcome')).toHaveAttribute('autoplay');
});

it('Given an open presentation, when a chapter is selected, then its video source is shown', async () => {
  // Given
  const { user, content } = renderPresentation();

  // When
  await user.click(content.getByRole('button', { name: /Tooth Replacement Options/ }));

  // Then
  expect(content.getByLabelText('Tooth Replacement Options')).toHaveAttribute(
    'src',
    '/videos/dental-implants/jcn9f4eq3s.mp4',
  );
});

it.each([
  { mode: 'Español', chapter: 'Bienvenidos', language: 'es' },
  { mode: 'Consultation', chapter: 'Flipper', language: 'en' },
])('Given a selected chapter, when $mode is chosen, then the video and language reset together', async ({ mode, chapter, language }) => {
  // Given
  const { user, content } = renderPresentation();
  await user.click(content.getByRole('button', { name: /Tooth Replacement Options/ }));
  const previousVideo = content.getByLabelText('Tooth Replacement Options');

  // When
  await user.click(content.getByRole('button', { name: mode }));

  // Then
  expect(previousVideo).not.toBeInTheDocument();
  expect(content.getByLabelText(chapter)).toHaveAttribute('lang', language);
});

it.each(['close button', 'cancel event', 'backdrop'] as const)(
  'Given an open presentation, when dismissed through %s, then closing is requested once',
  async method => {
    // Given
    const { user, onClose, dialog, content } = renderPresentation();

    // When
    if (method === 'close button') {
      await user.click(content.getByRole('button', { name: 'Close presentation' }));
    } else if (method === 'cancel event') {
      // jsdom has no native Escape handling; browser tests cover the key press.
      fireEvent(dialog, new Event('cancel', { bubbles: true }));
    } else {
      fireEvent.click(dialog);
    }

    // Then
    expect(onClose).toHaveBeenCalledTimes(1);
  },
);

it('Given an open presentation, when its content is clicked, then closing is not requested', async () => {
  // Given
  const { user, onClose, content } = renderPresentation();

  // When
  await user.click(content.getByRole('heading', { name: 'Dental Implants Presentation' }));

  // Then
  expect(onClose).not.toHaveBeenCalled();
});

it('Given a presentation that locked scrolling, when unmounted, then prior scrolling and focus are restored', () => {
  // Given
  const trigger = document.createElement('button');
  document.body.append(trigger);
  trigger.focus();
  const originalOverflow = document.body.style.overflow;
  document.body.style.overflow = 'auto';
  const { unmount } = renderPresentation();

  try {
    expect(document.body.style.overflow).toBe('hidden');

    // When
    unmount();

    // Then
    expect(document.body.style.overflow).toBe('auto');
    expect(trigger).toHaveFocus();
  } finally {
    unmount();
    trigger.remove();
    document.body.style.overflow = originalOverflow;
  }
});
