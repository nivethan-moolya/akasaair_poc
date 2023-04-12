const {expect, test} = require('@playwright/test');

class HomePage {
    
constructor(page)
{
    const WEB_ONLY = "[class= 'ComponentName_container web-only']";
    this.page = page;
    this.searchPanel= page.locator(WEB_ONLY+" [class='ComponentName_searchWidgetPanel web-only'] [class*='searchpanel_searchPanel_tab'] p");
    this.searchRadioButton = page.locator(WEB_ONLY+" [role='radiogroup'] p");
    this.selectRadioButton = page.locator(WEB_ONLY+" [role='radiogroup'] input");
    this.validateRadioButton = page.locator(WEB_ONLY+" [role='radiogroup'] [class*='Mui-checked']");
    this.choosePlace = page.locator(WEB_ONLY+" [class*='Booking_autoComplete_box'] input");
    //this.choosePlace = page.locator("[id*='mui-']");
    this.typeBoarding = page.locator("div[class*='Mui-focused']");
    this.selectOption = page.locator("[class*='Booking_popper'] li");
    this.datePicker = page.locator(WEB_ONLY+" [placeholder*='yyyy']");
    this.viewPassengers = page.locator(WEB_ONLY+" img[alt='Down Arrow']");
    this.selectPassengers = page.locator("[passenger='[object Object]'] [class*='MuiPaper-root']");
    this.searchFlight = page.locator(WEB_ONLY+" [class*='componentName_FlightBooking'] [class*='Booking_search_lower'] button");
}

async validatePanelName(expectedPanelName)
{
    await test.step(`I should be able to view and click on the search panels for -> `+expectedPanelName, async () => {
        await this.page.waitForLoadState();
        const count = await this.searchPanel.count();
        let actualPanelName = "";
        for(let i =0; i<count; ++i){
            actualPanelName = await this.searchPanel.nth(i).textContent();
            if(actualPanelName === expectedPanelName){
                await expect(this.searchPanel.nth(i)).toHaveText(expectedPanelName);
                await this.searchPanel.nth(i).click();
                break;
            }
        }
})}

async selectTrip(tripValue){
    await test.step(`I want to book a `+tripValue+` flight ticket`, async () => {
        const countTrip = await this.searchRadioButton.count();
        let actualTripName = "";
        for(let i =0; i<countTrip; ++i){
            actualTripName = await this.searchRadioButton.nth(i).textContent();
            if(actualTripName === tripValue){
                await this.selectRadioButton.nth(i).click();
                await expect(this.validateRadioButton).toBeVisible();
                break;
            }
        }
})}

async enterBoarding(boardingPlace){
    await test.step(`I should be able to select the boarding place as `+boardingPlace, async () => {
        await this.choosePlace.first().click();
        await this.choosePlace.first().focus();
        await this.typeBoarding.type(boardingPlace, {delay: 1000});
        // await this.choosePlace.first().click();
        // await this.typeBoarding.type(boardingPlace);
        await this.selectOption.first().click();
})}

async enterDestination(destinationPlace){
    await test.step(`I should be able to select the destination place as `+destinationPlace, async () => {
        await this.choosePlace.nth(1).click();
        await this.choosePlace.nth(1).focus();
        await this.typeBoarding.type(destinationPlace, {delay: 1000});
        // await this.choosePlace.last().click();
        // await this.typeBoarding.type(destinationPlace);
        await this.selectOption.first().click();
})}

async clearAndEnterDate(travelDate){
    await test.step(`I should be able to provide the departure date as `+travelDate, async () => {
        await this.choosePlace.first().click();
        await this.choosePlace.first().focus();
        await this.datePicker.fill('');
        await this.datePicker.type(travelDate);
        await this.choosePlace.first().focus();
        await this.page.keyboard.press('Insert');
        await expect( this.searchFlight).toBeDisabled();
})}

async addPassengers(adultery, total){
    await test.step(`I should be able to select the number of `+adultery+` as `+total, async () => {
        let addAdult = 1;
        let addChild = 3;
        let addSenior = 5;
        let addInfant = 7;

        await this.viewPassengers.click();
        await this.viewPassengers.focus();
        const adulterCount = await this.selectPassengers.locator('h5').count();
        for(let i=0; i<adulterCount; ++i){
            let num = await this.selectPassengers.locator('p').nth(i).textContent();
            num = parseInt(num);
            total = parseInt(total);
            const ageGroup = await this.selectPassengers.locator('h5').nth(i).textContent();
            if (await ageGroup === adultery && num < total){
                if (ageGroup == "Adult(s)"){
                    await this.selectPassengers.locator('button').nth(addAdult).click();
                }else if(ageGroup == "Children"){
                    await this.selectPassengers.locator('button').nth(addChild).click();
                }
                else if(ageGroup == "Senior Citizen"){
                    await this.selectPassengers.locator('button').nth(addSenior).click();
                }
                else if(ageGroup == "Infant(s)"){
                    await this.selectPassengers.locator('button').nth(addInfant).click();
                }else{
                    // do nothing
                }
            }else{
                // do nothing
            }
        }
        await this.selectPassengers.locator('button').last().click();
        //await expect( this.searchFlight ).toBeDisabled();
})}

async searchFlightButtonEnabled(){
    await test.step(`I see theSearch button is Enabled`, async () => {
        await expect( this.searchFlight ).toBeEnabled();
})}

async shouldSearchFlight(){
    await test.step(`I click on Search flights`, async () => {
        await this.searchFlight.click();
        await this.page.waitForLoadState();
})}

}
module.exports = {HomePage};
