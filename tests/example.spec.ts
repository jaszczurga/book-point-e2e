import {baseMerge as test} from "../pages/pageMerge";
import {expect} from "@playwright/test";

test('@TC1 As Logged is user add book to the library', async ({
   home,
   navBar,
   profile,
   addBookPage,
   page}) => {
    await home.clickContinueButton();
    await navBar.loginToApp();
    await navBar.clickProfileButton();
    await profile.clickAddMoreBooksButton();
    await addBookPage.clickGoogleBooksSearchButton();
    await addBookPage.pickFirstVisibleBook();
    await addBookPage.submitAddingBook();
    await expect(page).toHaveURL(/library/);
});

test('@TC2 As not logged in user verify available books filter ', async({home,page,navBar,profile,library}) => {
    await home.clickContinueButton();
    await library.clickShowAvailableButton();

    await expect(page).toHaveURL(/library?available=true/);
})


test('@TC3 @VRT Verify add book form', async({home,page,navBar,profile,library}) => {
    await home.clickContinueButton();
    await navBar.loginToApp();
    await navBar.clickProfileButton();
    await profile.clickAddMoreBooksButton();

    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveScreenshot();
})

test('@TC4 @VRT Verify loginPage', async({home,page,navBar,library}) => {
    await home.clickContinueButton();
    await navBar.loginToApp();
    await navBar.clickProfileButton();

    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveScreenshot();
})

test('@TC5 @VRT Verify homePage', async({page,navBar,library}) => {
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveScreenshot();
})

test('@TC6 @VRT Verify library page', async({page,navBar,library}) => {
    await navBar.clickLibraryButton();
    await library.checkFilterTestTypeLibrary();

    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveScreenshot();
})

