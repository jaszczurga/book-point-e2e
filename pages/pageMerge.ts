import { mergeTests} from "@playwright/test";
import { homeFixture } from "./home/homeFixture";
import { libraryFixture } from "./library/libraryFixture";
import { profileFixture } from "./profile/profileFixture";
import { navBarFixture } from "../components/navbar/navBarFixture";
import {addBookFixture} from "./addBook/addBookFixture";
import {bookDetailsFixture} from "./bookDetails/bookDetailsFixture";
import {confirmBookDialogFixture} from "../components/confirmBookDialog/confirmBookFixture";

export const baseMerge = mergeTests(
    homeFixture,
    libraryFixture,
    profileFixture,
    navBarFixture,
    addBookFixture,
    bookDetailsFixture,
    confirmBookDialogFixture,
);
export * from "@playwright/test";
