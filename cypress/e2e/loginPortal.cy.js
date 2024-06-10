/// <reference types="cypress"/>

describe('webDriverUniversity', () => {
    before(() => {
        // Visit the WebDriverUniversity url
        cy.visit('http://webdriveruniversity.com/');
        // Assert that you are on the home page
        cy.url().should('include', 'http://webdriveruniversity.com/');
    });

    it('should not login', () => {
        // Click on login
        cy.get('#login-portal').invoke('removeAttr', 'target').click();
        // Wait for the new window to open and switch to it
        cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
    });
    // Enter your Username
    cy.get('input#text').type('KwameAbban');
    // Enter your Password 
    cy.get('input#password').type('Kw@m3.@bb@n421');
    // Click on Login
    cy.get('button#login-button').click();
    });
});