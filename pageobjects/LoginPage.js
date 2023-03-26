const config = require('../playwright.config');

class LoginPage {

constructor(page)
{
    this.page = page;
    this.signInbutton= page.locator("[value='Login']");
    this.cookiesModal = page.locator(".cookieModal button");

}

async goTo()
{
    const base_url = config.use.baseURL;
    //await this.page.goto("https://www.akasaair.com");
    await this.page.goto(base_url);
    if(await this.cookiesModal.isVisible()){
        await this.cookiesModal.click();
    }
}

}
module.exports = {LoginPage};