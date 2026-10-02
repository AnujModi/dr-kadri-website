import { expect, test } from '@playwright/test';

const address = '530 Newnan Street, Carrollton, GA 30117';

// Verify our integration without depending on Google's network or changing UI.
test.beforeEach(async ({ page }) => {
  await page.route('https://maps.google.com/**', route => route.fulfill({
    contentType: 'text/html',
    body: '<html><body>Map provider response</body></html>',
  }));
});

test('Given the contact page, when the map section is reached, then an accessible interactive map replaces the placeholder', async ({ page }) => {
  // Given
  await page.goto('/contact');
  const map = page.getByTitle('Map to Carrollton Periodontics at 530 Newnan Street');

  // When
  await map.scrollIntoViewIfNeeded();

  // Then
  await expect(map).toBeVisible();
  await expect(map).toHaveAttribute('loading', 'lazy');
  const source = new URL((await map.getAttribute('src'))!);
  expect(source.origin).toBe('https://maps.google.com');
  expect(source.searchParams.get('q')).toBe(address);
  expect(source.searchParams.get('output')).toBe('embed');
  await expect(page.getByText('[Google Maps Static Image Placeholder]', { exact: true })).toHaveCount(0);
  const bounds = await map.boundingBox();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
});

test('Given the contact page, when Get directions is clicked, then Google Maps opens with the office as the destination', async ({ page, context }) => {
  // Given
  await context.route('https://www.google.com/maps/dir/**', route => route.fulfill({
    contentType: 'text/html',
    body: '<html><body>Directions</body></html>',
  }));
  await page.goto('/contact');
  const directions = page.getByRole('link', { name: /Get directions/ });

  // When
  const popupPromise = page.waitForEvent('popup');
  await directions.click();
  const popup = await popupPromise;
  await popup.waitForLoadState('domcontentloaded');

  // Then
  const destination = new URL(popup.url());
  expect(destination.origin).toBe('https://www.google.com');
  expect(destination.pathname).toBe('/maps/dir/');
  expect(destination.searchParams.get('api')).toBe('1');
  expect(destination.searchParams.get('destination')).toBe(address);
  expect(destination.searchParams.has('origin')).toBe(false);
  await expect(page).toHaveURL('/contact');
});
