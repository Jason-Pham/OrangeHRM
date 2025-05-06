import { test, expect } from '@playwright/test';
import { ACTION_TIME_OUT } from './helpers/const';
import dotenv from 'dotenv';

dotenv.config();

test('Login', async ({ page }) => {
  await page.goto(process.env.TEST_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);

  // Login
  await page.getByRole('textbox', { name: 'username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.oxd-brand-banner')).toBeVisible({ timeout: ACTION_TIME_OUT });
});
