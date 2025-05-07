import { test, expect } from '@playwright/test';
import { ACTION_TIME_OUT } from './helpers/const';
import path from 'path';
const authFile = path.join(__dirname, '../UI/config/.auth/user.json');
import dotenv from 'dotenv';

dotenv.config();

test('Login', async ({ page }) => {
  await page.goto(process.env.TEST_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(process.env.MAIN_PAGE_TITLE);

  // Login
  await page.getByRole('textbox', { name: 'username' }).fill(process.env.ADMIN_USERNAME);
  await page.getByRole('textbox', { name: 'password' }).fill(process.env.ADMIN_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.oxd-brand-banner')).toBeVisible({ timeout: ACTION_TIME_OUT });

  await page.context().storageState({ path: authFile });
});
