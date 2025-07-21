describe('Basic Test', () => {
  it('should visit the practice website', () => {
    cy.visit('/')
    cy.title().should('contain', 'Practice Software Testing')
  })

  it('should display the main navigation', () => {
    cy.visit('/');
    cy.get('[data-test="nav-home"]').should('be.visible');
    cy.get('[data-test="nav-categories"]').should('be.visible');
  });

  it('should load products on homepage', () => {
    cy.visit('/');
    cy.get('[data-test="product-card"]').should('have.length.greaterThan', 0);
  });
  
});