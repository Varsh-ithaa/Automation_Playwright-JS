const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');


Before(async function () {
    this.browser = await chromium.launch({
        headless: false,
    });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.setViewportSize({
        width: 1536,  // or use screen size like 1920x1080
        height: 816
    });
    screenshotPaths = []; // Initialize an array to collect screenshot paths
});

After(async function ({pickle, result }) {
    console.log(result?.status);
    //screenshot
    if(result?.status === Status.FAILED){
        const img = await this.page.screenshot({path :`./reports/screenshots/${pickle.id}.zip/${pickle.name}.png`, type: "png"});
        await this.attach(img, "image/png");

    }
    await this.page.close();
    await this.browser.close(); // Close browser
});

BeforeStep(function () {
    // You can add any setup code here if needed
});

// AfterStep(async function ({pickle}) {
//     const img = await this.page.screenshot({path :`./reports/screenshots/${pickle.id}.zip/${pickle.name}.png`, type: "png"});
//     await this.attach(img, "image/png");
// });



module.exports = { Before, After, BeforeStep, AfterStep, Status };
