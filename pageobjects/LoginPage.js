class LoginPage {

constructor(page)
{
    this.page = page;
    this.signInbutton= page.locator("[value='Login']");
    this.cookiesModal = page.locator(".cookieModal button");

}

async goTo()
{
    await this.page.goto("https://www.akasaair.com");
    if(await this.cookiesModal.isVisible()){
        await this.cookiesModal.click();
    }
}

}
module.exports = {LoginPage};