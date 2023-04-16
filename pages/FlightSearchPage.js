const { test, expect } = require("@playwright/test");

class FlightSearchPage {
  constructor(page) {
    this.page = page;
  }

  async validateFlightSearchPageTitle() {
    await test.step(`I should be able to move to the next page to search for available flights`, async () => {
      const pageTitle = await this.page.title();
      console.log(pageTitle);
    });
  }

  async validateLabels() {
    await test.step("I should be a able to see the labels in the flight search page", async () => {
      await expect(this.page.getByText("Modify")).toBeVisible();
      await expect(this.page.getByText("Duration")).toBeVisible();
      await expect(this.page.getByText("Price")).toBeVisible();
    });
  }

  async selectFlexiFare () {
    await test.step("I should be a able to select the flexi fare for the first flight", async () => {
      await this.page.getByRole("button", {name: "Select"}).nth(0).click();
      await this.page.getByRole("button", {name: "Continue"}).click();
      await this.page.getByRole("button", {name: "No, Thanks"}).click();
      await this.page.waitForLoadState();
    });
  }

  async validateNoFlightsScreen() {
    await test.step("I should be able to see the No flights found screen", async () => {
      await expect(this.page.getByText("Modify")).toBeVisible();
      await expect(this.page.getByText("No flights found")).toBeVisible();
      await expect(this.page.getByText("Try a different date")).toBeVisible();
      await expect(
        this.page.getByRole("img", { name: "no-flights-icon" })
      ).toBeVisible();
    });
  }
}
module.exports = { FlightSearchPage };
