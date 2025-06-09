const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      config.env.OPENWEATHER_API_URL = process.env.OPENWEATHER_API_URL
      config.env.OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY
      return config;
    },
    
      
    
  },
   reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true
  }
  
});
