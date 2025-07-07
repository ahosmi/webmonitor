import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';
export const runLighthouse = async (url) => {
  const chrome = await launch({ chromeFlags: ['--headless'] });
  const options = { logLevel: 'info', output: 'json', port: chrome.port };
  const runnerResult = await lighthouse(url, options);
  const { performance, accessibility, seo, 'best-practices': bestPractices } = runnerResult.lhr.categories;
  await chrome.kill();
  return {
    performance: performance.score * 100,
    accessibility: accessibility.score * 100,
    seo: seo.score * 100,
    bestPractices: bestPractices.score * 100
  };
};