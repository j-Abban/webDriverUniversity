/// <reference types="Cypress"/>

describe('WebDriverUniversity', () => {
    before(() => {
        // Visit the website url (find the baseUrl in cypress.config file)
        cy.visit('/');
        //Assert that the url is correct
        cy.url().should('eq', 'http://webdriveruniversity.com/');

        // Click on the "TODO LIST" link
        cy.get('#to-do-list').invoke('removeAttr', 'target').click();
        // Wait for the new window to open and switch to it
        cy.window().then(win => {
            cy.stub(win, 'open').as('windowOpen');
        });
        // Assert the url and other elements on the page
        cy.url().should('include', '/To-Do-List/index.html');
        cy.get('h1').should('include.text', 'TO-DO LIST');
    });

    it('should add new item to the TO-DO LIST', () => {
        // Click on the plus icon to add new item
        cy.get('#plus-icon').click({multiple: true});
    });
});