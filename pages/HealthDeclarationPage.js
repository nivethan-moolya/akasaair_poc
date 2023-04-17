const { test } = require("@playwright/test");

class HealthDeclarationPage {
  constructor(page) {
    this.page = page;
  }

  async validateHealthDeclarationPage({ healthDeclarationText }) {
    await test.step(`validates the health declaration text`, async () => {
      await this.page.getByText(healthDeclarationText);
    });
  }

  async fillHealthDeclarationForm() {
    await test.step(`fills the health declaration form`, async () => {
      await this.page.getByLabel("Mobile Number").click();
      await this.page.getByLabel("Mobile Number").click();
      await this.page.getByLabel("Mobile Number").fill("8019933192");
      await this.page.getByLabel("Email ID").click();
      await this.page
        .getByLabel("Email ID")
        .fill("renukaprasad@codewalnut.com");
      await this.page.getByLabel("Age").click();
      await this.page.getByLabel("Age").fill("22");
      await this.page.getByLabel("Destination Address").click();
      await this.page.getByLabel("Destination Address").fill("Delhi");
      await this.page.getByLabel("Destination Pincode").click();
      await this.page.getByLabel("Destination Pincode").fill("515111");
      await this.page.getByRole("checkbox", { name: "Checkbox demo" }).check();
    });
  }

  async navigateToDangerousGoods() {
    await test.step(`should take the user to dangerous goods page`, async () => {
      await this.page.getByRole("button", { name: "Continue" }).click();
    });
  }
}

module.exports = { HealthDeclarationPage };
