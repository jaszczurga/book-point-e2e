import {Locator, Page} from "@playwright/test";


export class Library {

    readonly page: Page;
    readonly bookCard: Locator;
    readonly filterOpenButton: Locator;
    readonly showAvailableButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.bookCard = this.page.getByTestId("book-card");
        this.filterOpenButton = this.page.getByTestId("filter-open-button");
        this.showAvailableButton = this.page.getByTestId("show-available-cards");
    }

    public async clickBookCard() {
        await this.bookCard.nth(0).click();
    }

    public async clickFilterOpenButton() {
        await this.filterOpenButton.nth(0).click();
    }

    public async clickShowAvailableButton() {
        await this.showAvailableButton.click();
    }
}