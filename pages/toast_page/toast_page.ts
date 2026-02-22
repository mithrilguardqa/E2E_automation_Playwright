import { Page } from "@playwright/test";
import { elements } from "./toast_elements";
import { clickElement, isElementVisible } from "@pages/base_page/base_page";

export const verifyAddToCartToast = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.successfullyAddedToCartModal, true);
  await isElementVisible(page, elements.modalTitle, true);
  await isElementVisible(page, elements.modalBody, true);
};

export const viewCartButtonInToast = async (page: Page): Promise<void> => {
  await page.locator(elements.modalViewCartButton).waitFor({ state: "visible" });
  await clickElement(page, elements.modalViewCartButton, false);
};

export const clickContinueShoppingButtonInToast = async (page: Page): Promise<void> => {
  await page.locator(elements.modalContinueShoppingButton).waitFor({ state: "visible" });
  await clickElement(page, elements.modalContinueShoppingButton, false);
};
