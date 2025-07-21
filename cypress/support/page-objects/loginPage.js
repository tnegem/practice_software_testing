class LoginPage {
  elements = {
    emailInput: () => cy.get('[data-test="email"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-submit"]'),
    navMenuElement: () => cy.get('#menu'), 
    pageBody: () => cy.get('body')
  };

  // Actions
  visit() {
    cy.visit('/auth/login');
    return this;
  }

  enterEmail(email) {
    this.elements.emailInput().type(email);
    return this;
  }

  enterPassword(password) {
    this.elements.passwordInput().type(password);
    return this;
  }

  clickLoginButton() {
    this.elements.loginButton().click();
    return this;
  }

  loginWith(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLoginButton();
    return this;
  }

  verifySuccessfulLogin() {
    cy.url().should('not.include', '/auth/login');
    return this;
  }

  verifyLoginFailed() {
    cy.url().should('include', '/auth/login');
    return this;
  }

  verifyErrorMessage(expectedText) {
    this.elements.pageBody().should('contain.text', expectedText);
    return this;
  }

  verifyUserLoggedIn(userName) {
    this.elements.navMenuElement().should('contain.text', userName);
    return this;
  }
}

export default LoginPage;