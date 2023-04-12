import { test as base} from '@playwright/test';

import LoginPage from '@pages/LoginPage';
import HomePage from '@pages/HomePage';


const test = base.extend<BaseFixture>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }

});

export { test };
export const expect = test.expect;