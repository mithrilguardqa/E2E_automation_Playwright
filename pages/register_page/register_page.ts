import { Page } from "@playwright/test";
import {
  clickElement,
  fillFieldInput,
  isElementVisible,
  checkElementContainsText,
} from "../base_page/base_page.js";
import { elements } from "./register.elements.js";

// ---- Registration form functions ----

export const selectGender = async (page: Page, gender: "male" | "female"): Promise<void> => {
  const selector = gender === "male" ? elements.genderMale : elements.genderFemale;
  await page.locator(selector).check();
};

export const fillFirstName = async (page: Page, firstName: string): Promise<void> => {
  await fillFieldInput(page, elements.firstNameField, firstName, "value");
};

export const fillLastName = async (page: Page, lastName: string): Promise<void> => {
  await fillFieldInput(page, elements.lastNameField, lastName, "value");
};

export const selectDateOfBirth = async (
  page: Page,
  day: string,
  month: string,
  year: string
): Promise<void> => {
  await page.locator(elements.dobDayDropdown).selectOption(day);
  await page.locator(elements.dobMonthDropdown).selectOption(month);
  await page.locator(elements.dobYearDropdown).selectOption(year);
};

export const fillEmail = async (page: Page, email: string): Promise<void> => {
  await fillFieldInput(page, elements.emailField, email, "value");
};

export const fillCompany = async (page: Page, company: string): Promise<void> => {
  await fillFieldInput(page, elements.companyField, company, "value");
};

export const fillPassword = async (page: Page, password: string): Promise<void> => {
  await fillFieldInput(page, elements.passwordField, password, "value");
};

export const fillConfirmPassword = async (page: Page, password: string): Promise<void> => {
  await fillFieldInput(page, elements.confirmPasswordField, password, "value");
};

export const toggleNewsletter = async (page: Page, subscribe: boolean): Promise<void> => {
  const checkbox = page.locator(elements.newsletterCheckbox);
  if (subscribe) {
    await checkbox.check();
  } else {
    await checkbox.uncheck();
  }
};

export const clickRegisterButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.registerButton);
};

export const clickContinueButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.registrationContinueButton);
};

// ---- Full registration flow ----

export const registerUser = async (
  page: Page,
  userInfo: {
    gender?: "male" | "female";
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    company?: string;
    dobDay?: string;
    dobMonth?: string;
    dobYear?: string;
  }
): Promise<void> => {
  if (userInfo.gender) {
    await selectGender(page, userInfo.gender);
  }

  await fillFirstName(page, userInfo.firstName);
  await fillLastName(page, userInfo.lastName);

  if (userInfo.dobDay && userInfo.dobMonth && userInfo.dobYear) {
    await selectDateOfBirth(page, userInfo.dobDay, userInfo.dobMonth, userInfo.dobYear);
  }

  await fillEmail(page, userInfo.email);

  if (userInfo.company) {
    await fillCompany(page, userInfo.company);
  }

  await fillPassword(page, userInfo.password);
  await fillConfirmPassword(page, userInfo.password);
  await clickRegisterButton(page);
};

// ---- Verify functions ----

export const verifyRegisterPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.firstNameField, true);
  await isElementVisible(page, elements.lastNameField, true);
  await isElementVisible(page, elements.emailField, true);
  await isElementVisible(page, elements.registerButton, true);
};

export const verifyRegistrationSuccess = async (page: Page): Promise<void> => {
  await checkElementContainsText(page, elements.registrationResultMessage, "Your registration completed");
};

export const verifyValidationError = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.validationSummary, true);
};
