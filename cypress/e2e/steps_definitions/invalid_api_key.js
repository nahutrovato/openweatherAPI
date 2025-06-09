import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';

Given('I call to the Open Weather API to check the city {string} without API KEY', (city) => {
  cy.getWeatherByCityNonAPIKEY(city).as('weatherResponse');
});

When('the response should have status 401', () => {
  cy.get('@weatherResponse').then((res) => {
    expect(res.status).to.eq(401);
  });
});

Then('the error message should be {string}', (message) => {
  cy.get('@weatherResponse').then((res) => {
    expect(res.body).to.have.property('message', message);
  });
});
