import {test as base} from "@playwright/test";
import {Home} from "./home";

type Fixtures = {
    home: Home;
}

export const homeFixture = base.extend<Fixtures>({
    home: async ({page}, use) => {
        await page.goto("/");
        const home = new Home(page);
        await use(home);
    }
})