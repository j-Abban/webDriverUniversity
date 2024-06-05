describe('Navigation to Contact Us Page Test', () => {
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
  });
  