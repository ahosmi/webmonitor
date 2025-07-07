import express from 'express';
import { analyzeScreenshot } from '../controllers/analyzeScreenshot.js';
const router = express.Router();
router.post('/', analyzeScreenshot);
export default router;