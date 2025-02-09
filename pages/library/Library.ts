import {Locator, Page} from "@playwright/test";


export class Library {

    readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }


}