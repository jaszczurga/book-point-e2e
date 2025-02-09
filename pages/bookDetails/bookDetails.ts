import {Locator, Page} from "@playwright/test";


export class BookDetails {

    readonly page: Page;
    readonly continueButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.continueButton = this.page.getByTestId("continue-button");
    }

    public async clickContinueButton() {
        await this.continueButton.click();
    }

}