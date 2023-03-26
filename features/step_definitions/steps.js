const { When, Then, Given } = require('@cucumber/cucumber')
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');


Given('I am on the Akasaair homepage', { timeout: 100 * 1000 }, async function () {
    const products = this.page.locator(".card-body");
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
});


When('I should be able to view and click on the search panels for {string}, {string} and {string}',{timeout: 100 * 1000}, async function (bookFlight, checkIn, manageBooking){
    this.homePage = this.poManager.getHomePage();
    await this.homePage.validatePanelName(manageBooking);
    await this.homePage.validatePanelName(checkIn);
    await this.homePage.validatePanelName(bookFlight);
});

When('I want to book a {string} flight ticket',{timeout: 100 * 1000}, async function (tripType) {
  // Write code here that turns the phrase above into concrete actions
  await this.homePage.selectTrip(tripType);
});

When('I should be able to provide the departure date as {string}',{timeout: 100 * 1000}, async function (travelDate) {
  // Write code here that turns the phrase above into concrete actions
  await this.homePage.clearAndEnterDate(travelDate);
});

When('I should be able to select the boarding and destination places as {string} and {string} respectively', {timeout: 100 * 1000}, async function (boarding, destination) {
  await this.homePage.enterBoarding(boarding);
  await this.homePage.enterDestination(destination);
});

When('I should be able to select the number of {string} as {string}',{timeout: 100 * 1000}, async function (adultery, addUp) {
  await this.homePage.addPassengers(adultery, addUp);
});

Then('I should see the Search Flights button enabled',{timeout: 100 * 1000}, async function () {
  await this.homePage.searchFlightButtonEnabled();
});

When('I click on Search flights',{timeout: 100 * 1000}, async function () {
  await this.homePage.shouldSearchFlight();
});

When ('I should be able to move to the next page to search for available flights',{timeout: 100 * 1000}, async function () {
  this.flightSearchPage = this.poManager.getFlightSearchPage();
  await this.flightSearchPage.validateFlightSearchPageTitle();
});