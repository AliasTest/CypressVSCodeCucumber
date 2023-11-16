
  export function sendTextToInputElement(textToEnter,inputElement) {
    try {
        cy.get(inputElement) // No need to specify the timeout, it will use the global default
          .should('be.visible')
          .should('be.enabled')
          .click()
          .clear()
          .type(textToEnter);
      } catch (error) {
        // Handle the error, for example, log it
        cy.log(`Error: ${error.message}`);
      }
   
  }