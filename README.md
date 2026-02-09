# Mithril Guard QA Company

## E2E Testing Framework using Playwright

> 10 happy-path coverage flows across login, registration, search, cart, checkout, orders, reviews, and product comparison.

---

## Suite 1 -- Login & Registration Flows

### 1. Register User (Positive)

- **Scope:** Individual test creating a unique user every time.
- **Steps:**
  1. Navigate to homepage
  2. Verify user is NOT logged in
  3. Navigate to Register page
  4. Fill all the required fields
  5. Click "Register" button
  6. Check "Your registration is complete" message
  7. Check user is logged in after registration
  8. Navigate to "Customer info" screen in My Account page
  9. Verify data entered during registration is correct
  10. Verify user is subscribed to "Newsletter"

### 2. Register User -- Omit Required Field (Negative)

- **Scope:** Individual test to check that a user cannot register without filling in all required fields.
- **Steps:**
  1. Navigate to homepage
  2. Verify user is NOT logged in
  3. Navigate to Register page
  4. Try to register with a completely blank form
  5. Check error messages
  6. Fill first name, omit last name
  7. Enter a wrong-format email and check validation
  8. Omit "Your password" fields
  9. Try to register again and check only the missing fields show errors
  10. Check Password and Confirm Password fields have the same input validation

### 3. Login with Correct Credentials (Positive)

- **Scope:** Individual test to check that a user can log in with previously created credentials.
- **Prerequisites:** Create user before the test (in `beforeEach` hook -- generally done via API call, here with the UI).
- **Steps:**
  1. Navigate to homepage
  2. Verify user is NOT logged in
  3. Navigate to Login page
  4. Fill fields with data from the registration prerequisites
  5. Hit Login button and check that user is logged in successfully -- "Register" and "Login" are now "My Account" and "Log out"

### 4. Login with Incorrect Credentials (Negative)

- **Scope:** Individual test to check that a user cannot log in with wrong credentials.
- **Steps:**
  1. Navigate to homepage and verify user is NOT logged in
  2. Navigate to Login page
  3. Fill fields with different usernames and passwords and attempt login
  4. Check the error is intentionally vague (does not reveal whether email or password is wrong -- security best practice)

### 5. Forgotten Password Flow (Positive)

> Currently no implementation -- no emails are sent.

---

## Suite 2 -- Search, Cart & Checkout Flows

### 6. Search Products, Add to Cart, Checkout & Finish Order

- **Scope:** Individual test covering the full user journey from searching an item to placing an order.
- **Prerequisites:** Create user before the test.
- **Steps:**
  1. Log in with the user
  2. Search item 1 (Apple MacBook Pro) -- add to cart -- check success toast
  3. Search item 2 (iPhone 16) -- add to cart -- check success toast
  4. Search item 3 (Nike shoes) -- try to add without selecting color, size, and print
  5. Choose color, size, and print, then add to cart
  6. Search item 4 (Night Visions) -- add to cart -- check success toast
  7. Search item 5 (Fahrenheit 451 by Ray Bradbury) -- add to cart -- check success toast
  8. Search item 6 (Flower Girl Bracelet) -- add to cart -- check success toast
  9. After each item, verify the cart counter increments
  10. Click "Estimate shipping", fill data, and apply -- shipping should be $0
  11. Check the full price for all products
  12. Choose "Gift wrapping" and check the price increases by $10
  13. Try to checkout without clicking "I agree..." -- check the error modal
  14. Click "Checkout" button
  15. Fill Country, City, Address, and other required fields
  16. Click "Continue" on Shipping menu
  17. Choose card payment -- check that an expired card triggers validation
  18. Fill correct card number and remaining fields
  19. Click "Confirm"
  20. Click "Click here for order details." to open Order information
  21. Verify all data in the Order information screen

### 7. Cancel Submitted Order from My Account (Positive)

- **Scope:** Individual test covering the journey of canceling an order, editing it, and reordering.
- **Prerequisites:** Create user + create order (normally done via API call).
- **Steps:**
  1. Go to the My Account page
  2. Click "Cancel order" and confirm from the alert window
  3. Check toast message and verify the status
  4. Click "Reorder" button
  5. Remove 2 items and Gift wrapping
  6. Click "Agree..." and proceed to Checkout
  7. Confirm Billing address
  8. Confirm Shipping address
  9. Confirm Shipping method
  10. Change Payment method to "Check / Money order"
  11. Proceed to "Confirm order"
  12. Check success screen
  13. Navigate to "Order information" again
  14. Check all information for billing, shipping, and payments is updated correctly
  15. Check the products reflect the edit

---

## Suite 3 -- Reviews & Comparison

### 8. Submit Product Reviews (Positive)

- **Scope:** Individual test covering the user journey for submitting a product review.
- **Prerequisites:** Create user.
- **Steps:**
  1. Check user is on Homepage
  2. Search or navigate to a product (MacBook Pro)
  3. Read existing reviews
  4. Add Review title, Review text, and Rating
  5. Submit review and check success toast
  6. Close toast and check the new review is now visible
  7. Go to My Account > My Product Reviews and verify it appears there as well

### 9. Compare Products (Positive)

- **Scope:** Individual test covering the journey of adding items for comparison and comparing them.
- **Prerequisites:** None -- this functionality is accessible for all user types.
- **Steps:**
  1. Check user is on Homepage
  2. Add 4 items for comparison
  3. Scroll down to the footer -- "Compare products" list
  4. Check all 4 items are compared against each other in the Compare Products screen
  5. Click an item's "X" button to remove it from the list
  6. Click "Clear list" to remove all remaining items
