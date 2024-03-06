import test, { expect } from '@playwright/test';

test('check redirect to profile page', async ({ page }) => {
	//* test user id
	// const userId = 91538359;
	const userId = 64007411;
	await page.goto('/profile/' + userId);

	await expect(page.getByLabel('profile-icon')).toBeVisible();
	await expect(page.getByLabel('profile-name')).toBeVisible();
	await expect(page.getByLabel('pronto-description')).toBeVisible();
	await expect(page.getByLabel('pronto-address')).toBeVisible();
	await expect(
		page
			.getByLabel('add-to-friend-button')
			.or(page.getByLabel('edit-profile-button'))
	).toBeVisible();
});
