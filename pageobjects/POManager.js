const {LoginPage} = require('./LoginPage');
const {HomePage} = require('./HomePage')
const {FlightSearchPage} = require('./FlightSearchPage')
class POManager
{
constructor(page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.flightSearchPage = new FlightSearchPage(this.page);

}

getLoginPage()
{
    return this.loginPage;
}

getHomePage(){
    return this.homePage;
}

getFlightSearchPage(){
    return this.flightSearchPage;
}

}
module.exports = {POManager};