Feature: OpenWeather API - City

  Scenario Outline: Get the weather for a '<city>'
    Given I call to the Open Weather API to check the city '<city>'
    When the response status code is 200
    Then the response should contain the city name '<city>'
    And the response should contain the country name '<country>' 
    Examples:
    | city           | country |
    | London         | GB      |
    | Buenos Aires   | AR      |
    | Rio de Janeiro | BR      |
    
    