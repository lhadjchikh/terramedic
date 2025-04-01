import { test, expect } from '@playwright/test';

test('homepage has correct title and buttons', async ({ page }) => {
  await page.goto('/');

  // Check title
  await expect(page).toHaveTitle(/Terramedic Action Team/);

  // Check that main heading exists
  await expect(page.locator('h1:has-text("Climate Crisis")')).toBeVisible();

  // Check that warming stripes visualization is visible
  await expect(page.locator('.warming-stripes')).toBeVisible();

  // Check that both call-to-action buttons exist
  await expect(page.locator('a:has-text("I have time to spare")')).toBeVisible();
  await expect(page.locator('a:has-text("I have money to spare")')).toBeVisible();

  // Test navigation to volunteer page
  await page.click('a:has-text("I have time to spare")');
  await expect(page).toHaveURL(/.*volunteer/);

  // Go back to home page
  await page.goto('/');

  // Test navigation to donate page
  await page.click('a:has-text("I have money to spare")');
  await expect(page).toHaveURL(/.*donate/);
});
