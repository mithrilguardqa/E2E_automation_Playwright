# AutomationExercise.com — Happy-Path E2E Test Suite

> **10 happy-path coverage flows** across login, registration, product search, cart, checkout, and reviews — powered by **Playwright**.

---

## Table of Contents

| #  | Test Case                                      | Suite                    |
|---:|------------------------------------------------|--------------------------|
| 1  | [Register User (Positive)](#1-register-user-positive) | Login & Registration |
| 2  | [Login User (Positive)](#2-login-user-positive)       | Login & Registration |
| 3  | [View All Products & Detail](#3-view-all-products--product-detail-positive) | Product Browsing |
| 4  | [Search Products](#4-search-products-positive)        | Product Browsing     |
| 5  | [Add Products to Cart](#5-add-products-to-cart-positive) | Cart & Checkout    |
| 6  | [Update Product Quantity](#6-update-product-quantity-in-cart-positive) | Cart & Checkout |
| 7  | [Remove Item from Cart](#7-remove-item-from-cart-positive) | Cart & Checkout  |
| 8  | [Checkout Order](#8-checkout-order-logged-in-user-positive) | Cart & Checkout |
| 9  | [Submit Product Review](#9-submit-product-review-positive) | Reviews & Feedback |
| 10 | [Contact Us Form](#10-contact-us-form-submission-positive) | Reviews & Feedback |

---

## Suite 1 — Login & Registration

### 1. Register User (Positive)

- **Scope:** Verify that a new user can sign up successfully, be logged in, and then clean up the account.
- **Prerequisites:** User is on the home page, not logged in. A unique email address is generated for registration. An existing user account is available for the negative-path check.

**Steps:**

1. Click on the **Signup / Login** link from the home page.
2. Verify the user lands on the first page of the registration form.
3. Attempt to sign up with an **already existing** email — verify an error message is shown.
4. Enter a **new unique email** and click **Signup**.
5. Verify the user lands on the second page of the registration form (*Enter Account Information*).
6. Fill out all required fields: choose gender (*Mr*), verify the first name and email are pre-filled and email is disabled, enter a password, select date of birth, tick the newsletter and special-offers checkboxes, fill in first name, last name, company, address 1, address 2, country, state, city, zip code, and mobile number.
7. Click **Create Account**.
8. Verify the browser navigates to the account-created page and a success message is displayed.
9. Click **Continue** and confirm the user is logged in (header shows *"Logged in as \[username\]"*).
10. Delete the newly created account via the **Delete Account** option.
11. Verify the browser navigates to the account-deleted page and a success message is displayed.
12. Click **Continue** and confirm the user is logged out.

---

### 2. Login User (Positive)

- **Scope:** Verify that an existing user can log in with valid credentials and log out afterwards.
- **Prerequisites:** A user account exists (e.g. from a previous registration). User is on the home page and logged out.

**Steps:**

1. Click on the **Signup / Login** link on the home page.
2. Under *Login to your account*, enter the correct email address and password for the existing account.
3. Click the **Login** button.
4. Verify that the login is successful by confirming the presence of *"Logged in as \[username\]"* in the header.
5. Click **Logout** to end the session.
6. Verify the user is logged out.
7. Verify the user is redirected back to the login page.

---

## Suite 2 — Product Browsing

### 3. View All Products & Product Detail (Positive)

- **Scope:** Verify that the user can browse the full product list and view details of a specific product.
- **Prerequisites:** User is on the home page (login status irrelevant).

**Steps:**

1. Click on the **Products** menu option in the navigation.
2. Verify that the *All Products* page is displayed, showing a list of products.
3. Navigate to 'Women > Dress' section
4. Verify the breadcrumb navigation
5. Verify the number of items matches the expected result
6. Verify the item names and prices matches the expected results
7. Navigate to product details page and check additional information matches the expected results
8. Navigate to 'Men > Tshirt' section
9. Verify the breadcrumb navigation
10. Verify the number of items matches the expected one
11. Enter product details page
12. Verify the additional information matches the expected result as well 

---

### 4. Search Products (Positive)

- **Scope:** Verify that using the search feature returns relevant products.
- **Prerequisites:** User is on the *All Products* page (from the navigation menu).

**Steps:**

1. Locate the **Search** input field on the products page.
2. Enter a valid product name (e.g. *"Dress"*) into the search bar and click **Search**.
3. Verify that the search results page appears with the header *"Searched Products"*.
4. Confirm that all products displayed in the results relate to the search query (the query term appears in each product's name or description).

---

## Suite 3 — Cart & Checkout

### 5. Add Products to Cart (Positive)

- **Scope:** Verify that a user can add multiple products to the shopping cart and view them.
- **Prerequisites:** User is on the product listing page (e.g. *All Products* or home page).

**Steps:**

1. On the products list, hover over the first product and click **Add to cart**.
2. When the cart modal appears, click **Continue Shopping** to continue browsing.
3. Hover over a second product and click **Add to cart** as well.
4. In the cart modal, click **View Cart** to open the cart page.
5. Verify that both products are present in the cart with correct details (product names, quantities, individual prices).
6. Verify that the cart total reflects the sum of the products' prices (taking quantity into account for each).

---

### 6. Update Product Quantity in Cart (Positive)

- **Scope:** Verify that the user can update the quantity of a product and see the update in the cart.
- **Prerequisites:** User is viewing a product detail page for an in-stock product.

**Steps:**

1. On the product detail page, locate the **Quantity** field and change the value (e.g. increase from `1` to `3`).
2. Click the **Add to cart** button on the product page.
3. Click **View Cart** in the modal to open the cart page.
4. Verify that the product appears in the cart with the exact quantity selected (e.g. quantity shows `3`).
5. Confirm that the cart calculates the total price correctly as `price × quantity` for that product.

---

### 7. Remove Item from Cart (Positive)

- **Scope:** Verify that the user can remove a product from the cart successfully.
- **Prerequisites:** At least one product is already added to the cart. User is on the *View Cart* page.

**Steps:**

1. On the cart page, identify a product listed and click the **✕ Remove** button for that product.
2. Confirm that the product is removed from the cart list immediately.
3. Verify that the cart is updated: the removed item no longer appears, and the cart total reflects the removal (or shows zero items if it was the only product).

---

### 8. Checkout Order — Logged-in User (Positive)

- **Scope:** Verify that a logged-in user can successfully place an order (checkout) from the cart.
- **Prerequisites:** User is logged in and has at least one item in the cart ready to purchase.

**Steps:**

1. Click the **Cart** button to go to the cart page, then click **Proceed To Checkout**.
2. On the checkout page, verify that the *Address Details* and *Review Your Order* sections are visible and showing the correct information (shipping/billing address and ordered items with prices).
3. *(Optional)* Enter a comment or special instructions in the order comment text area.
4. Click the **Place Order** button.
5. Enter the payment information (Name on Card, Card Number, CVC, expiration date) in the provided form.
6. Submit the payment by clicking **Pay and Confirm Order**.
7. Verify that a confirmation message is displayed (e.g. *"Your order has been placed successfully!"*) indicating the order completion.
8. *(Optional)* Navigate to **Delete Account** if account cleanup is needed, verify the account deletion message, then continue to home page.

---

## Suite 4 — Reviews & Feedback

### 9. Submit Product Review (Positive)

- **Scope:** Verify that a user can write and submit a review on a product detail page and see a success confirmation.
- **Prerequisites:** User is on a specific product's detail page (with a review form present). User can be logged out or logged in.

**Steps:**

1. On the product detail page, scroll to the **Write Your Review** section.
2. Enter a name, an email address, and text for the review into the respective fields.
3. Click the **Submit** button to post the review.
4. Verify that a success message is displayed (e.g. *"Thank you for your review."*), indicating the review was submitted successfully.

---

### 10. Contact Us Form Submission (Positive)

- **Scope:** Verify that a user can submit a message through the contact form and receive a success confirmation.
- **Prerequisites:** User is on the home page (any user state).

**Steps:**

1. Click the **Contact us** link in the navigation menu.
2. On the *Contact Us* page, verify that the *Get In Touch* form is visible.
3. Fill in the contact form fields: enter a name, email address, subject, and a message. *(Optional: attach a file if the form allows file upload.)*
4. Click the **Submit** button to send the form. If a confirmation alert pops up, click **OK** to proceed.
5. Verify that a success message is displayed on the page, such as *"Success! Your details have been submitted successfully."*
6. Click the **Home** button/link to return to the home page and confirm that the homepage loads correctly after submission.
