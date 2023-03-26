class FlightSearchPage {

    constructor(page)
    {
        this.page = page;
    
    }
    
    async validateFlightSearchPageTitle()
    {
        const pageTitle = await this.page.title();
        console.log(pageTitle);
    }
    
    }
    module.exports = {FlightSearchPage};