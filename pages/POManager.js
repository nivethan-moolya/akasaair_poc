const { HomePage } = require("./HomePage");
const { LoginPage } = require("./LoginPage");
const { FlightSearchPage } = require("./FlightSearchPage");
const { AddPassengerDetailsPage } = require("./AddPassengerDetails");
const { AddOnsPage } = require("./AddOnsPage");
const { SeatSelectPage } = require("./SeatSelectPage");
const { BookingSummaryPage } = require("./BookingSummaryPage");
const { BookingSuccessPage } = require("./BookingSuccessPage");
const { RetrieveBookingPage } = require("./RetrieveBookingPage");
const { CheckInSummaryPage } = require("./CheckInSummaryPage");
const { CheckInAddOnsPage } = require("./CheckInAddOnsPage");
const { CheckInSeatSelectPage } = require("./CheckInSeatSelectPage");
const { HealthDeclarationPage } = require("./HealthDeclarationPage");
const { DangerousGoodsPage } = require("./DangerousGoodsPage");
const { CheckInSuccessfulPage } = require("./CheckInSuccessfulPage");

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.flightSearchPage = new FlightSearchPage(this.page);
    this.addPassengerDetailsPage = new AddPassengerDetailsPage(this.page);
    this.addOnsPage = new AddOnsPage(this.page);
    this.seatSelectPage = new SeatSelectPage(this.page);
    this.bookingSummaryPage = new BookingSummaryPage(this.page);
    this.bookingSuccessPage = new BookingSuccessPage(this.page);
    this.retrieveBookingPage = new RetrieveBookingPage(this.page);
    this.checkInSummaryPage = new CheckInSummaryPage(this.page);
    this.checkInAddOnsPage = new CheckInAddOnsPage(this.page);
    this.checkInSeatSelectPage = new CheckInSeatSelectPage(this.page);
    this.healthDeclarationPage = new HealthDeclarationPage(this.page);
    this.dangerousGoodsPage = new DangerousGoodsPage(this.page);
    this.checkInSuccessfulPage = new CheckInSuccessfulPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getHomePage() {
    return this.homePage;
  }

  getFlightSearchPage() {
    return this.flightSearchPage;
  }

  getAddPassengerDetailsPage() {
    return this.addPassengerDetailsPage;
  }

  getAddOnsPage() {
    return this.addOnsPage;
  }

  getSeatSelectPage() {
    return this.seatSelectPage;
  }

  getBookingSummaryPage() {
    return this.bookingSummaryPage;
  }

  getBookingSuccessPage() {
    return this.bookingSuccessPage;
  }

  getRetrieveBookingPage() {
    return this.retrieveBookingPage;
  }

  getCheckInSummaryPage() {
    return this.checkInSummaryPage;
  }

  getCheckInAddOnsPage() {
    return this.checkInAddOnsPage;
  }

  getCheckInAddOnsPage() {
    return this.checkInAddOnsPage;
  }

  getCheckInSeatSelectPage() {
    return this.checkInSeatSelectPage;
  }

  getHealthDeclarationPage() {
    return this.healthDeclarationPage;
  }

  getDangerousGoodsPage() {
    return this.dangerousGoodsPage;
  }

  getCheckInSuccessfulPage() {
    return this.checkInSuccessfulPage;
  }
}
module.exports = { POManager };
