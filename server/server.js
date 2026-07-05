import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurations
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import mediaRoutes from './routes/media.js';
import contentRoutes from './routes/content.js';

// Load Environment variables
dotenv.config();

// Initialize Mongoose DB Connection
connectDB();

const app = express();

// ES Modules directory helper
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ==========================================
// SECURITY MIDDLEWARES
// ==========================================

// Helmet for secure HTTP headers (adjusted to allow loading local image assets)
app.use(helmet({
  crossOriginResourcePolicy: false
}));

// CORS Configuration (reflects incoming origin to support network IP clients in dev)
app.use(cors({
  origin: true,
  credentials: true
}));

// Rate Limiting (Higher limit in development to prevent lockouts)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: process.env.NODE_ENV === 'production' ? 150 : 10000,
  message: { success: false, message: 'Too many requests from this IP, please try again after 15 minutes.' }
});
app.use('/api/', limiter);

// Request parsing, compression & Logging
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Static directories (Serves locally uploaded files publicly)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ==========================================
// API ROUTING
// ==========================================
app.use('/api/auth', authRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api', contentRoutes); // Mounts /projects, /blogs, /leads, etc. directly

// Default API Test Route
app.get('/', (req, res) => {
  res.json({ success: true, message: 'CoreBuild Enterprise API v1.0 is active.' });
});

// ==========================================
// GLOBAL ERROR HANDLER
// ==========================================
app.use((err, req, res, next) => {
  console.error(`Global Error: ${err.message}`);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error occurred.'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server executing in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
