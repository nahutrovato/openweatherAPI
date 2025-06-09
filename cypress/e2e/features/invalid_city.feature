 Feature: OpenWeather API - Invalid city

 Scenario: Invalid city input returns error
    Given I call to the Open Weather API to check the invalid city 'Nahuel Trovato city'
    Then the response should have status 404
    And the error message should contain "city not found"