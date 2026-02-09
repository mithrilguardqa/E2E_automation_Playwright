export const elements = Object.freeze({
  // Page title
  pageTitle: `.page-title h1`,

  // Gender
  genderMale: `input#gender-male`,
  genderFemale: `input#gender-female`,

  // Personal info
  firstNameField: `input#FirstName`,
  lastNameField: `input#LastName`,

  // Date of birth
  dobDayDropdown: `select[name="DateOfBirthDay"]`,
  dobMonthDropdown: `select[name="DateOfBirthMonth"]`,
  dobYearDropdown: `select[name="DateOfBirthYear"]`,

  // Email and password
  emailField: `input#Email`,
  companyField: `input#Company`,
  passwordField: `input#Password`,
  confirmPasswordField: `input#ConfirmPassword`,

  // Newsletter
  newsletterCheckbox: `input#Newsletter`,

  // Register button
  registerButton: `button#register-button`,

  // Result
  registrationResultMessage: `.result`,
  registrationContinueButton: `.register-continue-button`,

  // Validation errors
  validationSummary: `.validation-summary-errors`,
  firstNameError: `span#FirstName-error`,
  lastNameError: `span#LastName-error`,
  emailError: `span#Email-error`,
  passwordError: `span#Password-error`,
  confirmPasswordError: `span#ConfirmPassword-error`,
});
