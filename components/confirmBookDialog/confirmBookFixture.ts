import {test as base} from "@playwright/test";
import {ConfirmBookDialog} from "./ConfirmBookDialog";

type Fixtures = {
    confirmBookDialog: ConfirmBookDialog
}

export const confirmBookDialogFixture = base.extend<Fixtures>({
    confirmBookDialog: async ({page}, use) => {
        const confirmBookDialog = new ConfirmBookDialog(page);
        await use(confirmBookDialog);
    }
})