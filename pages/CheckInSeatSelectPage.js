const { test } = require("@playwright/test");

class CheckInSeatSelectPage {
  constructor(page) {
    this.page = page;
  }

  async validateCheckInSeatSelectPage({ checkInSeatSelectText }) {
    await test.step(`validates the check-in seat select text`, async () => {
      await this.page.getByText(checkInSeatSelectText);
    });
  }

  async selectFreeSeat() {
    await test.step(`should select a seat that has 0 fee`, async () => {
      await this.page.locator("div").filter({ hasText: /^₹0$/ }).nth(1).click();
    });
  }

  async navigateToHealthDeclaration() {
    await test.step(`should take the user to the health declaration page`, async () => {
      await this.page.getByRole("button", { name: "Confirm Seat(s)" }).click();
    });
  }
}

module.exports = { CheckInSeatSelectPage };
