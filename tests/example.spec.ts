import { test, expect } from "@playwright/test";

test.describe("Homepage tests", () => {
  test("Verify homepage is visible", async ({ page }) => {
    await test.step("Navigate to homepage", async () => {
      await page.goto("/");
    });

    await test.step("Verify homepage is visible", async () => {
      
    });
  });
});
