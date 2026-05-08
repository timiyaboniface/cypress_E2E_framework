import users from '../fixtures/users.json';
import { LoginPage } from '../support/pages/LoginPage';
import { InventoryPage } from '../support/pages/InventoryPage';
import { CartPage } from '../support/pages/CartPage';
import { CheckoutPage } from '../support/pages/CheckoutPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('SauceDemo E2E Framework - Smoke Tests', () => {
  it('should display the login page', () => {
    loginPage.visit();
    loginPage.assertLoginPageIsDisplayed();
  });

  it('should login successfully with valid credentials', () => {
    loginPage.visit();
    loginPage.login(users.validUser.username, users.validUser.password);
    inventoryPage.assertInventoryPageIsDisplayed();
    inventoryPage.logout();
    loginPage.assertLoginPageIsDisplayed();
  });

  it('should show error for invalid or locked user', () => {
    loginPage.visit();
    loginPage.login(users.invalidUser.username, users.invalidUser.password);
    loginPage.assertErrorMessageIsDisplayed();
  });
});

describe('SauceDemo E2E Framework - Regression Tests', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login(users.validUser.username, users.validUser.password);
    inventoryPage.assertInventoryPageIsDisplayed();
  });

  it('should add a product to the cart and verify cart badge', () => {
    inventoryPage.addProductToCart(users.products.backpack);
    inventoryPage.assertCartBadgeCount(1);
  });

  it('should complete the full purchase journey successfully', () => {
    inventoryPage.addProductToCart(users.products.backpack);
    inventoryPage.assertCartBadgeCount(1);
    inventoryPage.openCart();

    cartPage.assertCartPageIsDisplayed();
    cartPage.assertProductIsInCart(users.products.backpack);
    cartPage.proceedToCheckout();

    checkoutPage.assertCheckoutInformationPageIsDisplayed();
    checkoutPage.enterCheckoutInformation(
      users.checkoutUser.firstName,
      users.checkoutUser.lastName,
      users.checkoutUser.postalCode
    );
    checkoutPage.finishOrder();
    checkoutPage.assertOrderConfirmation();
  });

  it('should show validation error when checkout form is submitted empty', () => {
    inventoryPage.addProductToCart(users.products.bikeLight);
    inventoryPage.openCart();

    cartPage.assertCartPageIsDisplayed();
    cartPage.proceedToCheckout();

    checkoutPage.assertCheckoutInformationPageIsDisplayed();
    checkoutPage.submitEmptyCheckoutForm();
    checkoutPage.assertCheckoutValidationError();
  });
});
