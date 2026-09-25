import { test, expect } from '@playwright/test';

const BASE = process.env.BASE_URL || 'http://127.0.0.1:8080';

test('critical path: load, reveal, hero, drawer', async ({ page }) => {
  await page.goto(BASE);

  // The preloader must clear itself (fail-safe bounds it at 6s)
  await expect(page.locator('#preloader')).toBeHidden({ timeout: 12000 });

  // Hero content renders with the entrance complete
  await expect(page.locator('.hero-title')).toBeVisible();
  await expect(page.locator('#hero-cta')).toBeVisible();

  // Fonts actually resolve (self-hosted)
  await expect.poll(() => page.evaluate(() => document.fonts.check('1rem "Instrument Serif"')), { timeout: 8000 }).toBe(true);

  // Reservation drawer opens from the hero CTA and closes via keyboard
  await page.click('#hero-cta');
  await expect(page.locator('#drawer-backdrop')).toHaveClass(/active/);
  await expect(page.locator('#drawer-backdrop')).toHaveAttribute('aria-hidden', 'false');

  await page.keyboard.press('Escape');
  await expect(page.locator('#drawer-backdrop')).not.toHaveClass(/active/);
  await expect(page.locator('#drawer-backdrop')).toHaveAttribute('aria-hidden', 'true');
});

test('scroll sections exist and reveal', async ({ page }) => {
  await page.goto(BASE);
  await expect(page.locator('#preloader')).toBeHidden({ timeout: 12000 });

  for (const id of ['material', 'patina', 'craft', 'unboxing', 'atelier', 'faq', 'archive']) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }

  // World clocks tick into a non-empty value
  await expect.poll(() => page.locator('#time-paris').textContent(), { timeout: 5000 }).toBeTruthy();
});
