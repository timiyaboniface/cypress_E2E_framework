export class CartPage {
  private cartList = '.cart_list';
  private cartItemName = '.inventory_item_name';
  private checkoutButton = '[data-test="checkout"]';

  assertCartPageIsDisplayed(): void {
    cy.url().should('include', '/cart.html');
    cy.get(this.cartList).should('be.visible');
  }

  assertProductIsInCart(productName: string): void {
    cy.get(this.cartItemName).should('contain.text', productName);
  }

  proceedToCheckout(): void {
    cy.get(this.checkoutButton).should('be.visible').click();
  }
}
