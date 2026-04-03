import { test, expect } from '@playwright/test'

test('Age Gate & Newsletter Pop-Up', async ({ page }) => {

    //or const yesButton = page.getByRole ('button', {name: /yes/i});
    await page.goto('https://liquorland.co.nz/');
    const yesButton = page.getByRole('button', { name: 'Yes', exact: false });
    // Robust approach: Wait for it to be visible, then click
    //await yesButton.waitFor({ state: 'visible' }); *This may be useful if no other pop-ups*
    await page.waitForTimeout(5000);
    await yesButton.click();

    //await page.getByLabel('Close Popup').click();
    //or await page.locator('body').hover();

    const closePopUp = page.getByLabel('Close');
    if (await closePopUp.isVisible()) {
        await closePopUp.click();
    } else {
        console.log('Popup is not visible')
    };

    //await page.waitForTimeout(4000);
    await page.waitForLoadState('networkidle');

    await page.getByPlaceholder(/search/i).fill('Poco Vino');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(4000);

});

