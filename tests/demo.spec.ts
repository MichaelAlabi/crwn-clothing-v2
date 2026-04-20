import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'Hats' }).click();
  await page.getByRole('heading', { name: 'Jackets' }).click();
  await page.getByText('SneakersShop Now').click();
  await page.getByText('WomensShop Now').click();
  await page.getByRole('heading', { name: 'Mens', exact: true }).click();
  console.log('test');
});