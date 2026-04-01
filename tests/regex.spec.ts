import { test, expect } from '@playwright/test';

test('Learning Regex Locators', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // 1. Match a partial string regardless of case
    // This looks for any text containing "get started" (like the big button)
    const getStartedBtn = page.getByRole('link', { name: /get started/i });

    await getStartedBtn.click();

    // 2. Verify the URL matches a pattern
    // Instead of the full URL, we check if it contains the word 'intro'
    await expect(page).toHaveURL(/.*intro/);
});