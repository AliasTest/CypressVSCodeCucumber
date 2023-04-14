/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger;
    return false;
});

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../pages/LoginPage'

const login = new loginpage()

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
    login.typeUserName(username)    
})     
