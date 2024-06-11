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
});

beforeEach(() => {
     // Visit the website url (find the baseUrl in cypress.config file)
     cy.visit('/');
     //Assert that the url is correct
     cy.url().should('eq', 'http://webdriveruniversity.com/');

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
});

it('should Click on WebElement Click', () =>{
  // Assert that there is "WebElement Click" text on the page
  cy.get('div:nth-of-type(1) > .thumbnail > h2').should('have.text', 'WebElement Click');
  // Click on the "CLICK ME!" button
  cy.get('#button1 > p').click();
  cy.wait(2000);

  // Verify the modal content and close the modal
  cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-header > .modal-title').should('include.text', 'Congratulations!');
  cy.get('div#myModalClick > .modal-dialog.modal-sm p').should('include.text', 'Well done for successfully using the click() method!');

  // Close the alert by clicking "Close"
  cy.on('window:confirm', () => true);
  cy.get('div#myModalClick > .modal-dialog.modal-sm .btn.btn-default').click();
});


it('should click on JavaScipt Click', () =>{
    // Assert that there is "JavaScript Click" text on the page
  cy.get('div:nth-of-type(2) > .thumbnail > h2').should('have.text', 'JavaScript Click');

  // Click on the "CLICK ME!!" button
  cy.get('div:nth-of-type(2) > .thumbnail > .caption > .btn.btn-default.btn-lg.dropdown-toggle').click();
  cy.wait(2000);
  // Verify the modal content and close the modal
  cy.get('.modal-dialog.modal-md .modal-title').should('include.text', 'It’s that Easy!!  Well I think it is.....');
  cy.get('.modal-dialog.modal-md p').should('include.text', 'We can use JavaScript code if all else fails! Remember always try to use the WebDriver Library method(s) first such as WebElement.');

  // Close the alert by clicking "Close"
  cy.on('window:confirm', () => true);
  cy.get('.modal-dialog.modal-md .btn.btn-default').click();
});

it('should click on Action Move & Click', () =>{
    // Assert that there is "JavaScript Click" text on the page
  cy.get('div:nth-of-type(3) > .thumbnail > h2').should('have.text', 'Action Move & Click');

  // Click on the "CLICK ME!!!" button
  cy.get('div:nth-of-type(3) > .thumbnail > .caption > .btn.btn-default.btn-lg.dropdown-toggle').trigger('mouseover').click();
  cy.wait(2000);
  // Verify the modal content and close the modal
  cy.get('div#myModalMoveClick > .modal-dialog.modal-sm .modal-title').should('include.text', 'Well done! the Action Move & Click can become very useful!');
  cy.get('div#myModalMoveClick > .modal-dialog.modal-sm p').should('include.text', 'Advanced user interactions (API) has been developed to enable you to perform more complex interactions such as:');

  // Close the alert by clicking "Close"
  cy.on('window:confirm', () => true);
  cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();
});
});