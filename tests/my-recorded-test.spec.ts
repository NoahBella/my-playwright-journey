//to run - npx playwright codegen google.com  
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.getByRole('link', { name: 'This does NOT exist' }).click();
    await page.getByRole('searchbox', { name: 'Search Wikipedia' }).fill('Typescript');
    //await page.getByRole('searchbox', { name: 'Search Wikipedia' }).press//('Enter');
    await page.getByRole('link', { name: 'Typescript Topics referred to' }).click();
});