import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';
import ImplantPresentation from '../src/components/ImplantPresentation';

it('starts with autoplay and changes videos and language together', async () => {
  const user = userEvent.setup();
  render(<ImplantPresentation onClose={vi.fn()} />);
  const modal = screen.getByRole('dialog');
  expect(within(modal).getByLabelText('Welcome')).toHaveAttribute('autoplay');
  await user.click(within(modal).getByRole('button', { name: /Tooth Replacement Options/ }));
  const previousVideo = within(modal).getByLabelText('Tooth Replacement Options');
  expect(previousVideo).toHaveAttribute('src', '/videos/dental-implants/jcn9f4eq3s.mp4');
  await user.click(screen.getByRole('button', { name: 'Español' }));
  expect(previousVideo).not.toBeInTheDocument();
  expect(within(modal).getByLabelText('Bienvenidos')).toHaveAttribute('lang', 'es');
  await user.click(screen.getByRole('button', { name: 'Consultation' }));
  expect(within(modal).getByLabelText('Flipper')).toHaveAttribute('lang', 'en');
});

it('closes through the close button, Escape event, and backdrop only', async () => {
  const onClose = vi.fn();
  render(<ImplantPresentation onClose={onClose} />);
  fireEvent.click(screen.getByRole('heading', { name: 'Dental Implants Presentation' }));
  expect(onClose).not.toHaveBeenCalled();
  fireEvent.click(screen.getByRole('button', { name: 'Close presentation' }));
  fireEvent(screen.getByRole('dialog'), new Event('cancel', { bubbles: true }));
  fireEvent.click(screen.getByRole('dialog'));
  expect(onClose).toHaveBeenCalledTimes(3);
});

it('restores scrolling and focus when unmounted', () => {
  const trigger = document.createElement('button');
  document.body.append(trigger);
  trigger.focus();
  document.body.style.overflow = 'auto';
  const { unmount } = render(<ImplantPresentation onClose={vi.fn()} />);
  expect(document.body.style.overflow).toBe('hidden');
  unmount();
  expect(document.body.style.overflow).toBe('auto');
  expect(trigger).toHaveFocus();
  trigger.remove();
});
