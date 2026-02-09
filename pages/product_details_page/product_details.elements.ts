export const elements = Object.freeze({
  // Product info
  productName: `.product-name h1`,
  productShortDescription: `.short-description`,
  productFullDescription: `.full-description`,
  productSku: `.sku .value`,
  productPrice: `.product-price span`,
  productOldPrice: `.old-product-price`,
  productAvailability: `.availability .value`,

  // Quantity and add to cart
  quantityInput: `.add-to-cart-panel input.qty-input`,
  addToCartButton: `.add-to-cart-panel .add-to-cart-button`,
  addToWishlistButton: `.add-to-wishlist-button`,
  addToCompareButton: `.add-to-compare-list-button`,
  emailFriendButton: `.email-a-friend-button`,

  // Product attributes (for configurable products)
  productAttributes: `.product-attributes`,

  // Product reviews
  productReviewsLink: `.product-reviews-page-link a`,

  // Breadcrumb
  breadcrumb: `.breadcrumb`,

  // Success notification bar
  barNotification: `#bar-notification`,
  barNotificationSuccess: `.bar-notification.success`,
  barNotificationClose: `.bar-notification .close`,

  // Product images
  productGallery: `.gallery`,
  productMainImage: `.picture img`,

  // Product tags
  productTags: `.product-tags-list`,
});
