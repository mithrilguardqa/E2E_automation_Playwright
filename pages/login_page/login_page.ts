import { Locator, Page } from "@playwright/test";
import {
  clickElement,
  fillFieldInput,
  getLocator,
  checkElementValue,
  isElementEnabled,
  isElementVisible,
} from "../base_page/base_page.js";
import { elements } from "./elements.js";

// Login form
export const clickOnSignupLoginButtonNavBar = async (page: Page): Promise<void> => {
  await clickElement(page, elements.signupLoginButtonNavBar, false);
};

export const fillLoginEmail = async (page: Page, email: string): Promise<void> => {
  await fillFieldInput(page, elements.emailFieldLogin, email, "value");
};

export const fillLoginPassword = async (page: Page, password: string): Promise<void> => {
  await fillFieldInput(page, elements.passwordFieldLogin, password, "value");
};

export const clickLoginSubmit = async (page: Page): Promise<void> => {
  await clickElement(page, elements.submitButton, false);
};

// New user signup form first page
export const verifyUserIsOnFirstPageOfRegistrationForm = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.signupFormFirstPage, true);
};

export const fillSignupName = async (page: Page, name: string): Promise<void> => {
  await fillFieldInput(page, elements.nameField, name, "value");
};

export const fillSignupEmail = async (page: Page, email: string): Promise<void> => {
  await fillFieldInput(page, elements.emailFieldSignup, email, "value");
};

export const verifyErrorExistingEmail = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.errorExistingEmail, true);
};

export const clickSignupSubmit = async (page: Page): Promise<void> => {
  await clickElement(page, elements.signupButton, false);
};

// Sign up second page
export const verifyUserIsOnSecondPageOfRegistrationForm = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.signupFormSecondPage, true);
};

export const chooseGender = async (page: Page, gender: "mr" | "mrs"): Promise<void> => {
  if (gender === "mr") {
    await clickElement(page, elements.mrRadioButton, false);
  } else {
    await clickElement(page, elements.mrsRadioButton, false);
  }
};

export const checkFirstNameIsPrefilled = async (page: Page, firstName: string): Promise<void> => {
  await checkElementValue(page, elements.nameFieldSecondPage, firstName);
};

export const fillName = async (page: Page, name: string): Promise<void> => {
  await fillFieldInput(page, elements.nameFieldSecondPage, name, "value");
};

export const checkEmailIsPrefilled = async (page: Page, email: string): Promise<void> => {
  await checkElementValue(page, elements.emailFieldSecondPage, email);
};

export const checkEmailIsDisabled = async (page: Page): Promise<void> => {
  await isElementEnabled(page, elements.emailFieldSecondPage, false);
};

export const fillPassword = async (page: Page, password: string): Promise<void> => {
  await fillFieldInput(page, elements.passwordFieldSecondPage, password, "value");
};

export const chooseDayOfBirth = async (page: Page, day: string): Promise<void> => {
  const dayDropdown: Locator = await getLocator(page, elements.dayDropdown);
  await dayDropdown.selectOption(day);
};

export const chooseMonthOfBirth = async (page: Page, month: string): Promise<void> => {
  const monthDropdown: Locator = await getLocator(page, elements.monthDropdown);
  await monthDropdown.selectOption(month);
};

export const chooseYearOfBirth = async (page: Page, year: string): Promise<void> => {
  const yearDropdown: Locator = await getLocator(page, elements.yearDropdown);
  await yearDropdown.selectOption(year);
};

export const signUpForNewsletter = async (page: Page): Promise<void> => {
  await clickElement(page, elements.newsletterCheckbox, false);
};

export const signUpForSpecialOffers = async (page: Page): Promise<void> => {
  await clickElement(page, elements.specialOffersCheckbox, false);
};

export const fillFirstName = async (page: Page, firstName: string): Promise<void> => {
  await fillFieldInput(page, elements.firstNameField, firstName, "value");
};

export const fillLastName = async (page: Page, lastName: string): Promise<void> => {
  await fillFieldInput(page, elements.lastNameField, lastName, "value");
};

export const fillCompany = async (page: Page, company: string): Promise<void> => {
  await fillFieldInput(page, elements.companyField, company, "value");
};

export const fillAddress1 = async (page: Page, address1: string): Promise<void> => {
  await fillFieldInput(page, elements.address1Field, address1, "value");
};

export const fillAddress2 = async (page: Page, address2: string): Promise<void> => {
  await fillFieldInput(page, elements.address2Field, address2, "value");
};

export const chooseCountry = async (page: Page, country: string): Promise<void> => {
  const countryDropdown: Locator = await getLocator(page, elements.countryDropdown);
  await countryDropdown.selectOption(country);
};

export const fillState = async (page: Page, state: string): Promise<void> => {
  await fillFieldInput(page, elements.stateDropdown, state, "value");
};

export const fillCity = async (page: Page, city: string): Promise<void> => {
  await fillFieldInput(page, elements.cityField, city, "value");
};

export const fillZipcode = async (page: Page, zipcode: string): Promise<void> => {
  await fillFieldInput(page, elements.zipcodeField, zipcode, "value");
};

export const fillMobileNumber = async (page: Page, mobileNumber: string): Promise<void> => {
  await fillFieldInput(page, elements.mobileNumberField, mobileNumber, "value");
};

export const clickCreateAccountButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.createAccountButton, false);
};

export const verifyUserIsOnSuccessfullyCreatedOrDeletedAccount = async (
  page: Page,
  createOrDelete: "create" | "delete",
): Promise<void> => {
  if (createOrDelete === "create") {
    await isElementVisible(page, elements.createAccountSuccessMessage, true);
  } else {
    await isElementVisible(page, elements.deleteAccountSuccessMessage, true);
  }
};

export const clickContinueButton = async (page: Page): Promise<void> => {
  await clickElement(page, elements.continueButton, false);
};

export const verifyUserIsOnLoginPage = async (page: Page): Promise<void> => {
  await isElementVisible(page, elements.signupFormFirstPage, true);
};
