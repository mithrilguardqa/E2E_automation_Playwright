export const elements = Object.freeze({
  cartInfoTable: `#cart_info_table`,
  cartProductRow: `#cart_info_table tbody tr`,
  cartProductName: `.cart_description h4 a`,
  cartProductPrice: `.cart_price p`,
  cartProductQuantity: `.cart_quantity button`,
  cartProductTotal: `.cart_total_price`,
  cartDeleteButton: `.cart_quantity_delete a`,
  emptyCartMessage: `//b[text()='Cart is empty!']`,
  proceedToCheckoutButton: `.btn.check_out`,
  registerLoginLink: `//u[text()='Register / Login']`,

  // Checkout section
  deliveryAddressSection: `#address_delivery`,
  billingAddressSection: `#address_invoice`,
  commentTextArea: `textarea.form-control`,
  placeOrderButton: `a.check_out`,

  // Payment section
  nameOnCardField: `input[data-qa="name-on-card"]`,
  cardNumberField: `input[data-qa="card-number"]`,
  cvcField: `input[data-qa="cvc"]`,
  expiryMonthField: `input[data-qa="expiry-month"]`,
  expiryYearField: `input[data-qa="expiry-year"]`,
  payAndConfirmButton: `button[data-qa="pay-button"]`,

  // Order confirmation
  orderConfirmationTitle: `//b[text()='Order Placed!']`,
});
