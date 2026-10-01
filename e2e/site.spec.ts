import { expect, test } from '@playwright/test';

const routes = ['/', '/about', '/patient-info', '/periodontal-disease', '/non-surgical-procedures', '/surgical-procedures', '/tmj', '/referring-doctors', '/contact', '/disclaimer', '/our-team', '/our-team/staff', '/our-team/dr-hazeka', '/our-team/dr-moses', '/our-team/office-tour'];
for (const route of routes) {
  test(`loads ${route} directly without broken images or runtime errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(route);
    await expect(page.locator('main').first()).not.toContainText('Loading...');
    await expect(page.locator('main').first()).not.toBeEmpty();
    const images = page.locator('img:visible');
    for (const image of await images.all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
    }
    expect(errors).toEqual([]);
  });
}

test('shows Katelyn’s photo and biography', async ({ page }) => {
  await page.goto('/our-team/staff');
  await expect(page.getByRole('heading', { name: 'Katelyn', exact: true })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Portrait of Katelyn' })).toHaveAttribute('src', '/images/team/katelyn.jpeg');
  await expect(page.getByText(/Katelyn is a dedicated dental assistant/)).toBeVisible();
});

test('plays local presentation chapters and restores focus after Escape', async ({ page }) => {
  await page.goto('/surgical-procedures');
  await page.getByRole('button', { name: 'Dental Implants', exact: true }).first().click();
  const trigger = page.getByRole('button', { name: 'Open dental implants presentation' });
  await trigger.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  const video = dialog.locator('video');
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => !element.paused && element.currentTime > 0)).toBe(true);
  await dialog.getByRole('button', { name: /Tooth Replacement Options/ }).click();
  await expect(video).toHaveAttribute('src', '/videos/dental-implants/jcn9f4eq3s.mp4');
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => !element.paused && element.currentTime > 0)).toBe(true);
  await dialog.getByRole('button', { name: 'Español' }).click();
  await expect(video).toHaveAttribute('lang', 'es');
  await dialog.getByRole('button', { name: 'Consultation' }).click();
  await expect(video).toHaveAttribute('aria-label', 'Flipper');
  await expect(dialog).toHaveJSProperty('open', true);
  await dialog.getByRole('button', { name: 'Close presentation' }).focus();
  await page.keyboard.press('Shift+Tab');
  expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true);
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  await trigger.click();
  await expect(page.getByRole('dialog').locator('video')).toHaveAttribute('aria-label', 'Welcome');
  await page.getByRole('button', { name: 'Close presentation' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('unknown routes offer working navigation home', async ({ page }) => {
  await page.goto('/does-not-exist');
  await page.getByRole('link', { name: 'Return Home' }).click();
  await expect(page).toHaveURL('/');
});
