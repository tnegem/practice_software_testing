import LoginPage from '../support/page-objects/loginPage';

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    it('should login successfully with valid admin credentials', () => {
      loginPage.visit();
      loginPage.loginWith('admin@practicesoftwaretesting.com', Cypress.env('defaultPassword'))
      
      loginPage
        .verifySuccessfulLogin()
        .verifyUserLoggedIn('John Doe');

    });

    it('should login successfully with valid customer credentials', () => {
      cy.login('customer@practicesoftwaretesting.com');
      
      cy.url().should('not.include', '/auth/login');
      cy.get('#menu').should('contain.text', 'Jane Doe');
      
    });

    it('should show error message with invalid credentials', () => {
      cy.visit('/auth/login');
      cy.get('[data-test="email"]').type('invalid@example.com');
      cy.get('[data-test="password"]').type('wrongpassword');
      cy.get('[data-test="login-submit"]').click();
      
      cy.get('body').should('contain.text', 'Invalid email or password');
      
      cy.url().should('include', '/auth/login');
    });

});