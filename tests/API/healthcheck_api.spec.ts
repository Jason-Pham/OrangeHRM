import { request, APIResponse } from 'playwright';
import test, { expect } from '@playwright/test';

[
  `https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages`,
].forEach(url => {
  test(`Verify the availability of healthcheck services following url ${url}`, async ({ }) => {
    const apiContext = await request.newContext();
    const response: APIResponse = await apiContext.get(url);
    expect(response.status()).toEqual(200);
  });
});
