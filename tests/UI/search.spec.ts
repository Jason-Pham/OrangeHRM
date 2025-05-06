import { test, expect } from '@playwright/test';
import { ACTION_TIME_OUT } from './helpers/const';
import dotenv from 'dotenv';

dotenv.config();

test('Dashboard', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.locator('.oxd-brand-banner')).toBeVisible({ timeout: ACTION_TIME_OUT });
});
