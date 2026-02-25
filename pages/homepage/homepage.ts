import { Page } from "@playwright/test";
import { checkElementText, clickElement, isElementVisible } from "@pages/base_page/base_page";
import { elements } from "@pages/homepage/elements";

// Click functions
export const clickContactUsButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.contactUsButtonNavBar, false);
};

export const deleteUserAccount = async (page: Page): Promise<void> => {
  await clickElement(page, elements.deleteAccountButtonNavBar, false);
};

export const logout = async (page: Page): Promise<void> => {
  await clickElement(page, elements.logoutButtonNavBar, false);
};

export const addProductToCart = async (page: Page, productName: string): Promise<void> => {
  const addToCartButton: string = `//*[@class='productinfo text-center']//p[text()='${productName}']/following-sibling::*[1]`;

  await page.locator(addToCartButton).scrollIntoViewIfNeeded();
  await clickElement(page, addToCartButton, false);
};

// Verify functions
export const verifyHomepageIsVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.homepageLogo, true);
};

export const verifyUserIsLogged = async (page: Page, username: string): Promise<void> => {
  await isElementVisible(page, elements.logoutButtonNavBar, true);
  await checkElementText(page, elements.loggedInAsUsername, username);
};

export const verifyUserIsLoggedOut = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.logoutButtonNavBar, false);
};
