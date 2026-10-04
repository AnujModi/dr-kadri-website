import { test, expect } from '@playwright/test';
import { doctorData } from '../src/data/doctorData';

test('both About profiles load, have equal portraits, and adapt to the viewport', async ({ page, isMobile }) => {
  await page.goto('/about');
  const profiles = page.getByRole('article');
  await expect(profiles).toHaveCount(2);
  for (const doctor of Object.values(doctorData)) {
    const profile = page.getByRole('article', { name: doctor.name });
    await profile.scrollIntoViewIfNeeded();
    await expect(profile.getByRole('heading', { name: doctor.name, exact: true })).toBeVisible();
    await expect.poll(() => profile.getByRole('img').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  }
  const first = await profiles.nth(0).getByRole('img').boundingBox();
  const second = await profiles.nth(1).getByRole('img').boundingBox();
  expect(first).not.toBeNull();
  expect(second).not.toBeNull();
  expect(Math.abs(first!.width - second!.width)).toBeLessThan(2);
  expect(Math.abs(first!.height - second!.height)).toBeLessThan(2);
  if (isMobile) {
    expect(second!.y).toBeGreaterThan(first!.y + first!.height);
  } else {
    expect(Math.abs(first!.y - second!.y)).toBeLessThan(2);
    expect(second!.x).toBeGreaterThan(first!.x + first!.width);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

for (const [id, doctor] of Object.entries(doctorData)) {
  test(`About biography link opens ${doctor.name}`, async ({ page }) => {
    await page.goto('/about');
    await page.getByRole('article', { name: doctor.name }).getByRole('link').click();
    await expect(page).toHaveURL(new RegExp(`/our-team/${id}$`));
    await expect(page.getByRole('heading', { level: 1, name: doctor.name, exact: true })).toBeVisible();
  });
}
