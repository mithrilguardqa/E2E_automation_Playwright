export const elements = Object.freeze({
  paymentPageTitle: `//h2[text()='Payment']`,
  nameOnCardField: `//input[@name='name_on_card']`,
  cardNumberField: `//input[@name='card_number']`,
  cvvField: `//input[@name='cvc']`,
  expirationMonthField: `//input[@name='expiry_month']`,
  expirationYearField: `//input[@name='expiry_year']`,
  payAndConfirmButton: `#submit`,
  orderPlacedHeader: `//h2//b[text()='Order Placed!']`,
  orderPlacedMessage: `//p[text()='Congratulations! Your order has been confirmed!']`,
  successScreenContinueButton: `//a[@data-qa='continue-button']`,
  downloadInvoiceButton: `//a[contains(@class,'btn') and text()='Download Invoice']`,
});
