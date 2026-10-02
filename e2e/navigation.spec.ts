import { expect, test } from '@playwright/test';
import { primaryRoutes, teamRoutes, footerRoutes, publicRoutes } from './routes';
import {
  clickReachableLink,
  dispatchInstallPrompt,
  expectPageLoaded,
  openPrimaryNavigation,
} from './helpers/navigation';

for (const width of [375, 768, 1024, 1280, 1440, 1920]) {
  test(`Given a ${width}px viewport, when each primary link is clicked, then every view is reachable`, async ({ page }) => {
    // Given
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/');

    for (const route of primaryRoutes) {
      await test.step(`When navigating to ${route}, then its content appears and the menu closes`, async () => {
        await openPrimaryNavigation(page);
        const link = page.locator(`nav a[href="${route}"]`).filter({ visible: true });

        await clickReachableLink(link);

        await expectPageLoaded(page, route);
        await expect(page.getByRole('button', { name: 'CLOSE —' })).toHaveCount(0);
      });
    }

    await test.step('When the logo is clicked, then the home page opens', async () => {
      const logo = page.locator('nav a[href="/"]').filter({ visible: true });

      await clickReachableLink(logo);

      await expectPageLoaded(page, '/');
    });
  });
}

const navigationScenarios = [
  { name: 'footer', start: '/', selector: 'footer', routes: footerRoutes },
  { name: 'team sidebar', start: '/our-team', selector: 'aside', routes: teamRoutes },
];

for (const scenario of navigationScenarios) {
  for (const route of scenario.routes) {
    test(`Given the ${scenario.name}, when ${route} is clicked, then the requested view opens`, async ({ page }) => {
      // Given
      await page.goto(scenario.start);
      const link = page.locator(`${scenario.selector} a[href="${route}"]`);

      // When
      await clickReachableLink(link);

      // Then
      await expectPageLoaded(page, route);
    });
  }
}

for (const route of publicRoutes) {
  test(`Given ${route}, when the browser offers installation, then no install prompt appears`, async ({ page }) => {
    // Given
    await page.goto(route);
    await expectPageLoaded(page, route);

    // When
    const prevented = await dispatchInstallPrompt(page);

    // Then
    expect(prevented).toBe(true);
    await expect(page.getByText('Install Carrollton Perio', { exact: true })).toHaveCount(0);
    await expect(page.getByRole('button', { name: /^install/i })).toHaveCount(0);
  });
}

for (const width of [1280, 1366, 1440, 1536, 1699, 1700, 1920]) {
  test(`Given a ${width}px desktop, when the header renders, then logo and all navigation links share one row`, async ({ page }) => {
    // Given
    await page.setViewportSize({ width, height: 900 });

    // When
    await page.goto('/');
    const header = page.locator('nav').first();
    const logo = header.getByRole('link').first();
    const logoBounds = await logo.boundingBox();

    // Then
    expect(logoBounds).not.toBeNull();
    await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeHidden();
    for (const route of primaryRoutes) {
      const link = header.locator(`a[href="${route}"]`);
      await expect(link).toBeInViewport({ ratio: 1 });
      const bounds = await link.boundingBox();
      expect(bounds).not.toBeNull();
      expect(bounds!.x).toBeGreaterThanOrEqual(logoBounds!.x + logoBounds!.width);
      const centerY = bounds!.y + bounds!.height / 2;
      expect(centerY).toBeGreaterThanOrEqual(logoBounds!.y);
      expect(centerY).toBeLessThanOrEqual(logoBounds!.y + logoBounds!.height);
    }
    const hasHorizontalOverflow = await header.evaluate(element => element.scrollWidth > element.clientWidth);
    expect(hasHorizontalOverflow).toBe(false);
  });
}

 test('Given a full desktop viewport, when the header renders, then navigation retains the original typography', async ({ page }) => {
  // Given
  await page.setViewportSize({ width: 1920, height: 900 });

  // When
  await page.goto('/');
  const header = page.locator('nav').first();
  const navigationText = header.locator('a[href="/patient-info"]');

  // Then
  await expect(navigationText).toHaveCSS('font-size', '14px');
  await expect(navigationText).toHaveCSS('letter-spacing', '1.4px');
});

for (const route of footerRoutes) {
  test(`Given a page scrolled to its footer, when ${route} is opened, then the destination starts at the top`, async ({ page }) => {
    // Given
    await page.goto('/');
    const link = page.locator(`footer a[href="${route}"]`);
    await link.scrollIntoViewIfNeeded();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);

    // When
    await clickReachableLink(link);

    // Then
    await expectPageLoaded(page, route);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
    await expect(page.locator('nav').first()).toBeInViewport();
  });
}
