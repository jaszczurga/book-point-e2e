import {Locator, Page} from "@playwright/test";


export class AddBook {

    readonly page: Page;
    readonly googleBooksSearchButton: Locator;
    readonly submitButton: Locator;
    readonly bookImageInPopup: Locator;
    readonly popup: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.googleBooksSearchButton = this.page.getByTestId("google-book-search")
        this.submitButton = this.page.getByText("Submit");
        this.bookImageInPopup = this.page.getByTestId("add-book-img-popup");
        this.popup = this.page.getByTestId("google-books-popup");
    }

    public async clickGoogleBooksSearchButton() {
        await this.googleBooksSearchButton.click();
    }

    public async pickFirstVisibleBook() {
        await this.bookImageInPopup.nth(0).click();
        await this.page.waitForTimeout(2000)
    }

    public async submitAddingBook() {
        await this.submitButton.click();
    }


}