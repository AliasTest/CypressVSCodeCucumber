const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
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

    },
    specPattern: "cypress/e2e/*.feature",
    baseUrl: 'https://demo.guru99.com/test/newtours/', // this is your app
  },
});