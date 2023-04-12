const { test } = require("@playwright/test");

class FlightSearchPage {

    constructor(page)
    {
        this.page = page;
    
    }
    
    async validateFlightSearchPageTitle()
    {
        await test.step(`I should be able to move to the next page to search for available flights`, async () => {
            const pageTitle = await this.page.title();
            console.log(pageTitle);
        })}
    }
    module.exports = {FlightSearchPage};
    