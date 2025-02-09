import {Locator, Page} from "@playwright/test";


export class Profile {

    readonly page: Page;
    readonly addMoreBooksButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.addMoreBooksButton = this.page.getByText("Add more!");
    }

    public async clickAddMoreBooksButton() {
        await this.addMoreBooksButton.click();
    }
}