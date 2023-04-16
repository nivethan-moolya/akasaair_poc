const { test, expect } = require("@playwright/test");

class SeatSelectPage {
  constructor(page) {
    this.page = page;
  }

  async skipSeatSelection () {
    await test.step(`I should be skip to the next page without selecting a seat`, async () => {
        await this.page.getByRole('button', { name: 'Skip' }).click();
        await this.page.waitForLoadState();
    });
  }
}

module.exports = {SeatSelectPage};
