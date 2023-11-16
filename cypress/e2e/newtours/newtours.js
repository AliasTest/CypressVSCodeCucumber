Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger;
    return false;
});

const lighthousemetrics = {
    performance: 95,
    accessibility: 100,
    "best-practices": 95,
    seo: 85,
    pwa: 100,
    "first-contentful-paint": 10,
};

const opts = {
    formFactor: 'desktop',
    screenEmulation: {
      mobile: false,
      disable: false,
      width: Cypress.config('viewportWidth'),
      height: Cypress.config('viewportHeight'),
      deviceScaleRatio: 1,
    },
}

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../pages/LoginPage'


const login = new loginpage()


Given('Start Watson Orchestration application', () => {
 
    cy.visit('/')
})

Then('Verify the title', () => {
    cy.title().should('include', "IBM");
})

Then('I should see web audit results', () => {
      cy.lighthouse(lighthousemetrics, opts)})

When('Enter user name' , () => {
    login.typeUserName("svt-stage-7@wo-cd.testinator.com")
}) 

And('Click on continue button', () => {
    login.clickContinueButton();
})

// Step definition for "And Enter Password"
And('Enter Password', () => {
    login.typePassword("yourPassword"); 
}) 

// Step definition for "And Click on Login button"
And('Click on Login button', () => {
    login.clickLoginButton();
});
