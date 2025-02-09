import {baseMerge as test} from "../pages/pageMerge";

test('@test go to library', async ({home,page}) => {
    await home.clickContinueButton();
    await page.pause();
});