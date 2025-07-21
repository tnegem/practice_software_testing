import { faker } from '@faker-js/faker';

describe('Contact Page Test', () => {
  
  it('Test contact form', () => {
    const customer = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email().toLowerCase(),
      company: faker.company.name(),
      message: `Hello, my name is ${faker.person.fullName()} from ${faker.company.name()}. 
                ${faker.lorem.sentences(2)}`
    };

    cy.visit('/contact');
    
    // Fill form
    cy.get('[data-test="first-name"]').type(customer.firstName);
    cy.get('[data-test="last-name"]').type(customer.lastName);
    cy.get('[data-test="email"]').type(customer.email);
    cy.get('[data-test="subject"]').select([1]);
    cy.get('[data-test="message"]').type(customer.message);
    
    cy.get('[data-test="contact-submit"]').click();

    cy.get('.alert-success').should('be.visible');
  });
});