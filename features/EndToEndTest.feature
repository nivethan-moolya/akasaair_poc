Feature: As a passenger, I'd like to book a flight with AkasaAir, so that I can commute on time

Scenario: Book a flight available with the lowest fare
    Given I am on the Akasaair homepage
    When I should be able to view and click on the search panels for "Book a flight", "Check-in" and "Manage booking"
    When I want to book a "One Way" flight ticket
    When I should be able to provide the departure date as "Thu, 30 Mar 2023"
    When I should be able to select the number of "Adult(s)" as "2"
    When I should be able to select the number of "Children" as "1"
    When I should be able to select the boarding and destination places as "AMD" and "BOM" respectively
    Then I should see the Search Flights button enabled

    When I click on Search flights
    Then I should be able to move to the next page to search for available flights

    #Pending Test Steps:
    
    # Then I should be able to see the list of available flights
    # And I should be able to see the calendar for the next "7" days
    # And I should be able to see the selected boarding and destination in the terminal
    # And I should be able to see the lowest fare for any one flight

    # When I select the lowest fare flight and continue
    # Then I observe the Flexi Fare pop-up and ignore it

    # And I provide the first name and last name as “Anbu” and Kumar"
    # And I select gender as "male"
    # And I provide the mobile number "9977665533"
    # And I provide the email ID as "test@codewalnutcom"
    # And I then click the "Continue" button to proceed
    # And I see an add-on for "Excess Baggage" on the Add-Ons screen
    # And I see an add-on for "Cafe Akasa" on the Add-Ons screen
    # And I skip the add-on screen
    # And I observe the seat selection screen and skip to
    # And I observe that the flight details are correct as given in the inputs