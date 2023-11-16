import { createNewLogFile } from './utils'; // Adjust the path accordingly

// Delete and create a new log file before each test run
before(() => {
  const logFilePath = '/cypress/logs/test.log'; // Adjust the path accordingly
  createNewLogFile(logFilePath);
});