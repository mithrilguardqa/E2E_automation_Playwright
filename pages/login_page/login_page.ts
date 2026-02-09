import { Page } from "@playwright/test";
import {
  clickElement,
  fillFieldInput,
  isElementVisible,
  checkElementText,
} from "../base_page/base_page.js";
import { elements } from "./login.elements.js";

// ---- Login functions ----

export const fillLoginEmail = async (page: Page, email: string): Promise<void> => {
  await fillFieldInput(page, elements.loginEmailField, email, "value");
};

export const fillLoginPassword = async (page: Page, password: string): Promise<void> => {
  await fillFieldInput(page, elements.loginPasswordField, password, "value");
};

export const clickLoginButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.loginButton);
};

export const login = async (page: Page, email: string, password: string): Promise<void> => {
  await fillLoginEmail(page, email);
  await fillLoginPassword(page, password);
  await clickLoginButton(page);
};

// ---- Navigation to Register ----

export const clickRegisterButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.registerButton);
};

// ---- Verify functions ----

export const verifyLoginPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.returningCustomerTitle, true);
  await isElementVisible(page, elements.newCustomerTitle, true);
};

export const verifyLoginErrorMessage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.loginErrorMessage, true);
};

export const verifyLoginErrorText = async (page: Page, text: string): Promise<void> => {
  await checkElementText(page, elements.loginErrorMessage, text);
};
