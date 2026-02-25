import { Page } from "@playwright/test";
import { elements } from "@pages/toast_page/toast_elements";
import { clickElement, isElementVisible } from "@pages/base_page/base_page";

// Click functions
export const clickContinueShoppingButtonInToast = async (page: Page): Promise<void> => {
  await page.locator(elements.modalContinueShoppingButton).waitFor({ state: "visible" });
  await clickElement(page, elements.modalContinueShoppingButton, false);
};

export const viewCartButtonInToast = async (page: Page): Promise<void> => {
  await page.locator(elements.modalViewCartButton).waitFor({ state: "visible" });
  await clickElement(page, elements.modalViewCartButton, false);
};

// Verify functions
export const verifyAddToCartToast = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.successfullyAddedToCartModal, true);
  await isElementVisible(page, elements.modalTitle, true);
  await isElementVisible(page, elements.modalBody, true);
};
