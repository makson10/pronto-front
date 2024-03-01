import test, { expect } from '@playwright/test';

test('go to signup page', async ({ page }) => {
	await page.goto('/signup');
	await expect(page).toHaveURL('/signup');
});

test('fill the form', async ({ page }) => {
	await page.goto('/signup');

	const firstName = 'test';
	const lastName = 'test';
	const email = 'test@test.com';
	const password = 'test.test';

	await page.getByLabel('First Name').fill(firstName);
	await page.getByLabel('Last Name').fill(lastName);
	await page.getByLabel('Email').fill(email);
	await page.getByLabel('Password').fill(password);
	await page.getByRole('button', { name: 'Sign up' }).click();

	page.waitForEvent('requestfinished');
	await expect(page).toHaveURL('/');
});
