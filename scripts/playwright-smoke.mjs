import { chromium, devices } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const pageUrl = pathToFileURL(resolve(process.cwd(), 'index.html')).href;

const scenarios = [
  {
    name: 'desktop',
    contextOptions: {
      viewport: { width: 1440, height: 1200 },
      locale: 'ru-RU',
    },
  },
  {
    name: 'mobile',
    contextOptions: {
      ...devices['iPhone 13'],
      locale: 'ru-RU',
    },
  },
];

const browser = await chromium.launch({ headless: true });
const results = [];
let hasFailure = false;

for (const scenario of scenarios) {
  const page = await browser.newPage(scenario.contextOptions);
  const pageErrors = [];

  page.on('pageerror', (error) => pageErrors.push(String(error)));

  await page.goto(pageUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const audit = await page.evaluate(() => {
    const images = Array.from(document.images).map((img) => ({
      alt: img.alt,
      src: img.currentSrc || img.src,
      ok: img.complete && img.naturalWidth > 0,
    }));

    return {
      title: document.title,
      sections: document.querySelectorAll('section').length,
      hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      brokenImages: images.filter((img) => !img.ok),
    };
  });

  const scenarioResult = {
    name: scenario.name,
    ...audit,
    pageErrors,
  };

  results.push(scenarioResult);

  if (audit.hasHorizontalOverflow || audit.brokenImages.length > 0 || pageErrors.length > 0) {
    hasFailure = true;
  }

  await page.close();
}

await browser.close();

console.log(JSON.stringify(results, null, 2));

if (hasFailure) {
  process.exit(1);
}
