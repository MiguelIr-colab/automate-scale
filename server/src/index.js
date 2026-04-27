import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import { logger } from './utils/logger.js';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = parseInt(process.env.PORT || '8080', 10);

// Trust proxy (Dokploy / Traefik / Nginx put us behind a reverse proxy)
app.set('trust proxy', 1);

// Security headers
app.use(helmet());

// JSON body parser with a strict limit
app.use(express.json({ limit: '20kb' }));

// CORS
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow same-origin / server-to-server (no Origin header)
      if (!origin) return callback(null, true);
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      logger.warn(`CORS blocked origin: ${origin}`);
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: false,
    maxAge: 86400,
  })
);

// Global lightweight request logger
app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.originalUrl} from ${req.ip}`);
  next();
});

// Health check (Dokploy)
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Global rate limit (defensive). Per-route limits are stricter.
const globalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(globalLimiter);

// Routes
app.use('/contact', contactRouter);

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Centralized error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  logger.error(`Unhandled error: ${err.message}`);
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'Origin not allowed' });
  }
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, '0.0.0.0', () => {
  logger.info(`API listening on port ${PORT} (env: ${process.env.NODE_ENV || 'development'})`);
});
