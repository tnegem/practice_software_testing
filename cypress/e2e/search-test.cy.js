describe('Search Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should search for products', () => {
    cy.get('[data-test="search-query"]').type('hammer');
    cy.get('[data-test="search-submit"]').click();
    cy.get('[data-test="product-name"]').last().invoke('text').should('match', /hammer/i);
  });

});