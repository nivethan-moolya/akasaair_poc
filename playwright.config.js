// @ts-check
import { devices } from '@playwright/test';

const config = {
  testDir: './tests',
  retries :0,
  
  /* Maximum time one test can run for. */
  timeout: 2 * 60 * 1000,
  expect: {
    timeout: 5000
  },
  
  reporter: 'html',
  outputDir: 'test-report/',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'https://www.akasaair.com',
    browserName : 'chromium', //chrome, webkit.
    headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure',//off,on
    actionTimeout: 10000,
    navigationTimeout: 30000,
    launchOptions:{
      slowMo: 0,
    }

  },
};

export default config;
