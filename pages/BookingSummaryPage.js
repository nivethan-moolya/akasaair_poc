const { test, expect } = require("@playwright/test");

class BookingSummaryPage {
  constructor(page) {
    this.page = page;
  }

  async validateBookingSummaryPage ({passengerName}) {
    await test.step(`should show the title: Who's travelling?`, async () => {
        await this.page.getByText("Who's travelling?");
    });

    await test.step(`should show passenger name: ${passengerName}`, async () => {
        await this.page.getByText(passengerName);
    });
  }
}

module.exports = {BookingSummaryPage};
