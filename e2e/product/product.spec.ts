import { test, expect } from '@playwright/test';
import { parallel } from 'radashi';

test.describe('Product page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    const email = page.getByTestId('input-email');
    const password = page.getByTestId('input-password');
    const button = page.getByTestId('button-session');

    await email.fill('camilo@mail.com');
    await password.fill('123456');
    await button.click({ force: true });

    await expect(page).toHaveURL(`/products`);
  });

  test('should render the products correctly', async ({ page }) => {
    const productCards = await page.getByTestId('product-card').all();
    await parallel(3, productCards, async (product) => {
      await expect(product).toBeVisible();
    });
  });

  test('Should display a message when the product is selected', async ({ page }) => {
    const card = page.getByTestId('product-card').first();
    await card.click();

    const addButton = page.getByTestId('add-product-button');
    await addButton.click();

    await expect(addButton).toHaveText('Product in Cart');
  });
});


