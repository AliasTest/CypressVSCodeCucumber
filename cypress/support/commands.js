import { logToFile } from '../support/utils'; // Adjust the path accordingly

  export function sendTextToInputElement(textToEnter,inputElement) {
    try {
        logToFile(`Going to type text ${textToEnter} in element ${inputElement}`, 'cypress/logs/test.log');
        cy.get(inputElement) // No need to specify the timeout, it will use the global default
          .should('be.visible')
          .should('be.enabled')
          .click({ force: true })
          .clear()
          .type(textToEnter);
        logToFile(`Text ${textToEnter} typed in element ${inputElement}`, 'cypress/logs/test.log');
      } catch (error) {
        // Handle the error, for example, log it
        logToFile(`Error: ${error.message}`, 'cypress/logs/test.log');
      }
   
  }