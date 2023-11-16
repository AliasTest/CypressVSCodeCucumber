export function logToFile(message, filePath) {
  cy.writeFile(filePath, `${message}\n`, { flag: 'a+' });
}

export function createNewLogFile(filePath) {
  // Delete existing log file (if it exists)
  deleteFile(filePath);

  // Create a new log file
  cy.writeFile(filePath, '');
}

export function deleteFile(filePath) {
  // Delete the file
  if (Cypress.platform === 'win32') {
    cy.exec(`del /q ${filePath}`);
  } else {
    cy.exec(`rm -f ${filePath}`);
  }
}