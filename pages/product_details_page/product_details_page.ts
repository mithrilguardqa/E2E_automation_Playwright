import { Page } from "@playwright/test";
import {
  clickElement,
  fillFieldInput,
  isElementVisible,
  checkElementContainsText,
} from "../base_page/base_page.js";
import { elements } from "./product_details.elements.js";

// Verify functions
export const verifyProductDetailsPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.productName, true);
  await isElementVisible(page, elements.productPrice, true);
  await isElementVisible(page, elements.addToCartButton, true);
};

export const verifyProductName = async (page: Page, name: string): Promise<void> => {
  await checkElementContainsText(page, elements.productName, name);
};

export const verifyProductCategory = async (page: Page, category: string): Promise<void> => {
  await checkElementContainsText(page, elements.productCategory, category);
};

export const verifyProductBrand = async (page: Page, brand: string): Promise<void> => {
  await checkElementContainsText(page, elements.productBrand, brand);
};

// Interaction functions
export const setQuantity = async (page: Page, quantity: string): Promise<void> => {
  const quantityField = page.locator(elements.quantityInput);
  await quantityField.clear();
  await quantityField.fill(quantity);
};

export const clickAddToCart = async (page: Page): Promise<void> => {
  await clickElement(page, elements.addToCartButton);
};

// Review functions
export const writeReview = async (
  page: Page,
  name: string,
  email: string,
  review: string
): Promise<void> => {
  await fillFieldInput(page, elements.reviewNameField, name, "value");
  await fillFieldInput(page, elements.reviewEmailField, email, "value");
  await fillFieldInput(page, elements.reviewTextField, review, "value");
  await clickElement(page, elements.submitReviewButton);
};

export const verifyReviewSuccess = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.reviewSuccessMessage, true);
};
