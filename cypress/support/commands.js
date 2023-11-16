
  export function sendTextToInputElement(textToEnter,inputElement) {
    try {
        cy.log('Going to type text '+textToEnter+' in element '+inputElement );
        cy.get(inputElement) // No need to specify the timeout, it will use the global default
          .should('be.visible')
          .should('be.enabled')
          .click()
          .clear()
          .type(textToEnter);
        cy.log('Text '+textToEnter+' typed in element '+inputElement );
      } catch (error) {
        // Handle the error, for example, log it
        cy.log(`Error: ${error.message}`);
      }
   
  }