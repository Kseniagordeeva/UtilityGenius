import { test, expect } from "@playwright/test";
import { LoginPO } from "../tests/pageobjects/LoginPO";
import { SearchRebatesPO } from './pageobjects/SearchRebatesPO'

test.describe(`Verify Login Functionality`, () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(`/`)
        const Login = new LoginPO(page);

        // Step 1: User login with valid credentials
        await Login.enterLoginCredentialsAndClickOnLoginButton();

        // Step 2: Verify home page URl
        await expect(page.url()).toEqual("https://app.utilitygenius.com/")
      
    })
    test(`Verify search rebates page`, async ({ page }) => {
        // Step 1: Click on the search rebates link 

        const RebatesPage = new SearchRebatesPO(page)
        RebatesPage.clickOnSearchRebatesButton();

        // Step 2: Verify search rebates page
        await page.waitForTimeout(3000)
        await expect(page.url()).toEqual("https://app.utilitygenius.com/")

    })
})