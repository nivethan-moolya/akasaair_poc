const { test } = require("@playwright/test");

class CheckInSummaryPage {
  constructor(page) {
    this.page = page;
  }

  async validateCheckInSummaryPage({ checkInSummaryText }) {
    await test.step(`validates the check-in summary text`, async () => {
      await this.page.getByText(checkInSummaryText);
    });
  }

  async selectPassenger() {
    await test.step(`should tick the passenger checkbox`, async () => {
      await this.page
        .getByRole("checkbox", { name: "passenger-checkbox-1" })
        .check();
      await this.page.waitForLoadState();
    });
  }

  async navigateToCheckInAddonsPage() {
    await test.step(`should take the user to check-in add-ons page`, async () => {
      await this.page.getByRole("button", { name: "Select Add-Ons" }).click();
    });
  }
}

module.exports = { CheckInSummaryPage };
