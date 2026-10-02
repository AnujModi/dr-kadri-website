import { expect, type Locator, type Page } from '@playwright/test';

export async function expectPageLoaded(page: Page, route: string) {
  const content = page.locator('main').first();

  await expect(page).toHaveURL(route);
  await expect(content).not.toContainText('Loading...');
  await expect(content.getByRole('heading').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Return Home', exact: true })).toHaveCount(0);
}

export async function clickReachableLink(link: Locator) {
  await expect(link).toHaveCount(1);
  await link.scrollIntoViewIfNeeded();
  await expect(link).toBeInViewport({ ratio: 1 });
  // Use a real click so overlays and obstructed targets fail the test.
  await link.click();
}

export async function openPrimaryNavigation(page: Page) {
  const menu = page.getByRole('button', { name: 'Open navigation menu' });

  if (await menu.isVisible()) {
    await menu.click();
  }
}

export async function expectVisibleImagesLoaded(page: Page) {
  for (const image of await page.locator('img:visible').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element: HTMLImageElement) => {
      return element.complete && element.naturalWidth > 0;
    })).toBe(true);
  }
}

export async function dispatchInstallPrompt(page: Page) {
  return page.evaluate(() => {
    const event = new Event('beforeinstallprompt', { cancelable: true });
    window.dispatchEvent(event);
    return event.defaultPrevented;
  });
}
