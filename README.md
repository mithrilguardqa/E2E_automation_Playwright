# AutomationExercise.com — Happy-Path E2E Test Suite

> **10 happy-path coverage flows** across login, registration, product search, cart, checkout, and reviews — powered by **Playwright**.

---

## Table of Contents

|   # | Test Case                                                                        | Suite                |
| --: | -------------------------------------------------------------------------------- | -------------------- |
|   1 | [Register User (Positive)](#1-register-user-positive)                            | Login & Registration |
|   2 | [Login User (Positive)](#2-login-user-positive)                                  | Login & Registration |
|   3 | [View All Products & Detail](#3-view-all-products--product-detail-positive)      | Product Browsing     |
|   4 | [Search Products](#4-search-products-positive)                                   | Product Browsing     |
|   5 | [Add Products to Cart](#5-add-products-to-cart-positive)                         | Cart & Checkout      |
|   6 | [Remove Products from Cart](#6-update-product-quantity-in-cart-positive)         | Cart & Checkout      |
|   7 | [Review Order Details in Checkout](#7-review-order-details-in-checkout-positive)  | Cart & Checkout      |
|   8 | [Finalize Order Payment](#8-finalize-order-payment-positive)                     | Cart & Checkout      |
|   9 | [Submit Product Review](#9-submit-product-review-positive)                       | Reviews & Feedback   |
|  10 | [Contact Us Form](#10-contact-us-form-submission-positive)                       | Reviews & Feedback   |

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
5. Verify the user lands on the second page of the registration form (_Enter Account Information_).
6. Fill out all required fields: choose gender (_Mr_), verify the first name and email are pre-filled and email is disabled, enter a password, select date of birth, tick the newsletter and special-offers checkboxes, fill in first name, last name, company, address 1, address 2, country, state, city, zip code, and mobile number.
7. Click **Create Account**.
8. Verify the browser navigates to the account-created page and a success message is displayed.
9. Click **Continue** and confirm the user is logged in (header shows _"Logged in as \[username\]"_).
10. Delete the newly created account via the **Delete Account** option.
11. Verify the browser navigates to the account-deleted page and a success message is displayed.
12. Click **Continue** and confirm the user is logged out.

---

### 2. Login User (Positive)

- **Scope:** Verify that an existing user can log in with valid credentials and log out afterwards.
- **Prerequisites:** A user account exists (e.g. from a previous registration). User is on the home page and logged out.

**Steps:**

1. Click on the **Signup / Login** link on the home page.
2. Under _Login to your account_, enter the correct email address and password for the existing account.
3. Click the **Login** button.
4. Verify that the login is successful by confirming the presence of _"Logged in as \[username\]"_ in the header.
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
2. Verify that the _All Products_ page is displayed, showing a list of products.
3. Navigate to 'Women > Dress' section
4. Verify the breadcrumb navigation
5. Verify the number of items matches the expected result
6. Verify the item names and prices matches the expected results
7. Navigate to product details page and check additional information matches the expected results

---

### 4. Search Products (Positive)

- **Scope:** Verify that using the search feature returns relevant products and that product details are correct.
- **Prerequisites:** User is on the _All Products_ page (from the navigation menu).

**Steps:**

1. Navigate to the **Products** page and verify the user is on the correct page.
2. Enter a search query (e.g. _"jeans"_) into the search bar and click **Search**.
3. Verify the URL updates to include the search query (e.g. `/products?search=jeans`).
4. Verify the correct number of products are displayed matching the expected count from the data provider.
5. Confirm that all product names displayed in the results contain the search query (case-insensitive).
6. Click on the **View Product** button for a random product from the search results.
7. Verify the product details page displays the correct name, category, price, and brand.

---

## Suite 3 — Cart & Checkout

### 5. Add Products to the Cart (Positive)

- **Scope:** Verify that a user can add multiple products to the shopping cart and view them.
- **Prerequisites:** User is on the product listing page (e.g. _All Products_ or home page).

**Steps:**

1. On the products list, hover over the first product and click **Add to cart**.
2. When the cart modal appears, click **Continue Shopping** to continue browsing.
3. Hover over a second product and click **Add to cart** as well.
4. In the cart modal, click **View Cart** to open the cart page.
5. Verify that both products are present in the cart with correct details (product names, quantities, individual prices).
6. Verify that the cart total reflects the sum of the products' prices (taking quantity into account for each).

---

### 6. Remove Items from the Cart (Positive)

- **Scope:** Verify that the user can remove a product from the cart successfully.
- **Prerequisites:** At least one product is already added to the cart. User is on the _View Cart_ page.

**Steps:**

1. On the cart page, identify a product listed and click the **✕ Remove** button for that product.
2. Confirm that the product is removed from the cart list immediately.
3. Verify that the cart is updated: the removed item no longer appears, and the cart total reflects the removal (or shows zero items if it was the only product).

---

### 7. Review Order Details in Checkout (Positive)

- **Scope:** Verify that a logged-in user can review order and address details on the checkout page before placing an order.
- **Prerequisites:** User is logged in. The cart is empty at the start of the test.

**Steps:**

1. Navigate to the **Cart** page and ensure it is empty (clear any existing items).
2. Navigate to the home page and add **two products** to the cart, clicking **Continue Shopping** after each.
3. Navigate to the **Cart** page and verify the breadcrumb navigation shows _"Shopping Cart"_.
4. Verify the cart contains the correct products.
5. Click **Proceed To Checkout** and verify the breadcrumb navigation shows _"Checkout"_.
6. Verify the **delivery address** details are correct (name, company, addresses, country, state, city, zip code, phone).
7. Verify the **billing address** details are correct (same fields as delivery address).
8. Verify the **order details** for each product — name, price, and quantity.
9. Verify the **order total price** is the correct sum of both products' prices.

---

### 8. Finalize Order Payment (Positive)

- **Scope:** Verify that a user can finalize an order by entering payment details, confirming, and downloading the invoice.
- **Prerequisites:** User is logged in and has items in the cart ready for checkout.

**Steps:**

1.

---

## Suite 4 — Reviews & Feedback

### 9. Submit Product Review (Positive)

- **Scope:** Verify that a user can write and submit a review on a product detail page and see a success confirmation.
- **Prerequisites:** User is on a specific product's detail page (with a review form present). User can be logged out or logged in.

**Steps:**

1. On the product detail page, scroll to the **Write Your Review** section.
2. Enter a name, an email address, and text for the review into the respective fields.
3. Click the **Submit** button to post the review.
4. Verify that a success message is displayed (e.g. _"Thank you for your review."_), indicating the review was submitted successfully.

---

### 10. Contact Us Form Submission (Positive)

- **Scope:** Verify that a user can submit a message through the contact form and receive a success confirmation.
- **Prerequisites:** User is on the home page (any user state).

**Steps:**

1. Click the **Contact us** link in the navigation menu.
2. On the _Contact Us_ page, verify that the _Get In Touch_ form is visible.
3. Fill in the contact form fields: enter a name, email address, subject, and a message. _(Optional: attach a file if the form allows file upload.)_
4. Click the **Submit** button to send the form. If a confirmation alert pops up, click **OK** to proceed.
5. Verify that a success message is displayed on the page, such as _"Success! Your details have been submitted successfully."_
6. Click the **Home** button/link to return to the home page and confirm that the homepage loads correctly after submission.
