import { test, expect } from '@playwright/test';

const timeoutPage = 5000;

test('Page is accessible', async ({ page }) => {
  await page.goto('/', { timeout: timeoutPage });

  /// If the page is loaded within time frame then it success
  expect(true);
});

test('Should have `Home` and `Series` on the nav', async ({ page }) => {
  await page.goto('/', { timeout: timeoutPage });

  const home = page.getByRole('link', { name: 'Home' });
  const series = page.getByRole('link', { name: 'Series' });

  await expect(home).toBeVisible();
  await expect(series).toBeVisible();
});

test('Should have `Home` in .active state', async ({ page }) => {
  await page.goto('/', { timeout: timeoutPage });

  const home = page.getByRole('link', { name: 'Home' });
  const series = page.getByRole('link', { name: 'Series' });

  await expect(home).toHaveClass(/active/);
  await expect(series).not.toHaveClass(/active/);
});

test('Should have profile card', async ({ page }) => {
  await page.goto('/', { timeout: timeoutPage });

  const profileCard = page.locator('#profile-card');

  await expect(profileCard).toBeVisible();
  await expect(profileCard.getByText(/UnknownRori/).first()).toBeVisible();
});

test('Should have list of card posts', async ({ page }) => {
  await page.goto('/', { timeout: timeoutPage });

  const blogPosts = page.locator('.card');

  await expect(blogPosts.first()).toBeVisible();
});

test('Should have footer', async ({ page }) => {
  await page.goto('/', { timeout: timeoutPage });

  const footer = page.locator('#footer');

  await expect(footer).toBeVisible();
  await expect(footer).toHaveText(/UnknownRori/)
});
