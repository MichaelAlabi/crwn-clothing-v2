import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const APP_URL = process.env.APP_URL || "http://localhost:3000";

test("testing categories visibility", async ({ page }) => {
  await page.goto(APP_URL);

  await expect(page.getByRole("heading", { name: "Hats" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Jackets" })).toBeVisible();
  await expect(page.getByText("SneakersShop Now")).toBeVisible();
  await expect(page.getByText("WomensShop Now")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Mens", exact: true })
  ).toBeVisible();

  console.log("All categories are visible as expected.");
});