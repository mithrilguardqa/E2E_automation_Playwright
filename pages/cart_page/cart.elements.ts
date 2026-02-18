export const elements = Object.freeze({
  emptyCartMessage: `#empty_cart`,
  emptyCartNavigateToProductsButton: `//*[@id='empty_cart']//*[text()='here']`,
  cartTableBody: `//table[@id='cart_info_table']//tbody`,
  cartDeleteButton: `.cart_quantity_delete`,
  proceedToCheckoutButton: `//*[contains(@class,'btn-default check_out')]`,
  addressDetailsHeader: `//h2[text()='Address Details']`,
  deliveryAddressContainer: `#address_delivery`,
  billingAddressContainer: `#address_invoice`,
  reviewOrderHeader: `//h2[text()='Review Your Order']`,
  itemsTableBody: `//table[@id='order_table']//tbody`,

  // Order total price
  orderTotalPrice: `(//p[@class='cart_total_price'])[last()]`,
});
