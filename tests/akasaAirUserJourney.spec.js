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
    await addPassengerDetailsPage.enterUserName({
      firstName: paxName.firstName,
      lastName: paxName.lastName,
      gender: paxName.gender,
    });
    await addPassengerDetailsPage.enterUserContactDetailsAndContinue({
      phoneNumber: paxContactDetails.phoneNumber,
      email: paxContactDetails.email,
    });

    //Then I should be able to move to the next page to select addons
    const selectAddOnsPage = poManager.getAddOnsPage();
    await selectAddOnsPage.skipAddOnSelection();

    //Then I should be able to move to the next page to select seats
    const seatSelectPage = poManager.getSeatSelectPage();
    await seatSelectPage.skipSeatSelection();

    //Then I should be able to move to the next page to booking summary
    const bookingSummaryPage = poManager.getBookingSummaryPage();
    await bookingSummaryPage.validateBookingSummaryPage({
      passengerName: `${paxName.firstName} ${paxName.lastName}`,
    });
    await bookingSummaryPage.makePayment();

    //Once the payment is successful, I should be able to move to the booking success page
    const bookingSuccessPage = poManager.getBookingSuccessPage();
    await bookingSuccessPage.validateBookingSuccessMessage({
      bookingSuccessText: testdata.bookingSuccessMessage,
    });
    await bookingSuccessPage.navigateToManageBooking({
      manageBookingText: testdata.manageBooking,
    });

    //It should take the user to the retrieve booking page
    const retrieveBookingPage = poManager.getRetrieveBookingPage();
    await retrieveBookingPage.validateRetrieveBookingPage({
      modifyBookingText: testdata.modifyBooking,
    });
    await retrieveBookingPage.navigateToCheckIn();

    //It should take the user to the check-in summary page
    const checkInSummaryPage = poManager.getCheckInSummaryPage();
    await checkInSummaryPage.validateCheckInSummaryPage({
      checkInSummaryText: testdata.checkInSummary,
    });
    await checkInSummaryPage.selectPassenger();
    await checkInSummaryPage.navigateToCheckInAddonsPage();

    //It should take the user to the check-in add-ons page
    const checkInAddOnsPage = poManager.getCheckInAddOnsPage();
    await checkInAddOnsPage.validateCheckInAddOnsPage({
      checkInAddOnsText: testdata.checkInAddOnsText,
    });
    await checkInAddOnsPage.navigateToSeatSelect();

    //It should take the user to the check-in seat select page
    const checkInSeatSelectPage = poManager.getCheckInSeatSelectPage();
    await checkInSeatSelectPage.validateCheckInSeatSelectPage({
      checkInSeatSelectText: testdata.checkInSeatSelect,
    });
    await checkInSeatSelectPage.selectFreeSeat();
    await checkInSeatSelectPage.navigateToHealthDeclaration();

    //It should take the user to the check-in seat select page
    const healthDeclarationPage = poManager.getHealthDeclarationPage();
    await healthDeclarationPage.validateHealthDeclarationPage({
      healthDeclarationText: testdata.healthDeclaration,
    });
    await healthDeclarationPage.fillHealthDeclarationForm();
    await healthDeclarationPage.navigateToDangerousGoods();

    //It should take the user to the dangerous goods page
    const dangerousGoodsPage = poManager.getDangerousGoodsPage();
    await dangerousGoodsPage.validateDangerousGoodsPage({
      dangerousGoodsText: testdata.dangerousGoods,
    });
    await dangerousGoodsPage.acceptDangerousGoodsPolicy();
    await dangerousGoodsPage.proceedToCheckIn();

    //It should take the user to the check-in success page
    const checkInSuccessfulPage = poManager.getCheckInSuccessfulPage();
    await checkInSuccessfulPage.validateCheckInSuccessfulPage({
      checkInSuccessText: testdata.checkInSuccess,
    });
  });
});
