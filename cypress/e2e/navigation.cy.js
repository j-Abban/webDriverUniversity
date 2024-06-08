/// <reference types="Cypress" />

describe('WebDriverUniversity', () => {
    before(() => {
         // Ignore specific uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore known issues in the application
        if (err.message.includes('<') || err.message.includes('select') || err.message.includes('style')) {
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

    it('should navigate to TO DO LIST', () => {
      // Click on the "TO DO LIST"
      cy.get('#to-do-list').invoke('removeAttr', 'target').click();
      // Wait for new window to open and switch to it
      cy.window().then(win => {
      cy.stub(win, 'open').as('windowOpen');
      });
      // Verify the url and other element on "TO DO LIST" page
     cy.url().should('include', '/To-Do-List/index.html');
     cy.get('h1').should('include.text','TO-DO LIST');
     // navigate back to the home page
     cy.go(-1);
     // Assert that you are on the home page
     cy.url().should('include','http://webdriveruniversity.com/');
     cy.wait(2000);
     });
     
    it('should navigate to PAGE OBJECT MODEL', ()=> {
     // Click on Page object model
      cy.get('#page-object-model').invoke('removeAttr', 'target').click();
      // Wait for new window to open and switch to it
      cy.window().then(win => {
      cy.stub(win, 'open').as('windowOpen');
      cy.wait(3000); 
      });
      // Verify the url and other elements
      cy.url().should('include','/Page-Object-Model/index.html');
      cy.get('#nav-title').should('have.text', 'WebdriverUniversity.com (Page Object Model)');
      // Navigate back to the home page
      cy.go(-1);
      // Assert that you are on home page
      cy.url().should('include','http://webdriveruniversity.com/');
      cy.wait(2000);
    });

    it('should navigate to ACCORDION & TEXT AFFECTS', () => {
     // Click on ACCORDION & TEXT AFFECTS
     cy.get('a[href="Accordion/index.html"]').invoke('removeAttr', 'target').click();
      // Wait for new window to open and switch to it
      cy.window().then(win => {
      cy.stub(win, 'open').as('windowOpen');
        });
     // Assert the url and othe elements
     cy.url().should('include','/Accordion/index.html');
     cy.get('#nav-title').should('have.text', 'WebDriver (Accordion Items & Text Appear)');
     cy.get('h1').should('have.text', 'Click on One of the Accordian Items Below!');
     // Navigate back to the home page
     cy.go(-1);
     // Assert that you are on home page
     cy.url().should('include','http://webdriveruniversity.com/');
     cy.wait(2000);
     });

    it('should navigate to DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)', () => {
     // Click on ACCORDION & TEXT AFFECTS
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
       // Wait for new window to open and switch to it
       cy.window().then(win => {
       cy.stub(win, 'open').as('windowOpen');
         });
     // Assert the url and other element
     cy.url().should('include','/Dropdown-Checkboxes-RadioButtons/index.html');
     cy.get('#nav-title').should('have.text', 'WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))');
     cy.get('h1').should('have.text', 'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)');
      // Navigate back to the home page
      cy.go(-1);
      // Assert that you are on home page
      cy.url().should('include','http://webdriveruniversity.com/');
      cy.wait(2000);
     });

    it('should navigate to AJAX LOADER', () => {
     // Click on AJAX LOADER
     cy.get('#ajax-loader').invoke('removeAttr', 'target').click();
     // Wait for new window to open and switch to it
     cy.window().then(win => {
     cy.stub(win, 'open').as('windowOpen');
     });
     // Assert the url and other element
     cy.url().should('include', '/Ajax-Loader/index.html');
     cy.get('.navbar-brand').should('have.text', 'WebdriverUniversity.com (Ajax-Loader)');
     cy.wait(2000);
     cy.get('#button1').should('have.text', 'CLICK ME!')
     // Navigate back to the home page
     cy.go(-1);
     // Assert that you are on the home page
     cy.url().should('include','http://webdriveruniversity.com/');
     cy.wait(2000);
     });

    it('should navigate to ACTIONS', () => {
      // Click on the ACTIONS
      cy.get('#actions').invoke('removeAttr', 'target').click();
      // Wait for new window to open and switch to it
      cy.window().then(win => {
      cy.stub(win, 'open').as('windowOpen');
      });
      // Assert the url and other elements
      cy.url().should('include', '/Actions/index.html');
      cy.get('#nav-title').should('have.text', 'WebdriverUniversity.com (Actions)');
      cy.get('#main-header').should('have.text', 'The Key to Success is to take massive ACTION!');
      // Navigate back to the home page
      cy.go(-1);
      cy.url().should('include', 'http://webdriveruniversity.com/');
      cy.wait(2000);
     });

    it('should navigate to SCROLLING AROUND', () => {
      // Click on SCROLLING AROUND
      cy.get('#scrolling-around').invoke('removeAttr', 'target').click();
      // Wait for new window to open and switch to it
      cy.window().then(win => {
      cy.stub(win, 'open').as('windowOpen');
      });
     // Assert the url and other element on the page
     cy.url().should('include', '/Scrolling/index.html');
     cy.get('#nav-title').should('have.text', 'WebDriver (Scrolling)');
     cy.get('#main-header').should('include.text', 'Just Scrolling Around!');
     // Navigate back to the home page
     cy.go(-1);
     cy.url().should('include', 'http://webdriveruniversity.com/');
     cy.wait(2000);
     });

    it('should navigate to POPUP & ALERTS', () => {
      // Click on POPUP & ALERTS
      cy.get('#popup-alerts').invoke('removeAttr', 'target').click();
     // Wait for new window to open and switch to it
     cy.window().then(win => {
     cy.stub(win, 'open').as('windowOpen');
     });
     // Assert the url and other element on the page
     cy.url().should('include', '/Popup-Alerts/index.html');
     cy.get('#nav-title').should('have.text', 'WebdriverUniversity.com (Popups & Alerts)');
     cy.get('h1').should('have.text', 'Annoying Popup & Alerts!');
     // Navigate back to the home page
     cy.go(-1);
     cy.url().should('include', 'http://webdriveruniversity.com/');
     cy.wait(2000);
     });
     
    it('should navigate to IFRAME page', () => {
     // Click on IFRAME
     cy.get('#iframe').invoke('removeAttr', 'target').click();
     // Wait for new window to open and switch to it
     cy.window().then(win => {
     cy.stub(win, 'open').as('windowOpen');
      });
     // Assert the url and other element on the page
     cy.url().should('include', '/IFrame/index.html');
     cy.get('#nav-title').should('have.text','WebdriverUniversity.com (IFrame)');
        // Navigate back to the home page
     cy.go(-1);
     cy.url().should('include', 'http://webdriveruniversity.com/');
     cy.wait(2000);
     });

     it('should navigate to HIDDEN ELEMENTS', () => {
      // Click on the HIDDEN ELEMENTS
      cy.get('#hidden-elements').invoke('removeAttr', 'target').click();
      // Wait for new window to open and switch to it
      cy.window().then(win => {
      cy.stub(win, 'open').as('windowOpen');
      });
      // Assert the url and other element on the page
      cy.url().should('include', '/Hidden-Elements/index.html');
      cy.get('#nav-title').should('have.text', 'WebdriverUniversity.com (Hidden Elements)');
      cy.get('#main-header').should('include.text', 'Hidden Elements..');
      // Navigate back to the home page
      cy.go(-1);
      cy.url().should('include', 'http://webdriveruniversity.com/');
      cy.wait(2000);
     });

     it('should navigate to Data, Tables & Button States', () => {
      // Click on the DATA, TABLES & BUTTON States
      cy.get('#data-table').invoke('removeAttr', 'target').click();
      // Wait for new window to open and switch to it
      cy.window().then(win => {
       cy.stub(win, 'open').as('windowOpen');
      });
      // Assert the url and other element on the page
      cy.url().should('include','/Data-Table/index.html');
      cy.get('#nav-title').should('have.text','WebdriverUniversity.com (Data Tables)');
      cy.get('#main-header').should('include.text','Data, Tables & Button States');
      // Navigates back to the home page
      cy.go(-1);
      cy.url().should('include', 'http://webdriveruniversity.com/');
     });
  });
  