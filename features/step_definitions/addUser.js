const { Given, Then, When, status } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test')
const UserDetails = require('../UserDetails.json');
const pageobj = require('../Locators.json');
const Execute = require('../support/Execute');
const { attachScreenshot } = require('../support/world'); 




Given(/^Launching the URL$/, async function () {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log(await this.page.title());
});

When('user clicks on login button', async function () {
    await this.page.click('button[type="submit"]');
    const error = this.page.textContent('//div[@class="orangehrm-login-slot-wrapper"]//div[1]//div[1]//span[1]');
    console.log(error);
})


Then('user should signIn with {string} and {string}', async function (username, password) {
    await this.page.fill('input[placeholder="Username"]', username);
    await this.page.fill('input[placeholder="Password"]', password)
    await Execute.attachScreenshot(this.page, this.attach);
    await this.page.click('button[type="submit"]');
    await Execute.attachScreenshot(this.page, this.attach);
})

Then('Verify user logged in succsessfully', async function () {
    await this.page.click('//a[@class="oxd-main-menu-item active"]');
    const uname = await this.page.locator('//p[@class="oxd-userdropdown-name"]');
    await Execute.attachScreenshot(this.page, this.attach);
    console.log(await uname.textContent());
})

When('user selects {string} menu', async function (menu) {
    await this.page.click('ul[class="oxd-main-menu"] >li:nth-child(1)');
    const heading = await this.page.textContent('span[class="oxd-topbar-header-breadcrumb"]');
    console.log(heading);
    await Execute.attachScreenshot(this.page, this.attach);
})


// Then('the application should display {string} for {string}', async function (fields, menu, table) {
//     await Execute.waitForLoading(this.page);
//     const data = table.hashes(); 
//     console.log('Data to verify:', data);
//     for (let i = 0; i < data.length; i++) {
//         const row = data[i]; 
//         for (const [key, value] of Object.entries(row)) {
//             console.log(`Checking field: ${key}, Expected value: ${value}`);
//             await Execute.checkElementExist(pageobj[key], this.page);
//             await Execute.checkHtmlText(pageobj[key], value, this.page);
//         }
//     }
// });




