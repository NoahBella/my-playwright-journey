import { test, expect } from '@playwright/test'

test('My first automation test', async ({ page }) => {
    const yesButton = page.getByRole('button', { name: 'Yes', exact: false });

    await page.goto('https://liquorland.co.nz/');
    // Robust approach: Wait for it to be visible, then click
    await yesButton.waitFor({ state: 'visible' });
    await yesButton.click();

    await page.getByLabel('Close Popup').click();
    // await page.locator('.popup-overlay').hover(); <--- unable to find the locator so how to find it? 



});

