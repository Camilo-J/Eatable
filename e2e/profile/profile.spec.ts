import { test, expect } from '@playwright/test';

test.describe('Profile page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    const email = page.getByTestId('input-email');
    const password = page.getByTestId('input-password');
    const button = page.getByTestId('button-session');

    await email.fill('camilo@mail.com');
    await password.fill('123456');

    await button.click({ force: true });

    const profileIcon = page.getByTestId('link-profile');
    await profileIcon.click();

    await expect(page).toHaveURL(`/profile`);
  });

  test('Should display the user information', async ({ page }) => {
    const name = page.getByText('Camilo', { exact: true });
    const email = page.getByText(/camilo@mail.com/i);

    await expect(name).toBeVisible();
    await expect(email).toBeVisible();
  });

  test('Should redirect to the edit page', async ({ page }) => {
    const editButton = page.getByText('Change');
    await editButton.click();

    await expect(page).toHaveURL(`/profile/edit`);
  });

  test('Should logout the user', async ({ page }) => {
    const logoutButton = page.getByTestId('logout-button');
    await logoutButton.click();

    await expect(page).toHaveURL(`/`);

    const email = page.getByTestId('input-email');
    const password = page.getByTestId('input-password');

    await expect(email).toBeVisible();
    await expect(password).toBeVisible();
  });
});