import { Page } from "@playwright/test";
import { checkElementText } from "../base_page/base_page.js";
import { elements } from "./product_details.elements.js";

export const verifyProductDetails = async (
  page: Page,
  productName: string,
  productCategory: string,
  productPrice: string,
  productBrand: string,
): Promise<void> => {
  await checkElementText(page, elements.productName, productName);
  await checkElementText(page, elements.productCategory, productCategory);
  await checkElementText(page, elements.productPrice, productPrice);
  await checkElementText(page, elements.productBrand, productBrand);
};
