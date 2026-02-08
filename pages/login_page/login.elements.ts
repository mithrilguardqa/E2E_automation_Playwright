export const elements = Object.freeze({
  // Login section
  loginSectionTitle: `//h2[text()='Login to your account']`,
  loginEmailField: `input[data-qa="login-email"]`,
  loginPasswordField: `input[data-qa="login-password"]`,
  loginButton: `button[data-qa="login-button"]`,
  loginErrorMessage: `//p[contains(text(),'Your email or password is incorrect!')]`,

  // Signup section
  signupSectionTitle: `//h2[text()='New User Signup!']`,
  signupNameField: `input[data-qa="signup-name"]`,
  signupEmailField: `input[data-qa="signup-email"]`,
  signupButton: `button[data-qa="signup-button"]`,
  signupErrorMessage: `//p[contains(text(),'Email Address already exist!')]`,

  // Signup form (Account Information - after clicking Signup)
  accountInfoTitle: `//b[text()='Enter Account Information']`,
  titleMr: `input#id_gender1`,
  titleMrs: `input#id_gender2`,
  passwordField: `input#password`,
  daysDropdown: `select#days`,
  monthsDropdown: `select#months`,
  yearsDropdown: `select#years`,
  newsletterCheckbox: `input#newsletter`,
  offersCheckbox: `input#optin`,
  firstNameField: `input#first_name`,
  lastNameField: `input#last_name`,
  companyField: `input#company`,
  address1Field: `input#address1`,
  address2Field: `input#address2`,
  countryDropdown: `select#country`,
  stateField: `input#state`,
  cityField: `input#city`,
  zipcodeField: `input#zipcode`,
  mobileNumberField: `input#mobile_number`,
  createAccountButton: `button[data-qa="create-account"]`,

  // Account Created page
  accountCreatedTitle: `//b[text()='Account Created!']`,
  continueButton: `a[data-qa="continue-button"]`,

  // Account Deleted page
  accountDeletedTitle: `//b[text()='Account Deleted!']`,
});
