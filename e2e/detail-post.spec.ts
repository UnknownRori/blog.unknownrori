import { test, expect } from '@playwright/test';

const timeoutPage = 5000;

test('Page is accessible', async ({ page }) => {
  await page.goto('/posts/1', { timeout: timeoutPage });

  /// If the page is loaded within time frame then it success
  expect(true);
});

test('Should have `Home` and `Series` on the nav', async ({ page }) => {
  await page.goto('/posts/1', { timeout: timeoutPage });

  const home = page.getByRole('link', { name: 'Home' });
  const series = page.getByRole('link', { name: 'Series' });

  await expect(home).toBeVisible();
  await expect(series).toBeVisible();
});

test('Should no .active state', async ({ page }) => {
  await page.goto('/posts/1', { timeout: timeoutPage });

  const home = page.getByRole('link', { name: 'Home' });
  const series = page.getByRole('link', { name: 'Series' });

  await expect(home).not.toHaveClass(/active/);
  await expect(series).not.toHaveClass(/active/);
});

test('Should have footer', async ({ page }) => {
  await page.goto('/posts', { timeout: timeoutPage });

  const footer = page.locator('#footer');

  await expect(footer).toBeVisible();
  await expect(footer).toHaveText(/UnknownRori/)
});
