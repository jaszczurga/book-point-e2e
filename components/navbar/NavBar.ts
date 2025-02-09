import {Locator, Page} from "@playwright/test";


export class NavBar {

    readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }


}