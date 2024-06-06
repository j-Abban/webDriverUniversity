describe('Navigation to Contact Us Page Test', () => {
    beforeEach(() => {
    // Visit the website
      cy.visit('http://webdriveruniversity.com/');
  
    });
    it('Should navigate to Contact Us page, fill the Form and Submit', () => {
      // Click on the Contact Us link
      cy.get('#contact-us').invoke('removeAttr', 'target').click();
      // Wait for the new window to open and switch to it
      cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
      });
  
      // Assertion to verify the URL of the new window
      cy.url().should('include', '/Contact-Us/contactus.html');
      cy.get('.section_header').should('have.text','CONTACT US');

      // Enter your first name, last name, email address and comments
      cy.get('input[name="first_name"]').type('Daniel Panyin');
      cy.get('input[name="last_name"]').type('Mensah');
      cy.get('input[name="email"]').type('dannymens@gmail.com');
      cy.get('textarea.feedback-input').type('I just want to say a very big thank you to the developers who created this piece. Cheers!');
    
      // Click on the Submit button
      cy.get('input[type="submit"]').click();
      cy.url().should('include', '/contact-form-thank-you.html');
      cy.get('h1').should('have.text','Thank You for your Message!');
      cy.wait(3000);

      // Navigate back to the homepage
      cy.go(-2);

      // Assertion to verify that we are back on the homepage
      cy.url().should('eq','http://webdriveruniversity.com/');
      cy.wait(3000);
    });

    it('Should navigate to Contact Us page, fill the Form and Reset', () => {
      // Click on the Contact Us link
      cy.get('#contact-us').invoke('removeAttr', 'target').click();
      // Wait for the new window to open and switch to it
      cy.window().then(win => {
        cy.stub(win, 'open').as('windowOpen');
      });
  
      // Assertion to verify the URL of the new window
      cy.url().should('include', '/Contact-Us/contactus.html');
      cy.get('.section_header').should('have.text','CONTACT US');
      

      // Enter your first name, last name, email address and comments
      cy.get('input[name="first_name"]').type('Daniel Panyin');
      cy.get('input[name="last_name"]').type('Mensah');
      cy.get('input[name="email"]').type('dannymens@gmail.com');
      cy.get('textarea.feedback-input').type('I just want to say a very big thank you to the developers who created this piece. Cheers!');
      // Click on the Reset button
      cy.get('[type="reset"]').click();
      cy.wait(3000);

      // Navigate back to the homepage
      cy.go(-1);

      // Assertion to verify that we are back on the homepage
      cy.url().should('eq','http://webdriveruniversity.com/');
  });
});
  