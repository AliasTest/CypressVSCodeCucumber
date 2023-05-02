Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    debugger;
    return false;
});
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('Get georest users', () => {
    cy.request({
        method: "GET",
        url: "https://gorest.co.in/public/v2/users"
    }).as('getgorest');   
    cy.get('@getgorest').then(response =>{expect(response.status).to.eq(200);})   
});