Feature: OpenWeather API - Invalid API Key

 Scenario Outline: Invalid API Key
    Given I call to the Open Weather API to check the city '<city>' without API KEY
    When the response should have status 401
    Then the error message should be "Invalid API key. Please see https://openweathermap.org/faq#error401 for more info."
    Examples:
    | city           | country |
    | London         | GB      |
    | Buenos Aires   | AR      |
    | Rio de Janeiro | BR      |
    