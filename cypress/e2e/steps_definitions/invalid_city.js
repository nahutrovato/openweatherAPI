import {Given, Then, And} from 'cypress-cucumber-preprocessor/steps';

Given('I call to the Open Weather API to check the invalid city {string}', (city) => {
  cy.getWeatherByCity(city).as('weatherResponse');
});

Then('the response should have status 404', () => {
  cy.get('@weatherResponse').then((res) => {
    expect(res.status).to.eq(404);
  });
});

And('the error message should contain {string}', (message) => {
  cy.get('@weatherResponse').then((res) => {
    expect(res.body).to.have.property('message', message);
  });
});

