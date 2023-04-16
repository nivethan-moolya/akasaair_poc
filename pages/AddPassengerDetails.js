const { test, expect } = require("@playwright/test");

class AddPassengerDetailsPage {
  constructor(page) {
    this.page = page;
  }

  async validateAddPassengerDetailsPageTitle () {
    await test.step(`I should be able to move to the next page to fill in the passenger information`, async () => {
      const pageTitle = await this.page.title();
      console.log(pageTitle);
    });
  }

  async enterUserName ({firstName, lastName, gender}) {
    await test.step(`I should be able to enter the user's first name: ${firstName}, last name: ${lastName}, and gender: ${gender}`, async () => {
      await this.page.getByLabel('First Name').click();
      await this.page.getByLabel('First Name').fill(firstName);

      await this.page.getByLabel('Last Name').click();
      await this.page.getByLabel('Last Name').fill(lastName);

      await this.page.getByRole('button', { name: 'Select gender ' }).click();
      await this.page.getByRole('option', { name: gender, exact: true }).click();
    });
  }

  async enterUserContactDetailsAndContinue ({phoneNumber, email}) {
    await test.step(`I should be able to enter the phone number: ${phoneNumber} and email: ${email}`, async () => {
      await this.page.getByPlaceholder('1 (702) 123-4567').click();
      await this.page.getByPlaceholder('1 (702) 123-4567').fill(phoneNumber);
      await this.page.getByPlaceholder('1 (702) 123-4567').press('Tab');

      await this.page.getByLabel('Email ID').click();
      await this.page.getByLabel('Email ID').fill(email);

      await this.page.getByRole('button', { name: 'Continue' }).click();
      await this.page.waitForLoadState();
    });
  }
}

module.exports = {AddPassengerDetailsPage};
