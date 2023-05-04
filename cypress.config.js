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
    baseUrl: 'https://demo.guru99.com/test/newtours/', // this is your app
  },
});