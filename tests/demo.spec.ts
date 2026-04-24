import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

test('testing categories visibility', async ({ page }) => {
  await page.goto(process.env.APP_URL || 'http://localhost:3000');
  await expect(page.getByRole('heading', { name: 'Hats' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Jackets & Sweaters' })).toBeVisible();
  await expect(page.getByText('SneakersShop Now')).toBeVisible();
  await expect(page.getByText('WomensShop Now')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Mens', exact: true })).toBeVisible();
  console.log('All categories are visible as expected.');
});