import { test, expect } from '@playwright/test'

test('My first automation test', async ({ page }) => {

    //or const yesButton = page.getByRole ('button', {name: /yes/i});
    await page.goto('https://liquorland.co.nz/');
    const yesButton = page.getByRole('button', { name: 'Yes', exact: false });
    // Robust approach: Wait for it to be visible, then click
    await yesButton.waitFor({ state: 'visible' });
    //or await page.waitForTimeout(3000);
    await yesButton.click();

    //await page.getByLabel('Close Popup').click();
    //or await page.locator('body').hover();

    const closePopUp = page.getByLabel('Close');
    if (await closePopUp.isVisible()) {
        await closePopUp.click();
    } else {
        console.log('Popup is not visible')
    }

});

