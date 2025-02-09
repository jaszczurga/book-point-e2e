import {baseMerge as test} from "../pages/pageMerge";

test('test adding book using google api', async ({home,navBar,profile,addBookPage,page}) => {
    await home.clickContinueButton();
    await navBar.loginToApp();
    await navBar.clickProfileButton();
    await profile.clickAddMoreBooksButton();
    await addBookPage.clickGoogleBooksSearchButton();
    await addBookPage.pickFirstVisibleBook();
    await addBookPage.submitAddingBook();
    await page.pause();
});