import { test, expect } from '@playwright/test'

test('My first automation test', async ({ page }) => {
  await page.goto('https://www.google.com');


  // We use 'optional' logic here. If the button is there, click it.
  const acceptButton = page.getByRole('button', { name: 'Accept all' });
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }
  // We use 'combobox' because that is the technical role of a search input
  await page.getByRole('combobox').fill('Playwright');
  await page.keyboard.press('Enter')
  await expect(page).toHaveTitle(/Playwright/);



});