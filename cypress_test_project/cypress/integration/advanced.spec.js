/// <reference types="cypress" />

describe('',() => {
    let user;

    before('',() => {
cy.visit('http://localhost:1667/#/register');
});
describe('Successful registration', () => {
    before(function () {
      cy.task("freshUser").then((object) => {
        user = object;
      });
    });
});

it('Sign up with faker', () => {
    cy.get(':nth-child(1) > .form-control').type(user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password);
    cy.get('.btn').click();
    cy.get('.swal-modal').should('contain','Your registration was succesfull');
    cy.get(':nth-child(4) > .nav-link').should('contain',user.username);
})
})