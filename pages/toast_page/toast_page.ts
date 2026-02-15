import { Page } from "@playwright/test";
import { elements } from "./toast_elements";
import { clickElement, isElementVisible } from "@pages/base_page/base_page";

export const verifyAddToCartToast = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.successfullyAddedToCartModal, true);
  await isElementVisible(page, elements.modalTitle, true);
  await isElementVisible(page, elements.modalBody, true);
};

export const viewCartButtonInToast = async (page: Page): Promise<void> => {
  await clickElement(page, elements.modalViewCartButton, false);
};
