import { test, expect } from '@playwright/test';
import { ACTION_TIME_OUT } from './helpers/const';
import dotenv from 'dotenv';

dotenv.config();

test('Search', async ({ page }) => {
  await page.goto('/');

  const inputText = process.env.SEARCH_TEST;

  await page.getByRole('textbox', { name: 'Search' }).fill(inputText);



  // Locator for the elements containing the menu item text
  // Based on the HTML structure, this locator should find the 6 menu item text spans.
  const menuItemsTextLocator = page.locator('.oxd-main-menu-item');

  // Get the text content of all matching elements (Expected to be 6)
  const allTexts = await menuItemsTextLocator.allTextContents();

  // *** We are now validating ALL items found by the locator, so we remove .slice(0, -1) ***
  const menuItemsToValidate = allTexts;

  const lowerCaseInputText = inputText.toLowerCase();

  const failingItems: string[] = [];

  // Iterate through ALL items found by the locator
  for (const text of menuItemsToValidate) {
    // Perform the case-insensitive check: does the text *include* the input text?
    if (!text.trim().toLowerCase().includes(lowerCaseInputText)) {
      // If the text does NOT include the input text, add the original (trimmed) text to the failingItems array
      failingItems.push(text.trim());
    }
  }

  // Check if any items failed the comparison
  if (failingItems.length > 0) {
    // Print the failed items to the console
    console.error(`\n❌ The following menu item(s) did NOT contain "${inputText}" (case-insensitive):`);
    failingItems.forEach(item => console.error(`- ${item}`));
    console.error(`\n`);

    // Fail the test explicitly with a descriptive error message
    throw new Error(`Assertion failed: Found ${failingItems.length} menu item(s) that did not contain the expected text "${inputText}".`);

  } else {
    // If the failingItems array is empty, all validated items contained the text
    // Use allTexts.length here to report the actual number of items found and checked
    console.log(`✅ Successfully verified that all ${allTexts.length} menu items contain "${inputText}" (case-insensitive).`);
  }

});
