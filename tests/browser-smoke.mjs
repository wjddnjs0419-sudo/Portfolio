import { chromium } from 'playwright';

const BASE_URL = process.env.PORTFOLIO_URL || 'http://127.0.0.1:4173/';
const viewports = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

const browser = await chromium.launch({ headless: true });

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    const runtimeErrors = [];

    page.on('pageerror', (error) => runtimeErrors.push(`pageerror: ${error.message}`));
    page.on('console', (message) => {
      if (message.type() === 'error') runtimeErrors.push(`console: ${message.text()}`);
    });

    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 60_000 });
    await page.waitForSelector('#top h1', { timeout: 30_000 });
    await page.waitForTimeout(1_000);

    const state = await page.evaluate(() => ({
      width: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      hero: document.querySelector('#top h1')?.textContent?.trim() || '',
      hasProofStrip: Boolean(document.querySelector('.proof-strip')),
      hasProjectEditorial: Boolean(document.querySelector('.project-editorial')),
      hasFeaturedExperience: Boolean(document.querySelector('.featured-experience')),
      hasCapabilities: Boolean(document.querySelector('.capability-pillars')),
      hasClosingCta: Boolean(document.querySelector('.closing-cta')),
      brokenImages: [...document.images]
        .filter((image) => image.complete && image.naturalWidth === 0)
        .map((image) => image.getAttribute('src')),
      videoCount: document.querySelectorAll('video').length,
    }));

    if (!state.hero.includes('문제를 발견하고')) {
      throw new Error(`${viewport.name}: Korean hero did not render: ${state.hero}`);
    }
    if (state.scrollWidth > state.width + 2) {
      throw new Error(`${viewport.name}: horizontal overflow ${state.scrollWidth}px > ${state.width}px`);
    }
    if (!state.hasProofStrip || !state.hasProjectEditorial || !state.hasFeaturedExperience || !state.hasCapabilities || !state.hasClosingCta) {
      throw new Error(`${viewport.name}: one or more redesigned sections did not render`);
    }
    if (state.brokenImages.length) {
      throw new Error(`${viewport.name}: broken images: ${state.brokenImages.join(', ')}`);
    }
    if (state.videoCount < 1) {
      throw new Error(`${viewport.name}: Date-navi video element did not render`);
    }
    if (runtimeErrors.length) {
      throw new Error(`${viewport.name}: runtime errors: ${runtimeErrors.join(' | ')}`);
    }

    if (viewport.width < 768) {
      await page.getByRole('button', { name: '메뉴 열기' }).click();
    }

    const enButton = page.getByRole('button', { name: 'EN' }).filter({ visible: true }).first();
    await enButton.click();
    await page.waitForFunction(() => document.documentElement.lang === 'en');
    const englishHero = await page.locator('#top h1').innerText();
    if (!englishHero.includes('I find problems')) {
      throw new Error(`${viewport.name}: English toggle did not update hero: ${englishHero}`);
    }

    const koButton = page.getByRole('button', { name: 'KO' }).filter({ visible: true }).first();
    await koButton.click();
    await page.waitForFunction(() => document.documentElement.lang === 'ko');

    if (viewport.width < 768) {
      await page.getByRole('button', { name: '메뉴 닫기' }).click();
    }

    await page.evaluate(() => {
      document.documentElement.style.scrollBehavior = 'auto';
    });
    const revealElements = page.locator('.reveal');
    const revealCount = await revealElements.count();
    for (let index = 0; index < revealCount; index += 1) {
      await revealElements.nth(index).scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(220);

    const unrevealedCount = await page.locator('.reveal:not(.in)').count();
    if (unrevealedCount > 0) {
      throw new Error(`${viewport.name}: ${unrevealedCount} reveal elements never became visible while scrolling`);
    }

    await page.screenshot({
      path: `artifacts/portfolio-${viewport.name}.png`,
      fullPage: true,
    });

    await page.close();
  }

  console.log('browser smoke checks passed');
} finally {
  await browser.close();
}
