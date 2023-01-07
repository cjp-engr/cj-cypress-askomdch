export { };

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
Cypress.Commands.add('visitOnlineStore', () => {
    cy.visit(`${Cypress.env('onlineStore')}`);
});

Cypress.Commands.add('login', () => {
    cy.visit(`${Cypress.env('onlineStore')}`);
    cy.visit(`${Cypress.env('onlineStore')}account`);
    cy.get('#username').type(`${Cypress.env('email')}`);
    cy.get('#password').type(`${Cypress.env('password')}`);
    cy.get(`button[value='Log in']`).click();
});

declare global {
    namespace Cypress {
        interface Chainable {
            visitOnlineStore(): Chainable<void>
            login(): Chainable<void>
            //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
        }
    }
}