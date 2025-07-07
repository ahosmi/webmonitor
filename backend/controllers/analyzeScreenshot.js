import { analyzeImageWithPrompt } from '../utils/replicateClient.js';
import cloudinary from '../utils/cloudinary.js';
import fs from 'fs';
import path from 'path';

export const analyzeScreenshot = async (req, res) => {
  try {
    const file = req.files?.screenshot;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    const filePath = path.join('uploads', file.name);
    await file.mv(filePath);

    
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      folder: 'webmonitor',
    });
    const imageUrl = uploadResult.secure_url;

    
    const prompt = `You are an expert UX and accessibility reviewer. Analyze the given website UI screenshot for: - Visual design flaws (alignment, spacing, color contrast) - Usability issues (button clarity, navigation, responsiveness) - Accessibility concerns (text readability, alt text, color usage) - Suggestions for improving overall user experience. Be specific and structured in your response.`;
    const feedback = await analyzeImageWithPrompt(imageUrl, prompt);

    fs.unlinkSync(filePath); 

    res.json({ feedback }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error analyzing screenshot', details: err.message });
  }
};
