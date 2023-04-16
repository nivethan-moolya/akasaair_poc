import test from "@playwright/test";
const { POManager } = require("../pages/POManager");
import testdata from "../fixtures/testData.json";

test.describe("AkasaAir booking scenario", () => {
  test("@p0 Book a flight available with the lowest fare", async ({ page }) => {
    //Given I am on the Akasaair homepage
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();

    // //When I should be able to view and click on the search panels for "Book a flight", "Check-in" and "Manage booking"
    const homePage = poManager.getHomePage();
    await homePage.validatePanelName(testdata.manageBooking);
    await homePage.validatePanelName(testdata.checkIn);
    await homePage.validatePanelName(testdata.bookFlight);

    //When I want to book a "One Way" flight ticket
    await homePage.selectTrip(testdata.tripType);
    //When I should be able to provide the departure date as "Thu, 30 Mar 2023"
    await homePage.clearAndEnterDate();

    //When I should be able to select the boarding and destination places as "AMD" and "BOM" respectively
    await homePage.enterBoarding(testdata.boarding);
    await homePage.enterDestination(testdata.destination);
    //When I should be able to select the number of "Adult(s)" as "2"
    await homePage.addPassengers(
      testdata.passengers[0].group,
      testdata.passengers[0].headCount
    );
    //When I should be able to select the number of "Children" as "1"
    // await homePage.addPassengers(testdata.passengers[1].group, testdata.passengers[1].headCount);
    //When I click on Search flights
    await homePage.searchFlightButtonEnabled();
    await homePage.shouldSearchFlight();

    //Then I should be able to move to the next page to search for available flights
    const flightSearchPage = poManager.getFlightSearchPage();
    await flightSearchPage.validateFlightSearchPageTitle();
    await flightSearchPage.validateLabels();
    // await flightSearchPage.validateNoFlightsScreen();
    await flightSearchPage.selectFlexiFare();

    // Then I should be able to go to the passenger detail form page
    const addPassengerDetailsPage = poManager.getAddPassengerDetailsPage();
    await addPassengerDetailsPage.validateAddPassengerDetailsPageTitle();
    const paxName = testdata.passengerNames[0];
    const paxContactDetails = testdata.passengerContactDetails;
    await addPassengerDetailsPage.enterUserName({firstName: paxName.firstName, lastName: paxName.lastName, gender: paxName.gender});
    await addPassengerDetailsPage.enterUserContactDetailsAndContinue({phoneNumber: paxContactDetails.phoneNumber, email: paxContactDetails.email});

    //Then I should be able to move to the next page to select addons
    const selectAddOnsPage = poManager.getAddOnsPage();
    await selectAddOnsPage.skipAddOnSelection();

    //Then I should be able to move to the next page to select seats
    const seatSelectPage = poManager.getSeatSelectPage();
    await seatSelectPage.skipSeatSelection();

    //Then I should be able to move to the next page to booking summary 
    const bookingSummaryPage = poManager.getBookingSummaryPage();
    await bookingSummaryPage.validateBookingSummaryPage({passengerName: `${paxName.firstName} ${paxName.lastName}`});
  });
});
