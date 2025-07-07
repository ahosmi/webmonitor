import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import urlRoutes from './routes/urlRoutes.js';
import screenshotRoutes from './routes/screenshotRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use('/api/url', urlRoutes);
app.use('/api/screenshot', screenshotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));