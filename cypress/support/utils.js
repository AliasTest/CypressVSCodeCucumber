export function logToFile(message, filePath) {
  cy.writeFile(filePath, `${message}\n`, { flag: 'a+' });
}

export function createNewLogFile(filePath) {
  // Delete existing log file (if it exists)
  deleteFile(filePath);

  // Create a new log file
  cy.writeFile(filePath, '');
}

export async function deleteFile(filePath) {
   // Delete the file
   if (Cypress.platform === 'win32') {
    await cy.exec(`del /q ${filePath}`);
  } else {
    await cy.exec(`rm -f ${filePath}`);
  }
}