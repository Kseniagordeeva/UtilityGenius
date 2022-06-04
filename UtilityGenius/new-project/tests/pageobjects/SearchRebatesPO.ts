import { Locator, Page } from "@playwright/test";

export class SearchRebatesPO {
    readonly page:Page;
    readonly searchRebatesLink:Locator;

    constructor(page:Page) {
        this.page = page;
        this.searchRebatesLink=page.locator("//ul[@class='Navbar_navList__17ESt']/li//a[text()='Search Rebates']")
    }
    /**
     * Click on the Search rebates button
     */
    async clickOnSearchRebatesButton() {
        this.searchRebatesLink.click()
    }
}