const { test } = require("@playwright/test");

class RetrieveBookingPage {
  constructor(page) {
    this.page = page;
  }

  async validateRetrieveBookingPage({ modifyBookingText }) {
    await test.step(`validates the modify booking text`, async () => {
      await this.page.getByText(modifyBookingText);
    });
  }

  async navigateToCheckIn() {
    await test.step(`should redirect the user to the check-in page`, async () => {
      await this.page
        .getByRole("button", { name: "TicketIcon Check-in" })
        .click();

      await this.page
        .getByRole("button", { name: "Check-in", exact: true })
        .click();
    });
  }
}

module.exports = { RetrieveBookingPage };
