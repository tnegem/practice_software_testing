import LoginPage from '../support/page-objects/loginPage';

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    it('should login successfully with valid admin credentials', () => {
      loginPage.visit();
      loginPage.loginWith('admin@practicesoftwaretesting.com', Cypress.env('defaultPassword'));
    
      cy.get('table tbody tr').contains('Edit').last().click();
      cy.url().should('include', '/edit');

    });

    })
