import {test as base} from "@playwright/test";
import {Library} from "./Library";

type Fixtures = {
    library: Library;
}

export const libraryFixture = base.extend<Fixtures>({
    library: async ({page}, use) => {
        const library = new Library(page);
        await use(library);
    }
})