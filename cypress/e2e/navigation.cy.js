import '@testing-library/cypress/add-commands';

describe('Navigation Test - WebDriverUniversity', () => {
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
      // Assert that you are on the home page
      cy.url().should('include','http://webdriveruniversity.com/');
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
      cy.get('.section_header').should('have.text','CONTACT US');
      // navigate back to the home page
      cy.go(-1);
      // Assert that you are on the home page
      cy.url().should('include','http://webdriveruniversity.com/');
      cy.wait(2000);
    });

    it('Should navigate to LOGIN PORTAL', () => {
      // Click on the login portal link
      cy.get('#login-portal').invoke('removeAttr', 'target').click();
      // Wait for the new window to open and switch to it
      cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
      });
      cy.url().should('include', '/Login-Portal/index.html');
      // navigate back to the home page
      cy.go(-1);
      // Assert that you are on the home page
      cy.url().should('include','http://webdriveruniversity.com/');
      cy.wait(2000);
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
      cy.get('h1').should('have.text', 'Lets Get Clicking!');
      // navigate back to the home page
      cy.go(-1);
      // Assert that you are on the home page
      cy.url().should('include','http://webdriveruniversity.com/');
      cy.wait(2000);
    });

    it('should navigate to TO DO LIST ', () => {
      // Click on the "TO DO LIST"
      cy.get('#to-do-list').invoke('removeAttr', 'target').click();
      // Wait for new window to open and switch to it
      cy.window().then(win => {
      cy.stub(win, 'open').as('windowOpen');
      });
      // Verify the url and other element on "TO DO LIST" page
     cy.url().should('include', '/To-Do-List/index.html');
     cy.get('h1').shouldHaveTrimmedText('TO-DO LIST');
     // navigate back to the home page
     cy.go(-1);
     // Assert that you are on the home page
     cy.url().should('include','http://webdriveruniversity.com/');
     cy.wait(2000);
    });
  });
  