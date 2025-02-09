import {Locator, Page} from "@playwright/test";


export class ConfirmBookDialog {

    readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }


}