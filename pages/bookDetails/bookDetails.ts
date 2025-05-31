import {Locator, Page} from "@playwright/test";


export class BookDetails {

    readonly page: Page;
    readonly borrowButton: Locator;
    readonly checkAvailabilityButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.borrowButton = this.page.getByTestId("borrow-button");
        this.checkAvailabilityButton = this.page.getByTestId("check-availability");
    }

    public async clickBorrowButton() {
        await this.borrowButton.click();
    }

    public async clickCheckAvailabilityButton() {
        await this.checkAvailabilityButton.click();
    }
}