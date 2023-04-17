const { test } = require("@playwright/test");

class CheckInSuccessfulPage {
  constructor(page) {
    this.page = page;
  }

  async validateCheckInSuccessfulPage({ checkInSuccessText }) {
    await test.step(`validates the check-in success text`, async () => {
      await this.page.getByText(checkInSuccessText);
    });
  }
}

module.exports = { CheckInSuccessfulPage };
