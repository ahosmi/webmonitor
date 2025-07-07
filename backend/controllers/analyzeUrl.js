import { runLighthouse } from '../utils/lighthouseRunner.js';
import { captureScreenshot } from '../utils/puppeteerCapture.js';
export const analyzeUrl = async (req, res) => {
  const { url } = req.body;
  try {
    const screenshotPath = await captureScreenshot(url);
    const results = await runLighthouse(url);
    res.json({ screenshotPath, ...results });
  } catch (err) {
    res.status(500).json({ error: 'Error analyzing URL', details: err.message });
  }
};