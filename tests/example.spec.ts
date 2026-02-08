import { test, expect } from "@playwright/test";

test.describe("Homepage tests", () => {
  test("Verify homepage loads successfully", async ({ page }) => {
    await page.goto("/");

    // Verify the page title
    await expect(page).toHaveTitle(/Automation Exercise/);

    // Verify the slider/carousel is visible
    await expect(page.locator("#slider-carousel")).toBeVisible();

    // Verify featured items section is visible
    await expect(page.locator(".features_items")).toBeVisible();
  });

  test("Verify all products page is accessible", async ({ page }) => {
    await page.goto("/products");

    // Verify the "All Products" title is visible
    await expect(page.locator("h2.title").first()).toBeVisible();

    // Verify at least one product card is present
    const productCards = page.locator(".features_items .col-sm-4");
    await expect(productCards.first()).toBeVisible();
    expect(await productCards.count()).toBeGreaterThan(0);
  });
});

test.describe("Login page tests", () => {
  test("Verify login page loads with both forms", async ({ page }) => {
    await page.goto("/login");

    // Verify login section
    await expect(page.locator("h2").filter({ hasText: "Login to your account" })).toBeVisible();

    // Verify signup section
    await expect(page.locator("h2").filter({ hasText: "New User Signup!" })).toBeVisible();
  });
});

test.describe("API tests", () => {
  test("API 1: Get All Products List", async ({ request }) => {
    const response = await request.get("https://automationexercise.com/api/productsList");

    expect(response.status()).toBe(200);
    const body = await response.text();
    const json = JSON.parse(body);
    expect(json.responseCode).toBe(200);
    expect(json.products.length).toBeGreaterThan(0);
  });

  test("API 3: Get All Brands List", async ({ request }) => {
    const response = await request.get("https://automationexercise.com/api/brandsList");

    expect(response.status()).toBe(200);
    const body = await response.text();
    const json = JSON.parse(body);
    expect(json.responseCode).toBe(200);
    expect(json.brands.length).toBeGreaterThan(0);
  });

  test("API 2: POST To Products List returns 405", async ({ request }) => {
    const response = await request.post("https://automationexercise.com/api/productsList");

    const body = await response.text();
    const json = JSON.parse(body);
    expect(json.responseCode).toBe(405);
  });
});
