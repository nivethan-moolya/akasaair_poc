const { HomePage } = require("./HomePage");
const { LoginPage } = require("./LoginPage");
const { FlightSearchPage } = require("./FlightSearchPage");
const { AddPassengerDetailsPage } = require("./AddPassengerDetails");
const { AddOnsPage } = require("./AddOnsPage");
const { SeatSelectPage } = require("./SeatSelectPage");
const { BookingSummaryPage } = require("./BookingSummaryPage");

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

  getAddPassengerDetailsPage () {
    return this.addPassengerDetailsPage;
  }

  getAddOnsPage () {
    return this.addOnsPage;
  }

  getSeatSelectPage () {
    return this.seatSelectPage;
  }

  getBookingSummaryPage () {
    return this.bookingSummaryPage;
  }
}
module.exports = { POManager };
