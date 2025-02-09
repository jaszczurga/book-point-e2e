import {Locator, Page} from "@playwright/test";
import {TestData} from "../../pages/TestData";


export class NavBar {

    readonly page: Page;
    readonly loginButton: Locator;
    readonly profileButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.loginButton = this.page.getByText("Login");
        this.profileButton = this.page.getByText("Profile");
    }


    public async loginToApp() {
        await this.loginButton.click();
        await this.page.locator("#username").fill(TestData.userEmail);
        await this.page.locator("#password").fill(TestData.userPassword);
        await this.page.getByRole("button", {name: "Sign In"}).click();
    }

    public async clickProfileButton() {
        await this.profileButton.click();
    }


}