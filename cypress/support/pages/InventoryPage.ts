export class InventoryPage {
  private pageTitle = '.title';
  private inventoryItem = '.inventory_item';
  private cartBadge = '.shopping_cart_badge';
  private cartLink = '.shopping_cart_link';
  private menuButton = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

  assertInventoryPageIsDisplayed(): void {
    cy.url().should('include', '/inventory.html');
    cy.get(this.pageTitle).should('contain.text', 'Products');
    cy.get(this.inventoryItem).should('have.length.greaterThan', 0);
  }

  addProductToCart(productName: string): void {
    cy.contains(this.inventoryItem, productName)
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Add to cart').click();
      });
  }

  assertCartBadgeCount(count: number): void {
    cy.get(this.cartBadge).should('have.text', String(count));
  }

  openCart(): void {
    cy.get(this.cartLink).click();
  }

  logout(): void {
    cy.get(this.menuButton).click();
    cy.get(this.logoutLink).should('be.visible').click();
  }
}
