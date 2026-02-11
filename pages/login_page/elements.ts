export const elements = Object.freeze({
  // Login form
  signupLoginButtonNavBar: `//*[@href="/login"][normalize-space(.)='Signup / Login']`,
  emailFieldLogin: `//*[@class="login-form"]//input[@type='email']`,
  passwordFieldLogin: `//*[@class="login-form"]//input[@type='password']`,
  submitButton: `//*[@class="login-form"]//button[@type='submit']`,

  // New user signup form
  signupFormFirstPage: `//*[@class="signup-form"]`,
  nameField: `//*[@class="signup-form"]//input[@data-qa='signup-name']`,
  emailFieldSignup: `//*[@class="signup-form"]//input[@data-qa='signup-email']`,
  errorExistingEmail: `//p[text()='Email Address already exist!']`,
  signupButton: `//*[@class="signup-form"]//button[@type='submit']`,

  // Sign up second page
  signupFormSecondPage: `//b[text()='Enter Account Information']`,
  mrRadioButton: `#uniform-id_gender1`,
  mrsRadioButton: `#uniform-id_gender2`,
  nameFieldSecondPage: `#name`,
  emailFieldSecondPage: `#email`,
  passwordFieldSecondPage: `#password`,
  dayDropdown: `#days`,
  monthDropdown: `#months`,
  yearDropdown: `#years`,
  newsletterCheckbox: `#newsletter`,
  specialOffersCheckbox: `#optin`,
  firstNameField: `#first_name`,
  lastNameField: `#last_name`,
  companyField: `#company`,
  address1Field: `#address1`,
  address2Field: `#address2`,
  countryDropdown: `#country`,
  stateDropdown: `#state`,
  cityField: `#city`,
  zipcodeField: `#zipcode`,
  mobileNumberField: `#mobile_number`,
  createAccountButton: `//button[text()='Create Account']`,

  // Success create or delete account pages
  createAccountSuccessMessage: `//*[text()='Account Created!']`,
  deleteAccountSuccessMessage: `//*[text()='Account Deleted!']`,
  continueButton: `//a[@data-qa='continue-button']`,
});
