const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({  
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });     
      on("task", {
        lighthouse: lighthouse(),        
      });   
      allureWriter(on, config); 
      return config; 
    },
    specPattern: "cypress/e2e/*.feature",
    "defaultCommandTimeout": 15000,
    "pageLoadTimeout": 120000,
    baseUrl: 'https://staging-wa.watson-orchestrate.ibm.com/login', // this is your app
  },
});