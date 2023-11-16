import { logToFile } from '../support/utils'; // Adjust the path accordingly

  export function sendTextToInputElement(textToEnter,inputElement) {
    try {
        logToFile(`INFO : Going to type text ${textToEnter} in element ${inputElement}`, 'cypress/logs/test.log');
        cy.get(inputElement) 
          .should('be.visible')
          .should('be.enabled')
          .click({ force: true })
          .clear()
          .type(textToEnter);
        logToFile(`INFO :Text ${textToEnter} typed in element ${inputElement}`, 'cypress/logs/test.log');
      } catch (error) {
        // Handle the error, for example, log it
        logToFile(`Error: ${error.message}`, 'cypress/logs/test.log');
      }
    }
   
      export function clickElement(elementToClick) {
        try {
            logToFile(`INFO : Going to click on element ${elementToClick}`, 'cypress/logs/test.log');
            cy.get(elementToClick) 
            .should('be.visible')
            .should('be.enabled')
            .click({ force: true })
            logToFile(`INFO :Clicked on element ${elementToClick}`, 'cypress/logs/test.log');
          } catch (error) {
            // Handle the error, for example, log it
            logToFile(`Error: ${error.message}`, 'cypress/logs/test.log');
          }
        }
