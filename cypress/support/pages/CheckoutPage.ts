export class CheckoutPage {
  private firstNameInput = '[data-test="firstName"]';
  private lastNameInput = '[data-test="lastName"]';
  private postalCodeInput = '[data-test="postalCode"]';
  private continueButton = '[data-test="continue"]';
  private finishButton = '[data-test="finish"]';
  private errorMessage = '[data-test="error"]';
  private completeHeader = '.complete-header';

  assertCheckoutInformationPageIsDisplayed(): void {
    cy.url().should('include', '/checkout-step-one.html');
    cy.get(this.firstNameInput).should('be.visible');
    cy.get(this.lastNameInput).should('be.visible');
    cy.get(this.postalCodeInput).should('be.visible');
  }

  enterCheckoutInformation(firstName: string, lastName: string, postalCode: string): void {
    cy.get(this.firstNameInput).clear().type(firstName);
    cy.get(this.lastNameInput).clear().type(lastName);
    cy.get(this.postalCodeInput).clear().type(postalCode);
    cy.get(this.continueButton).click();
  }

  submitEmptyCheckoutForm(): void {
    cy.get(this.continueButton).click();
  }

  assertCheckoutValidationError(): void {
    cy.get(this.errorMessage).should('be.visible').and('contain.text', 'Error');
  }

  finishOrder(): void {
    cy.url().should('include', '/checkout-step-two.html');
    cy.get(this.finishButton).should('be.visible').click();
  }

  assertOrderConfirmation(): void {
    cy.url().should('include', '/checkout-complete.html');
    cy.get(this.completeHeader).should('be.visible').and('contain.text', 'Thank you for your order!');
  }
}
