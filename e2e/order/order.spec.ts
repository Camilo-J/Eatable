import { test, expect } from '@playwright/test';

test.describe('Order page', () => {
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

  test('Should appear the products selected in the order page', async ({ page }) => {
    const addButton = page.getByTestId('add-product-button');
    await addButton.click();

    const backIcon = page.getByTestId('back-icon');
    await backIcon.click();

    const orderIcon = page.getByTestId('cart-icon');
    await orderIcon.click();

    const orderCard = page.getByTestId('order-card');
    await expect(orderCard).toBeVisible();
  });

  test('Should update the amount of a product in the order page', async ({ page }) => {
    const addButton = page.getByTestId('add-product-button');
    await addButton.click();

    const backIcon = page.getByTestId('back-icon');
    await backIcon.click();

    const orderIcon = page.getByTestId('cart-icon');
    await orderIcon.click();

    const addIcon = page.getByTestId('increase-icon');
    await addIcon.click();

    const amount = page.getByTestId('amount-product');
    await expect(amount).toHaveText('2');
  });

  test('Should remove a product from the order page', async ({ page }) => {
    const addButton = page.getByTestId('add-product-button');
    await addButton.click();

    const backIcon = page.getByTestId('back-icon');
    await backIcon.click();

    const orderIcon = page.getByTestId('cart-icon');
    await orderIcon.click();

    const removeIcon = page.getByTestId('decrease-icon');
    await removeIcon.click();

    const orderCard = page.getByTestId('order-card');
    await expect(orderCard).not.toBeVisible();
  });

  test('Should add the order and redirect to checkout page', async ({ page }) => {
    const addButton = page.getByTestId('add-product-button');
    await addButton.click();

    const backIcon = page.getByTestId('back-icon');
    await backIcon.click();

    const orderIcon = page.getByTestId('cart-icon');
    await orderIcon.click();

    const checkoutButton = page.getByTestId('checkout-button');
    await checkoutButton.click();

    await expect(page).toHaveURL(`/orders/checkout`);
  });
});


