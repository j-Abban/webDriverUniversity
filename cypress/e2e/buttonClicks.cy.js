/// <reference types= "Cypress"/>

describe('WebDriverUniversity', () => {
before(() => {
     // Ignore specific uncaught exceptions
     Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore known issues in the application
        if (err.message.includes('<') || err.message.includes('Modal is transitioning') || err.message.includes('style')) {
            return false;
        }
        // Allow othe errors to fail the test
        return true;
        });

    // Visit the website url (find the baseUrl in cypress.config file)
    cy.visit('/');
    //Assert that the url is correct
    cy.url().should('eq', 'http://webdriveruniversity.com/');
});

it('should Click on WebElement Click', () =>{
    // click on Button Clicks link
    cy.get('#button-clicks').invoke('removeAttr', 'target').click();
    // Wait for the new window to open and switch to it
    cy.window().then(win => {
    cy.stub(win, 'open').as('windowOpen');
    });
    // Verify that the url is working
    cy.url().should('include', '/Click-Buttons/index.html');

   // Assert that there is "Lets Get Clicking!" text on the page
  cy.get('#main-header').should('include.text', 'Lets Get Clicking!');
  // Assert that there is "Lets Get Clicking!" text on the page
  cy.get('div:nth-of-type(1) > .thumbnail > h2').should('have.text', 'WebElement Click');
  // Click on the "CLICK ME!" button
  // Click on the "CLICK ME!" button
  cy.get('#button1 > p').click();
 cy.wait(2000);
  // Verify the modal content and close the modal
  cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-header > .modal-title').should('include.text', 'Congratulations!');
  cy.get('.modal-body').should('include.text', 'Well done for successfully using the click() method!');

  // Close the alert by clicking "Close"
  cy.on('window:confirm', () => true);
  cy.get('div#myModalClick > .modal-dialog.modal-sm .btn.btn-default').click();
  cy.wait(2000);
});
});