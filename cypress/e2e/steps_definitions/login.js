import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';

Given('enter page', () => {
    cy.visit('www.google.com');
});