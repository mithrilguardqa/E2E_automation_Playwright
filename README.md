# Mithril Guard QA Company

## E2E testing framework using Playwright

## 10 Happy paths coverage flows

## First suite - login and registration flows

### 1. Register user - positive test

- individual test creating a unique user every time
- steps executed:

* navigate to homepage
* verify user is NOT logged in
* navigate to Register page
* fill all the required field
* click "Register" button
* check 'your registration is complete'
* check user is logged after registration
* navigate to 'Customer info' screen in My account page
* verify data entered during registration is correct
* verify user is subscribed to 'Newsletter'

### 2. Register user - negative test - omit required field

- individual test to check if user cannot create user without the required field
- steps executed:

* navigate to homepage
* verify user is NOT logged in
* navigate to Register page
* try to register complete blank register form
* check error messages
* fill first name
* omit last name
* enter wrong format email and check verification works
* omit Your password fields
* try to register again and check only the missing fields have errors
* check Password field and Confirm password field have same input validation

### 3. Login with correct credentials - positive test

- individual test to check if user can login with the previously created user registration
- prerequisites -> create user before the test - in beforeEach hook - generally done with API call - here with the UI
- steps executed:

* navigate to homepage
* verify user is NOT logged in
* navigate to Login page
* fill fields with the data from the registration from the prerequisites
* hit login button and check that user is logged in successfully - Register and Login are now My Account and Log out

### 4. Login with incorrect credentials - negative test

- individual test to check if user can login with unreal/wrong credentials
- steps executed:

* navigate to homepage and verify user is NOT logged in
* navigate to login page
* fill fields with different usernames and password and check if user can login
* check the error is not descriptive enough so its NOT clear which is wrong - email or password - security

### 5. Execute Forgotten password flow - positive test - currently no implementation cause no emails are sent

### 6. Search for 1 of each products categories, add the searched item in the cart, checkout the cart, estimate shipping, proceed to finish the order, check the order information

- individual test to check the whole user journey from searching an item to ordering it
- prerequisites -> create user before the test
- steps executed:

* login with the user
* search item 1 -> add in cart -> check success toast - Apple Macbook Pro
* search item 2 -> add in cart -> check success toast - iPhone 16
* search item 3 -> Nike shoes -> try to add without color, size and print
* choose color, size and print and add into the cart
* search item 4 -> add in cart -> check success toast - Night Visions
* search item 5 -> add in cart -> check success toast - Fahrenheit 451 by Ray Bradbury
* search item 5 -> add in cart -> check success toast - Flower Girl Bracelet
* after each item added check the cart (1) number
* click on estimate shipping, fill data and apply - should be 0 for shipping
* check the full price for all the products
* choose 'Gift wrapping' and check the price is +10$
* Try to checkout without clicking on I agree...
* Check the error modal
* Click on 'Checkout' button
* Fill all Country, City, Address and other required fields
* Click 'Continue' on Shipping menu
* Choose card payment -> check first expired card has verification
* Fill correct card number and other fields
* Click on 'Confirm'
* Click on 'Click here for order details.' button to check the Order information
* Verify all data in the Order information screen

### 7. Cancel submitted order from My Account - positive test

- individual test to check the whole user journey from canceling the order -> editing the order -> reordering again the edited order
- prerequisites -> create user + created order - normally done via API call

- steps executed:

* Go the My account page
* Click on 'Cancel order' and confirm from the alert window
* Check toast message and check the status
* Click on 'Reorder' button
* Remove 2 items and Gift wrapping
* Click on 'Agree..' and proceed to Checkout again
* Confirm Billing address
* Confirm Shipping address
* Confirm Shipping method
* Change Payment method to 'Check/Money order'
* Proceed to 'Confirm order'
* Check success screen
* Navigate to 'Order information' again
* Check all information for billing, shipping and payments is edited correctly
* Check the new products are the correct after the edit

### 8. Check user can submit reviews for items - positive test

- individual test to check the whole user journey for submitting a product review
- prerequisites -> create user

- steps executed:

* Check user is on Homepage
* Search or navigate to a certain product - Macbook pro
* Read reviews
* Add Review title, Review text and Rating
* Submit review and check success toast
* 'X' on toast and check the new review is now visible
* Go to My Account -> My Product reviews -> check if its visible there as well

### 9. Check user can select items for comparison, navigate to compare screen and clear them afterwards

- individual test to check the whole user journey of adding items for comparison and compare them against each other afterwards
- prerequisites -> none - this functionality is accessible for all types of users

- steps executed:

* Check user is on Homepage
* Add 4 items for comparison
* Scroll down to the footer -> Compare products list
* Check all the 4 items are compared against each other in the Compare products screen
* Click on 1 items 'x' button to remove it from the list
* Click on 'Clear list' button to remove all the other items left
