export class LoginPage {
  private usernameInput = '[data-test="username"]';
  private passwordInput = '[data-test="password"]';
  private loginButton = '[data-test="login-button"]';
  private errorMessage = '[data-test="error"]';

  visit(): void {
    cy.visit('/');
  }

  assertLoginPageIsDisplayed(): void {
    cy.get(this.usernameInput).should('be.visible');
    cy.get(this.passwordInput).should('be.visible');
    cy.get(this.loginButton).should('be.visible');
  }

  login(username: string, password: string): void {
    cy.get(this.usernameInput).clear().type(username);
    cy.get(this.passwordInput).clear().type(password, { log: false });
    cy.get(this.loginButton).click();
  }

  assertErrorMessageIsDisplayed(): void {
    cy.get(this.errorMessage).should('be.visible').and('not.be.empty');
  }
}
