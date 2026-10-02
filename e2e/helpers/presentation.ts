import { expect, type Locator, type Page } from '@playwright/test';

export async function openImplantPresentation(page: Page) {
  await page.goto('/surgical-procedures');
  await page.getByRole('button', { name: 'Dental Implants', exact: true }).first().click();
  const trigger = page.getByRole('button', { name: 'Open dental implants presentation' });
  await trigger.click();

  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  return { trigger, dialog, video: dialog.locator('video') };
}

export async function expectVideoPlaying(video: Locator) {
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => {
    return !element.paused && element.currentTime > 0;
  })).toBe(true);
}
