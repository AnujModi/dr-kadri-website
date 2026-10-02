import { expect, test } from '@playwright/test';
import { publicRoutes } from './routes';
import { expectPageLoaded, expectVisibleImagesLoaded } from './helpers/navigation';
import { expectVideoPlaying, openImplantPresentation } from './helpers/presentation';

for (const route of publicRoutes) {
  test(`Given the public route ${route}, when opened directly, then content and images load without runtime errors`, async ({ page }) => {
    // Given
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));

    // When
    await page.goto(route);

    // Then
    await expectPageLoaded(page, route);
    await expectVisibleImagesLoaded(page);
    expect(errors).toEqual([]);
  });
}

test('Given the staff page, when opened, then Katelyn’s portrait and biography appear', async ({ page }) => {
  // Given / When
  await page.goto('/our-team/staff');

  // Then
  await expect(page.getByRole('heading', { name: 'Katelyn', exact: true })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Portrait of Katelyn' })).toHaveAttribute('src', '/images/team/katelyn.jpeg');
  await expect(page.getByText(/Katelyn is a dedicated dental assistant/)).toBeVisible();
});

test('Given an open presentation, when a chapter is selected, then its local video plays', async ({ page }) => {
  // Given
  const { dialog, video } = await openImplantPresentation(page);
  await expectVideoPlaying(video);

  // When
  await dialog.getByRole('button', { name: /Tooth Replacement Options/ }).click();

  // Then
  await expect(video).toHaveAttribute('src', '/videos/dental-implants/jcn9f4eq3s.mp4');
  await expectVideoPlaying(video);
});

for (const mode of [
  { button: 'Español', language: 'es', chapter: 'Bienvenidos' },
  { button: 'Consultation', language: 'en', chapter: 'Flipper' },
]) {
  test(`Given an open presentation, when ${mode.button} is selected, then its first chapter and language appear`, async ({ page }) => {
    // Given
    const { dialog, video } = await openImplantPresentation(page);

    // When
    await dialog.getByRole('button', { name: mode.button }).click();

    // Then
    await expect(video).toHaveAttribute('lang', mode.language);
    await expect(video).toHaveAttribute('aria-label', mode.chapter);
  });
}

test('Given an open modal, when tabbing backwards, then keyboard focus stays inside it', async ({ page }) => {
  // Given
  const { dialog } = await openImplantPresentation(page);
  await dialog.getByRole('button', { name: 'Close presentation' }).focus();

  // When
  await page.keyboard.press('Shift+Tab');

  // Then
  await expect(dialog).toHaveJSProperty('open', true);
  expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true);
});

for (const method of ['Escape', 'close button'] as const) {
  test(`Given an open presentation, when closed with ${method}, then focus and scrolling are restored`, async ({ page }) => {
    // Given
    const { trigger, dialog } = await openImplantPresentation(page);

    // When
    if (method === 'Escape') {
      await page.keyboard.press('Escape');
    } else {
      await dialog.getByRole('button', { name: 'Close presentation' }).click();
    }

    // Then
    await expect(dialog).toHaveCount(0);
    await expect(trigger).toBeFocused();
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  });
}

test('Given a dismissed presentation with a changed chapter, when reopened, then it starts at Welcome', async ({ page }) => {
  // Given
  const { trigger, dialog } = await openImplantPresentation(page);
  await dialog.getByRole('button', { name: 'Consultation' }).click();
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);

  // When
  await trigger.click();

  // Then
  await expect(page.getByRole('dialog').locator('video')).toHaveAttribute('aria-label', 'Welcome');
});

test('Given an unknown route, when Return Home is clicked, then the home page opens', async ({ page }) => {
  // Given
  await page.goto('/does-not-exist');

  // When
  await page.getByRole('link', { name: 'Return Home' }).click();

  // Then
  await expectPageLoaded(page, '/');
});
