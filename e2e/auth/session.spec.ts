import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the loading page correctly', async ({ page }) => {
    const loginButton = page.getByText('Food for Everyone');
    const image = page.getByAltText('logo-title');

    await expect(loginButton).toBeVisible();
    await expect(image).toBeVisible();
  });

  test('should render the login page correctly', async ({ page }) => {
    const emailInput = page.getByTestId('input-email');
    const passwordInput = page.getByTestId('input-password');

    await expect(passwordInput).toBeVisible();
    await expect(emailInput).toBeVisible();
  });

  test('should log in correctly', async ({ page }) => {
    const emailInput = page.getByTestId('input-email');
    const passwordInput = page.getByTestId('input-password');
    const button = page.getByTestId('button-session');

    await emailInput.fill('camilo@mail.com');
    await passwordInput.fill('123456');
    await button.click({ force: true });

    await expect(page).toHaveURL(`/products`);
  });
});


