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

// ---- Signup functions ----

export const fillSignupName = async (page: Page, name: string): Promise<void> => {
  await fillFieldInput(page, elements.signupNameField, name, "value");
};

export const fillSignupEmail = async (page: Page, email: string): Promise<void> => {
  await fillFieldInput(page, elements.signupEmailField, email, "value");
};

export const clickSignupButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.signupButton);
};

export const signup = async (page: Page, name: string, email: string): Promise<void> => {
  await fillSignupName(page, name);
  await fillSignupEmail(page, email);
  await clickSignupButton(page);
};

// ---- Signup Form (Account Information) functions ----

export const selectTitle = async (page: Page, title: "Mr" | "Mrs"): Promise<void> => {
  const selector = title === "Mr" ? elements.titleMr : elements.titleMrs;
  await page.locator(selector).check();
};

export const fillPassword = async (page: Page, password: string): Promise<void> => {
  await fillFieldInput(page, elements.passwordField, password, "value");
};

export const selectDateOfBirth = async (
  page: Page,
  day: string,
  month: string,
  year: string
): Promise<void> => {
  await page.locator(elements.daysDropdown).selectOption(day);
  await page.locator(elements.monthsDropdown).selectOption(month);
  await page.locator(elements.yearsDropdown).selectOption(year);
};

export const checkNewsletter = async (page: Page): Promise<void> => {
  await page.locator(elements.newsletterCheckbox).check();
};

export const checkOffers = async (page: Page): Promise<void> => {
  await page.locator(elements.offersCheckbox).check();
};

export const fillAddressInfo = async (
  page: Page,
  addressInfo: {
    firstName: string;
    lastName: string;
    company?: string;
    address1: string;
    address2?: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
  }
): Promise<void> => {
  await fillFieldInput(page, elements.firstNameField, addressInfo.firstName, "value");
  await fillFieldInput(page, elements.lastNameField, addressInfo.lastName, "value");

  if (addressInfo.company) {
    await fillFieldInput(page, elements.companyField, addressInfo.company, "value");
  }

  await fillFieldInput(page, elements.address1Field, addressInfo.address1, "value");

  if (addressInfo.address2) {
    await fillFieldInput(page, elements.address2Field, addressInfo.address2, "value");
  }

  await page.locator(elements.countryDropdown).selectOption(addressInfo.country);
  await fillFieldInput(page, elements.stateField, addressInfo.state, "value");
  await fillFieldInput(page, elements.cityField, addressInfo.city, "value");
  await fillFieldInput(page, elements.zipcodeField, addressInfo.zipcode, "value");
  await fillFieldInput(page, elements.mobileNumberField, addressInfo.mobileNumber, "value");
};

export const clickCreateAccountButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.createAccountButton);
};

export const clickContinueButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.continueButton);
};

// ---- Verify functions ----

export const verifyLoginPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.loginSectionTitle, true);
  await isElementVisible(page, elements.signupSectionTitle, true);
};

export const verifyLoginErrorMessage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.loginErrorMessage, true);
};

export const verifySignupErrorMessage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.signupErrorMessage, true);
};

export const verifyAccountInfoPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.accountInfoTitle, true);
};

export const verifyAccountCreated = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.accountCreatedTitle, true);
};

export const verifyAccountDeleted = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.accountDeletedTitle, true);
};
