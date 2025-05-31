import {Locator, Page} from "@playwright/test";
import {TestData} from "../../pages/TestData";


export class NavBar {

    readonly page: Page;
    readonly loginButton: Locator;
    readonly profileButton: Locator;
    readonly libraryButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.loginButton = this.page.getByText("Login");
        this.profileButton = this.page.getByText("Profile");
        this.libraryButton = this.page.getByText("Library");
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

    public async clickLibraryButton() {
        await this.libraryButton.click();
        await this.page.waitForURL("**/library");
        await this.page.waitForLoadState("networkidle");
    }



}