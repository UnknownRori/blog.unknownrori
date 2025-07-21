import { test, expect } from '@playwright/test';

test('Page is accessible', async ({ page }) => {
  await page.goto('/', { timeout: 5000 });

  /// If the page is loaded within time frame then it success
  expect(true);
});
