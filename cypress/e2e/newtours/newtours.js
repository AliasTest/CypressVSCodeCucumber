import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('Start new tour application', () => {
    cy.visit("https://demo.guru99.com/test/newtours/")
})

When('Verify the title', () => {
    cy.title().should('eq', 'Welcome: Mercury Tours')
})

Then('Test', () => {
    cy.log("Test verified")
})
When('Enter user name {string}', (username) => {
    cy.get("input[name='userName']").clear();
    cy.get("input[name='userName']").type(username);
    cy.pause();
})     
