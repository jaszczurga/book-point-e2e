import {Locator, Page} from "@playwright/test";


export class Profile {

    readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }


}