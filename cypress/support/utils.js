const fs = require('fs');

export function logToFile(message, filePath) {
  fs.appendFileSync(filePath, `${message}\n`);
}

export function createNewLogFile(filePath) {
  // Delete existing log file (if it exists)
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  // Create a new log file
  fs.writeFileSync(filePath, '');
}