import { test, expect } from "@playwright/test";

test('test', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Hats' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Jackets' })).toBeVisible();
  await expect(page.getByText('SneakersShop Now')).toBeVisible();
  await expect(page.getByText('WomensShop Now')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Mens', exact: true })).toBeVisible();
  console.log('all categories are visible');
});