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
};
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../pages/LoginPage'

const login = new loginpage()


Given('Start new tour application', () => {
    cy.visit('/')
})

When('Verify the title', () => {
    cy.title().should('eq', 'Welcome: Mercury Tours')
})

Then('I should see web audit results', () => {
      cy.lighthouse(lighthousemetrics)
    })

When('Enter user name {string}', (username) => {
    login.typeUserName(username)
})  