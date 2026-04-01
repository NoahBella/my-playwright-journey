import { test, expect } from '@playwright/test'

test('My first automation test', async ({ page }) => {
    await page.goto('https://www.liquorland.co.nz');
    //Below seems to be incorrect! 
    await page.getByPlaceholder('First Name *').click();
    await page.getByRole('button', { name: 'Close popup' }).click();
    await page.getByRole('button', { name: 'Login to your account' }).click();
    await page.getByRole('textbox', { name: 'Email Address Email', exact: true }).click();
    await page.getByRole('textbox', { name: 'Email Address Email', exact: true }).fill('vickij@liquorland.co.nz');
    await page.getByRole('textbox', { name: 'Email Address Email', exact: true }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Noahbella2013*');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');




});

