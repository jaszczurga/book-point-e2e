import { mergeTests} from "@playwright/test";
import { homeFixture } from "./home/homeFixture";
import { libraryFixture } from "./library/libraryFixture";
import { profileFixture } from "./profile/profileFixture";
import { navBarFixture } from "../components/navbar/navBarFixture";
import {addBookFixture} from "./addBook/addBookFixture";
import {bookDetailsFixture} from "./bookDetails/bookDetailsFixture";

export const baseMerge = mergeTests(
    homeFixture,
    libraryFixture,
    profileFixture,
    navBarFixture,
    addBookFixture,
    bookDetailsFixture
);
export * from "@playwright/test";
