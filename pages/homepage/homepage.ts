import { Page } from "@playwright/test";
import { checkElementText, clickElement, isElementVisible } from "@pages/base_page/base_page.js";
import { elements } from "./elements.js";

export const verifyHomepageIsVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.homepageLogo, true);
};

export const verifyUserIsLogged = async (page: Page, username: string): Promise<void> => {
  await isElementVisible(page, elements.logoutButtonNavBar, true);
  await checkElementText(page, elements.loggedInAsUsername, username);
};

export const deleteUserAccount = async (page: Page): Promise<void> => {
  await clickElement(page, elements.deleteAccountButtonNavBar, false);
};

export const verifyUserIsLoggedOut = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.logoutButtonNavBar, false);
};

export const logout = async (page: Page): Promise<void> => {
  await clickElement(page, elements.logoutButtonNavBar, false);
};

export const addProductToCart = async (page: Page, productName: string): Promise<void> => {
  const productHoverArea: string = `//*[@class='productinfo text-center']//p[text()='${productName}']`;
  const productAddToCardButtonArea: string = `//*[@class='overlay-content']//p[text()='${productName}']/following-sibling::*`;

  await page.hover(productHoverArea);
  await page.waitForTimeout(300);
  await clickElement(page, productAddToCardButtonArea, true);
};
