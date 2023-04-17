const { test } = require("@playwright/test");

class DangerousGoodsPage {
  constructor(page) {
    this.page = page;
  }

  async validateDangerousGoodsPage({ dangerousGoodsText }) {
    await test.step(`validates the dangerous text`, async () => {
      await this.page.getByText(dangerousGoodsText);
    });
  }

  async acceptDangerousGoodsPolicy() {
    await test.step(`agrees to the dangerous goods policy`, async () => {
      await this.page.getByLabel("I Agree").check();
    });
  }

  async proceedToCheckIn() {
    await test.step(`should take the user to the check-in successful page`, async () => {
      await this.page.getByRole("button", { name: "Continue" }).click();
    });
  }
}

module.exports = { DangerousGoodsPage };
