describe('Navigation to Contact Us Page Test', () => {
    before(() => {
         // Ignore specific uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore known issues in the application
        if (err.message.includes('<') || err.message.includes('select')) {
            return false;
        }
        // Allow othe errors to fail the test
        return true;
        });
    });
    beforeEach(() => {
    // Visit the website
      cy.visit('http://webdriveruniversity.com/');
    });

    it('Should navigate to CONTACT US', () => {
      // Click on the Contact Us link
      cy.get('#contact-us').invoke('removeAttr', 'target').click();
  
      // Wait for the new window to open and switch to it
      cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
      });
  
      // Assertion to verify the URL of the new window
      cy.url().should('include', '/Contact-Us/contactus.html');
      cy.get('.section_header').contains('CONTACT US');
    });

    it('Should navigate to LOGIN PORTAL', () => {
      // Click on the login portal link
      cy.get('#login-portal').invoke('removeAttr', 'target').click();
      // Wait for the new window to open and switch to it
      cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
      });
      cy.url().should('include', '/Login-Portal/index.html');
    });

    it('Should navigate to BUTTON CLICKS', () => {
      // Click on the login portal link
      cy.get('#button-clicks').invoke('removeAttr', 'target').click();
      // Wait for the new window to open and switch to it
      cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
      });
      // Verify the url of the BUTTON CLICK page
      cy.url().should('include', '/Click-Buttons/index.html');
      cy.get('.navbar-brand').should('have.text','WebdriverUniversity.com (Button Clicks)');
      cy.get('h1').should('have.text','Lets Get Clicking!');
    });
  });
  