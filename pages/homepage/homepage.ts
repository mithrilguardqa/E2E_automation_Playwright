import { Page } from "@playwright/test";
import { getAllMatchingElementsText, isElementVisible } from "@pages/base_page/base_page.js";
import { elements } from "./elements.js";

export const verifyHomepageIsVisible = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.homepageLogo, true);
};

export const verifyUserIsLoggedIn = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.logoutButtonNavBar, true);
};

export const verifyLoginIsSuccessful = async (page: Page): Promise<string> => {
  const loggedInAsUsername: string[] = await getAllMatchingElementsText(
    page,
    elements.fullLoggedInTitle,
  );
  if (loggedInAsUsername.length === 0) {
    throw new Error("Login failed");
  }
  return loggedInAsUsername.flatMap((username) => username.split(" ")[1]).join("");
};
