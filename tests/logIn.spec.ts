import { test, expect } from '@playwright/test';

test('go to login page', async ({ page }) => {
	await page.goto('/login');
	await expect(page).toHaveURL('/login');
});

test('fill the form', async ({ page }) => {
	await page.goto('/login');

	//* Incorrect data
	// const email = 'test' + Math.floor(Math.random() * 10000000) + '@test.com';
	// const password = Math.floor(Math.random() * 10000000) + '.';

	//* Correct data
	const email = 'test@test.com';
	const password = 'test.test';

	await page.getByLabel('Email').fill(email);
	await page.getByLabel('Password').fill(password);
	await page.getByRole('button', { name: 'Log In' }).click();

	page.waitForEvent('requestfinished');
	await expect(page).toHaveURL('/');
});
