🌦️ OpenWeather API Automated Tests

    🚀 Automated testing project for the OpenWeather Current Weather Data API using Cypress, Cucumber, dotenv, and Mochawesome.
    Simple and effective E2E tests with elegant reports and easy setup.

💡 What is this project?

This repository contains automated tests for the OpenWeather Current Weather Data API.
It uses:

    Cypress for running end-to-end tests

    Cucumber for BDD-style test definitions using Gherkin

    dotenv for managing environment variables securely

    Mochawesome for beautiful, detailed HTML test reports

📦 Technologies used
Technology	Description
Cypress	End-to-End testing framework
Cucumber	BDD test definitions with Gherkin
dotenv	Environment variables management
Mochawesome	Custom HTML test reporting
⚙️ How to use this project
1. Clone the repository

git clone https://github.com/nahutrovato/openweatherAPI/
cd openweatherAPI

2. Install dependencies

npm install

3. Configure environment variables

Create a .env file in the root folder with the following:

OPENWEATHER_API_URL='https://api.openweathermap.org/data/2.5'

OPENWEATHER_API_KEY=your_api_key_here

    ⚠️ Important: The .env file is not committed for security reasons and keep your keys safe.

4. Run tests and generate reports

npm run test-report

or you could use npx cypress open to run in a UI enviroment 

This runs Cypress tests and generates an HTML report at:
cypress/reports/html/index.html

5. View the report

Open the index.html file in your browser to see detailed test results.
## 📚 Project structure

    ├── cypress/
    │   ├── e2e/               # Tests with Cucumber (.feature and .js files)
    │   ├── support/           # Custom commands and setup
    │   └── reports/           # Generated JSON and HTML reports
    ├── .env                   # Environment variables (not committed)
    ├── cypress.config.js      # Cypress configuration
    ├── package.json           # NPM dependencies and scripts
    └── README.md              # This file


🛠️ Available scripts

Script	Description

npm run test	Run Cypress tests

npm run test-report	Run tests and generate Mochawesome report

npm run clean:reports	Remove old test reports