const { test } = require("@playwright/test");

class BookingSummaryPage {
  constructor(page) {
    this.page = page;
  }

  async validateBookingSummaryPage({ passengerName }) {
    await test.step(`should show the title: Who's travelling?`, async () => {
      await this.page.getByText("Who's travelling?");
    });

    await test.step(`should show passenger name: ${passengerName}`, async () => {
      await this.page.getByText(passengerName);
    });
  }

  async makePayment() {
    await test.step(`should make the payment successfully`, async () => {
      await this.page.getByRole("button", { name: "Make Payment" }).click();
      await this.page
        .frameLocator("iframe >> nth=3")
        .getByRole("listitem")
        .filter({ hasText: "Netbanking All Indian banks" })
        .click();
      await this.page
        .frameLocator("iframe >> nth=3")
        .locator("label")
        .filter({ hasText: "SBI" })
        .click();

      const page1Promise = this.page.waitForEvent("popup");
      await this.page
        .frameLocator("iframe >> nth=3")
        .getByRole("button", { name: "Pay Now" })
        .click();

      const page1 = await page1Promise;
      await page1.getByRole("button", { name: "Success" }).click();
      await this.page
        .locator("div")
        .filter({ hasText: /^My bookings$/ })
        .nth(1)
        .click();
    });
  }
}

module.exports = { BookingSummaryPage };
