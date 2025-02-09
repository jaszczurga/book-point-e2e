import {test as base} from "@playwright/test";
import {AddBook} from "./AddBook";

type Fixtures = {
    addBookPage: AddBook;
}

export const addBookFixture = base.extend<Fixtures>({
    addBookPage: async ({page}, use) => {
        const addBookPage = new AddBook(page);
        await use(addBookPage);
    }
})