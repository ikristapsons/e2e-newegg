const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the Newegg main page", async () => {
    await browser.url("https://www.newegg.com"); 
});

When("I click on searchbar", async () => {
    const searchBar = await $(`.header2021-search-box [type="search"]`);
    await $(searchBar).click();
});

When("I type in {word}", async (word) => {
    const searchBar = await $(`.header2021-search-box [type="search"]`);
    await searchBar.setValue(word);
});

When("I click on search button", async () => {
    const searchBtn = await $(`div.header2021-search-button`);
    await searchBtn.click();
});

Then("I can see item has been found", async () => {
    const itemCell = await $('.item-title');
    await expect(itemCell).toBeExisting();
    await expect(itemCell).toHaveTextContaining("Windows");
});

When("I click on Todays Best Deals", async () => {
    const bestDeals = await $(`a[id='trendingBanner_720202'] span[class='font-s']`);
    await $(bestDeals).click();
});

When("I get redirected to deals page", async () => {
    await expect(browser).toHaveUrlContaining('todays-deals');
});

When("I click on logo", async () => {
    const pageLogo = await $(`.header2021-logo-img`);
    await $(pageLogo).click();
});

Then("I get redirected back to main pages", async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/')
});