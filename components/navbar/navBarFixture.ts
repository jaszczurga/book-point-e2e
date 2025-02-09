import {test as base} from "@playwright/test";
import {NavBar} from "./NavBar";

type Fixtures = {
    navBar: NavBar;
}

export const navBarFixture = base.extend<Fixtures>({
    navBar: async ({page}, use) => {
        const navBar = new NavBar(page);
        await use(navBar);
    }
})