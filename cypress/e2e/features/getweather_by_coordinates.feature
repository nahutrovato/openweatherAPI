Feature: OpenWeather API - Coordinates

 Scenario Outline: Get weather by geographic coordinates
    Given I request weather for coordinates '<lat>' and '<lon>'
    When the response should have status 200
    Then the city name should be "<expectedCity>"
    Examples:
      | lat     | lon      | expectedCity     |
      | 51.5074 | -0.1278  | London           |
      | 40.7128 | -74.0060 | New York         |