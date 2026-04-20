import { test, expect } from '@playwright/test';

test('testing categories visibility', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Hats' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Jackets' })).toBeVisible();
  await expect(page.getByText('SneakersShop Now')).toBeVisible();
  await expect(page.getByText('WomensShop Now')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Mens', exact: true })).toBeVisible();
  console.log('Categories are visible as expected.');
});