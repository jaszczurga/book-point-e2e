import {test as base} from "@playwright/test";
import {BookDetails} from "./bookDetails";

type Fixtures = {
    bookDetailsPage: BookDetails;
}

export const bookDetailsFixture = base.extend<Fixtures>({
    bookDetailsPage: async ({page}, use) => {
        const bookDetailsPage = new BookDetails(page);
        await use(bookDetailsPage);
    }
})