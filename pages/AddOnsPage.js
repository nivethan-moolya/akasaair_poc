const { test, expect } = require("@playwright/test");

class AddOnsPage {
  constructor(page) {
    this.page = page;
  }

  async skipAddOnSelection () {
    await test.step(`I should be skip to the next page without adding any add-ons`, async () => {
        await this.page.getByRole('button', { name: 'Skip' }).click();
        await this.page.waitForLoadState();
    });
  }
}

module.exports = {AddOnsPage};
