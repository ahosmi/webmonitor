import puppeteer from 'puppeteer';
export const captureScreenshot = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const filePath = `uploads/screenshot-${Date.now()}.png`;
  await page.screenshot({ path: filePath, fullPage: true });
  await browser.close();
  return filePath;
};