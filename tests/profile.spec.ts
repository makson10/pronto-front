import test, { expect } from '@playwright/test';

test('check redirect to profile page', async ({ page, context }) => {
	await context.addCookies([
		{
			name: 'sessionId',
			value: '5xa1MF1fHN5y-xHwtgocBt3wezsc24-H',
			path: '/',
			domain: 'localhost',
		},
	]);

	page.waitForEvent('load');
	page.waitForEvent('domcontentloaded');
	page.waitForEvent('console');
	await expect(page).toHaveURL(/profile\/[0-9]{8}/);
});
