import test, {
    BrowserContext,
    Locator,
    Page,
    test as baseTest,
    expect,
} from '@playwright/test';
import { ACTION_TIME_OUT } from './const';

export const isElementVisible = async (page: Page, selector: string) => {
    await page
        .waitForSelector(selector, { state: 'visible', timeout: ACTION_TIME_OUT })
        .catch(() => { return false });
    return true;
};