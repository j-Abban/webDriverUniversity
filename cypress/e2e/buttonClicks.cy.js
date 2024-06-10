/// <reference types= "Cypress"/>

describe('WebDriverUniversity', () => {
before(() => {
    // Visit the website url (find the baseUrl in cypress.config file)
    cy.visit('/');
    //Assert that the url is correct
    cy.url().should('eq', 'http://webdriveruniversity.com/');
});

it('should Click on the Buttons', () =>{
    // click on Button Clicks link
    cy.get('#button-clicks').invoke('removeAttr', 'target').click();
    // Wait for the new window to open and switch to it
    cy.window().then(win => {
    cy.stub(win, 'open').as('windowOpen');
      });
      // Verify that the url is working
      cy.url().should('include', '/Click-Buttons/index.html');
});
});