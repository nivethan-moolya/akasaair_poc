const {expect} = require('@playwright/test');

class HomePage {

constructor(page)
{
    this.page = page;
    this.searchPanel= page.locator("[class= 'ComponentName_container web-only'] [class='ComponentName_searchWidgetPanel web-only'] [class*='searchpanel_searchPanel_tab'] p");
    this.searchRadioButton = page.locator("[class= 'ComponentName_container web-only'] [role='radiogroup'] p");
    this.selectRadioButton = page.locator("[class= 'ComponentName_container web-only'] [role='radiogroup'] input");
    this.validateRadioButton = page.locator("[class= 'ComponentName_container web-only'] [role='radiogroup'] [class*='Mui-checked']");
    this.choosePlace = page.locator("[class= 'ComponentName_container web-only'] [class*='Booking_autoComplete_box'] input");
    //this.choosePlace = page.locator("[id*='mui-']");
    this.typeBoarding = page.locator("div[class*='Mui-focused']");
    this.selectOption = page.locator("[class*='Booking_popper'] li");
    this.datePicker = page.locator("[class= 'ComponentName_container web-only'] [placeholder*='yyyy']");
    this.viewPassengers = page.locator("[class= 'ComponentName_container web-only'] img[alt='Down Arrow']");
    this.selectPassengers = page.locator("[passenger='[object Object]'] [class*='MuiPaper-root']");
    this.searchFlight = page.locator("[class= 'ComponentName_container web-only'] [class*='componentName_FlightBooking'] [class*='Booking_search_lower'] button");
}

async validatePanelName(expectedPanelName)
{
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
}

async selectTrip(tripValue){
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
}

async enterBoarding(boardingPlace){
    await this.choosePlace.first().click();
    await this.choosePlace.first().focus();
    await this.typeBoarding.type(boardingPlace, {delay: 1000});
    // await this.choosePlace.first().click();
    // await this.typeBoarding.type(boardingPlace);
    await this.selectOption.first().click();

}

async enterDestination(destinationPlace){
    await this.choosePlace.nth(1).click();
    await this.choosePlace.nth(1).focus();
    await this.typeBoarding.type(destinationPlace, {delay: 1000});
    // await this.choosePlace.last().click();
    // await this.typeBoarding.type(destinationPlace);
    await this.selectOption.first().click();

}

async clearAndEnterDate(travelDate){
    await this.choosePlace.first().click();
    await this.choosePlace.first().focus();
    await this.datePicker.fill('');
    await this.datePicker.type(travelDate, {delay: 100});
    await this.page.keyboard.press('Tab');
    await expect( this.searchFlight).toBeDisabled();

}

async addPassengers(adultery, total){
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
    await expect( this.searchFlight).toBeDisabled();

}

async searchFlightButtonEnabled(){
    await expect( this.searchFlight).toBeEnabled();
}

async shouldSearchFlight(){
    await this.searchFlight.click();
    await this.page.waitForLoadState();
}

}
module.exports = {HomePage};