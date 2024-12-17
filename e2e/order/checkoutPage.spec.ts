import { test, expect } from '@playwright/test';

test.describe('Checkout page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    const email = page.getByTestId('input-email');
    const password = page.getByTestId('input-password');
    const button = page.getByTestId('button-session');

    await email.fill('camilo@mail.com');
    await password.fill('123456');
    await button.click({ force: true });

    await expect(page).toHaveURL(`/products`);

    const card = page.getByTestId('product-card').first();
    await card.click();
  });

  test('Should display correctly the history page', async ({ page }) => {
    const addButton = page.getByTestId('add-product-button');
    await addButton.click();

    const backIcon = page.getByTestId('back-icon');
    await backIcon.click();

    const orderIcon = page.getByTestId('cart-icon');
    await orderIcon.click();

    const orderCard = page.getByTestId('order-card');
    await expect(orderCard).toBeVisible();
  });

  test('Should change the user information', async ({ page }) => {
    const addButton = page.getByTestId('add-product-button');
    await addButton.click();

    const backIcon = page.getByTestId('back-icon');
    await backIcon.click();

    const orderIcon = page.getByTestId('cart-icon');
    await orderIcon.click();

    const checkoutButton = page.getByTestId('checkout-button');
    await checkoutButton.click();

    const changeButton = page.getByTestId('change-button');
    await changeButton.click();

    await expect(page).toHaveURL(`/profile/edit`);
  });

  test('Should update the user Information', async ({ page }) => {
    const addButton = page.getByTestId('add-product-button');
    await addButton.click();

    const backIcon = page.getByTestId('back-icon');
    await backIcon.click();

    const orderIcon = page.getByTestId('cart-icon');
    await orderIcon.click();

    const checkoutButton = page.getByTestId('checkout-button');
    await checkoutButton.click();

    const changeButton = page.getByTestId('change-button');
    await changeButton.click();

    const name = page.getByTestId('input-name');
    const phone = page.getByTestId('input-phone');
    const address = page.getByTestId('input-address');
    const button = page.getByTestId('update-button');

    await name.clear();
    await phone.clear();
    await address.clear();

    await name.fill('Camilo');
    await phone.fill('123456');
    await address.fill('av 123');

    await button.click();

    await expect(name).toHaveValue('Camilo');
    await expect(phone).toHaveValue('123456');
    await expect(address).toHaveValue('av 123');
  });
});


