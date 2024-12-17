import { test, expect } from '@playwright/test';
import { parallel } from 'radashi';

test.describe('History page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    const email = page.getByTestId('input-email');
    const password = page.getByTestId('input-password');
    const button = page.getByTestId('button-session');

    await email.fill('camilo@mail.com');
    await password.fill('123456');
    await button.click({ force: true });

    const historyIcon = page.getByTestId('link-history');
    await historyIcon.click();

    await expect(page).toHaveURL(`/orders/history`);
    await new Promise(resolve => setTimeout(resolve, 2000));
  });

  test('Should display correctly the orders', async ({ page }) => {
    const registerCard = await page.getByTestId('order-register-card').all();

    expect(registerCard.length).toBeGreaterThanOrEqual(1);
    await parallel(4, registerCard, async (card) => {
      await expect(card).toBeVisible();
    });
  });

  test('Should display the complete card by clicking the chevron icon', async ({ page }) => {
    const registerCard = page.getByTestId('order-register-card').first();
    const chevronIcon = registerCard.getByTestId('icon-chevron');

    await expect(registerCard).toBeVisible();

    await chevronIcon.click();
    await expect(registerCard.getByTestId('hidden-section')).toBeVisible();
  });
});


