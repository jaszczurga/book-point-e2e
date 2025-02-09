import {test as base} from "@playwright/test";
import {Profile} from "./Profile";

type Fixtures = {
    profile: Profile;
}

export const profileFixture = base.extend<Fixtures>({
    profile: async ({page}, use) => {
        const profile = new Profile(page);
        await use(profile);
    }
})