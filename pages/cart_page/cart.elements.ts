export const elements = Object.freeze({
  // Cart table
  cartTable: `.cart`,
  cartProductRow: `.cart tbody tr`,
  cartProductName: `.cart .product a.product-name`,
  cartProductPrice: `.cart .product-unit-price`,
  cartProductQuantity: `.cart .qty-input`,
  cartProductTotal: `.cart .product-subtotal`,
  cartRemoveCheckbox: `.cart .remove-from-cart input`,

  // Cart actions
  updateCartButton: `.update-cart-button`,
  continueShoppingButton: `.continue-shopping-button`,
  emptyCartMessage: `.no-data`,

  // Order summary
  orderSummary: `.cart-footer .totals`,
  orderSubTotal: `.cart-footer .order-subtotal .value-summary`,
  orderTotal: `.cart-footer .order-total .value-summary`,

  // Discount / Gift card
  discountCodeInput: `input#discountcouponcode`,
  applyDiscountButton: `.apply-discount-coupon-code-button`,
  giftCardInput: `input#giftcardcouponcode`,
  applyGiftCardButton: `.apply-gift-card-coupon-code-button`,

  // Terms of service
  termsOfServiceCheckbox: `input#termsofservice`,

  // Checkout button
  checkoutButton: `button#checkout`,

  // Estimate shipping
  estimateShippingButton: `.estimate-shipping-button`,
});
