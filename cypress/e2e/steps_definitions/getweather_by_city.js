import {Given, When} from 'cypress-cucumber-preprocessor/steps';

Given('I call to the Open Weather API to check the city {string}', (city) => {
  cy.getWeatherByCity(city).as('weatherResponse');
});

When('the response status code is 200', () => {
  cy.get('@weatherResponse').then((res) => {
    expect(res.status).to.eq(200);
  });
});

Then('the response should contain the city name {string}', (city) => {
  cy.get('@weatherResponse').then((res) => {
    expect(res.body).to.have.property('name', city);
  });
});

Then('the response should contain the country name {string}', (country) => {
  cy.get('@weatherResponse').then((res) => {
    expect(res.body.sys).to.have.property('country', country);
  });
});
