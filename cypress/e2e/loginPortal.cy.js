/// <reference types="cypress"/>

describe('webDriverUniversity', () => {
    before(() => {
        // Visit the WebDriverUniversity url
        cy.visit('/');
        // Assert that the url is correct
        cy.url().should('include', 'http://webdriveruniversity.com/');
    });

    it('should not login', () => {
        // Click on login
        cy.get('#login-portal').invoke('removeAttr', 'target').click();
        // Wait for the new window to open and switch to it
        cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
    });
    // The new url should include "/Login-Portal/index.html"
    cy.url().should('include', '/Login-Portal/index.html');
    // Enter Username
    cy.get('input#text').type('KwameAbban');
    // Enter Password 
    cy.get('input#password').type('Kw@m3.@bb@n421');
    // Click on Login
    cy.get('button#login-button').click();
    // Handle the alert pop-up
    cy.on('window:alert', (str) => {
    // Assert the alert text
    expect(str).to.equal('validation failed');    
    })
    });
});