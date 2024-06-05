describe('Navigation to Contact Us Page Test', () => {
    beforeEach(() => {
    // Visit the website
      cy.visit('http://webdriveruniversity.com/');
  
    });
    it('Should navigate to Contact Us page and verify URL', () => {
      // Click on the Contact Us link
      cy.get('#contact-us').invoke('removeAttr', 'target').click();
  
      // Wait for the new window to open and switch to it
      cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
      });
  
      // Assertion to verify the URL of the new window
      cy.url().should('include', '/Contact-Us/contactus.html');
      cy.get('.section_header').contains('CONTACT US');

      // Enter your first name, last name, email address and comments
      cy.get('input[name="first_name"]').type('Daniel Panyin');
      cy.get('input[name="last_name"]').type('Mensah');
      cy.get('input[name="email"]').type('dannymens@gmail.com');
      cy.get('textarea.feedback-input').type('I just want to say a very big thank you to the developers who created this piece. Cheers!');
    });
  });
  