const { test, expect } = require('@playwright/test');

async function expectNoHorizontalOverflow(page) {
  const metrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);
}

test.describe('SORT//VIS', () => {
  test('language switch toggles the interface between English and Portuguese', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#btn-run')).toHaveText('Start');
    await expect(page.locator('#ctrl-dataset-label')).toHaveText('Dataset');

    await page.locator('#lang-pt').click();
    await expect(page.locator('#btn-run')).toHaveText('Iniciar');
    await expect(page.locator('#ctrl-dataset-label')).toHaveText('Conjunto');
    await expect(page.locator('#system-monitor-title')).toHaveText('Monitor do Sistema');

    await page.locator('#lang-en').click();
    await expect(page.locator('#btn-run')).toHaveText('Start');
    await expect(page.locator('#ctrl-dataset-label')).toHaveText('Dataset');
  });

  test('desktop layout keeps chart, info panel, and footer in separate regions', async ({ page, isMobile }) => {
    test.skip(isMobile, 'This assertion is only relevant for the desktop project');

    await page.goto('/');

    const canvasWrap = page.locator('#canvas-wrap');
    const infoPanel = page.locator('#info-panel');
    const screenFooter = page.locator('#screen-footer');

    await expect(canvasWrap).toBeVisible();
    await expect(infoPanel).toBeVisible();
    await expect(screenFooter).toBeVisible();

    const [canvasBox, infoBox, footerBox] = await Promise.all([
      canvasWrap.boundingBox(),
      infoPanel.boundingBox(),
      screenFooter.boundingBox(),
    ]);

    expect(canvasBox).not.toBeNull();
    expect(infoBox).not.toBeNull();
    expect(footerBox).not.toBeNull();

    expect(infoBox.x).toBeGreaterThanOrEqual(canvasBox.x + canvasBox.width - 1);
    expect(footerBox.y).toBeGreaterThanOrEqual(Math.max(
      canvasBox.y + canvasBox.height,
      infoBox.y + infoBox.height
    ) - 1);

    await expectNoHorizontalOverflow(page);
  });

  test('desktop smoke test keeps the main controls working', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#c')).toBeVisible();
    await expect(page.locator('#btn-run')).toBeVisible();
    await expect(page.locator('#btn-step')).toBeVisible();
    await expect(page.locator('#algo-select')).toBeVisible();

    await page.getByRole('button', { name: 'Start' }).click();
    await expect(page.locator('#run-state')).toHaveText('RUNNING');
    await expect(page.locator('#btn-pause')).toBeEnabled();

    await page.getByRole('button', { name: 'Pause' }).click();
    await expect(page.locator('#run-state')).toHaveText('PAUSED');

    await page.getByRole('button', { name: 'Halt' }).click();
    await expect(page.locator('#run-state')).toHaveText(/HALTED|COMPLETE/);
  });

  test('mobile layout keeps canvas and overlay panels stacked without overlap', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This assertion is only relevant for the mobile project');

    await page.goto('/');

    const canvasWrap = page.locator('#canvas-wrap');
    const infoPanel = page.locator('#info-panel');
    const screenFooter = page.locator('#screen-footer');
    const buttonRow = page.locator('.button-row');

    await expect(canvasWrap).toBeVisible();
    await expect(infoPanel).toBeVisible();
    await expect(screenFooter).toBeVisible();
    await expect(buttonRow).toBeVisible();

    const [canvasBox, infoBox, footerBox] = await Promise.all([
      canvasWrap.boundingBox(),
      infoPanel.boundingBox(),
      screenFooter.boundingBox(),
    ]);

    expect(canvasBox).not.toBeNull();
    expect(infoBox).not.toBeNull();
    expect(footerBox).not.toBeNull();

    expect(infoBox.y).toBeGreaterThanOrEqual(canvasBox.y + canvasBox.height - 1);
    expect(footerBox.y).toBeGreaterThanOrEqual(infoBox.y + infoBox.height - 1);

    await expectNoHorizontalOverflow(page);
  });

  test('mobile controls remain tappable after stepping through the algorithm', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This assertion is only relevant for the mobile project');

    await page.goto('/');

    await page.getByRole('button', { name: 'Step' }).click();
    await expect(page.locator('#run-state')).toHaveText('PAUSED');
    await expect(page.locator('#btn-run')).toHaveText('Resume');

    await page.getByRole('button', { name: 'Resume' }).click();
    await expect(page.locator('#run-state')).toHaveText('RUNNING');

    await page.getByRole('button', { name: 'Halt' }).click();
    await expect(page.locator('#run-state')).toHaveText(/HALTED|COMPLETE/);
    await expectNoHorizontalOverflow(page);
  });
});
