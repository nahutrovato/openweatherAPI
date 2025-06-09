import {Given, When} from 'cypress-cucumber-preprocessor/steps';

Given('I request weather for coordinates {string} and {string}', (lat,lon) => {
  cy.getWeatherByCoordinates(lat,lon).as('weatherResponseByCoordinates');
});

When('the response should have status 200', () => {
  cy.get('@weatherResponseByCoordinates').then((res) => {
    expect(res.status).to.eq(200);
  });
});

Then('the city name should be {string}', (city) => {
  cy.get('@weatherResponseByCoordinates').then((res) => {
    expect(res.body.name).to.eq(city);
  });
});