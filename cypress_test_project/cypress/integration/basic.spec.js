/// <reference types="cypress" />

describe('',() => {
    before('',() => {
cy.visit('http://localhost:1667/#/login');
});

it('',() => {
    cy.get(':nth-child(1) > .form-control').type('Taras1@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('Asada1214!');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain','taras');
});
});