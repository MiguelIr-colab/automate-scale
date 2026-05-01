import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import validator from 'validator';

// ----------------------------------------------------------------------
// Logger
// ----------------------------------------------------------------------
const ts = () => new Date().toISOString();
const logger = {
  info: (m) => console.log(`[${ts()}] [INFO]  ${m}`),
  warn: (m) => console.warn(`[${ts()}] [WARN]  ${m}`),
  error: (m) => console.error(`[${ts()}] [ERROR] ${m}`),
};

// ----------------------------------------------------------------------
// reCAPTCHA verification (works for v2 and v3)
// ----------------------------------------------------------------------
const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

async function verifyRecaptcha(token, remoteIp) {
  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) {
    logger.error('RECAPTCHA_SECRET is not configured');
    return { success: false, errorCodes: ['missing-secret'] };
  }
  if (!token || typeof token !== 'string') {
    return { success: false, errorCodes: ['missing-token'] };
  }

  const params = new URLSearchParams();
  params.append('secret', secret);
  params.append('response', token);
  if (remoteIp) params.append('remoteip', remoteIp);

  try {
    const res = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const data = await res.json();
    const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.5');

    if (data.success && typeof data.score === 'number' && data.score < minScore) {
      logger.warn(`reCAPTCHA score too low: ${data.score}`);
      return { success: false, score: data.score, errorCodes: ['low-score'] };
    }

    return {
      success: !!data.success,
      score: data.score,
      action: data.action,
      errorCodes: data['error-codes'] || [],
    };
  } catch (err) {
    logger.error(`reCAPTCHA verification failed: ${err.message}`);
    return { success: false, errorCodes: ['network-error'] };
  }
}

// ----------------------------------------------------------------------
// Payload validation
// ----------------------------------------------------------------------
function validateContactPayload(body = {}) {
  const errors = [];

  // Honeypot
  if (body.website || body.honeypot) {
    return { valid: false, errors: ['bot-detected'] };
  }

  const str = (v, max) => {
    if (typeof v !== 'string') return '';
    const t = v.trim();
    return max ? t.slice(0, max) : t;
  };

  const nombre = str(body.nombre, 100);
  const email = str(body.email, 255);
  const mensaje = str(body.mensaje, 2000);
  const canal = str(body.canal, 50);
  const tipoNegocio = str(body.tipoNegocio, 100);
  const objetivo = str(body.objetivo, 50);

  if (!nombre || nombre.length < 2) errors.push('nombre');
  if (!email || !validator.isEmail(email)) errors.push('email');
  if (!mensaje || mensaje.length < 5) errors.push('mensaje');

  if (canal && !['whatsapp', 'instagram', 'both'].includes(canal)) {
    errors.push('canal');
  }
  if (objetivo && !['leads', 'appointments', 'support', 'other'].includes(objetivo)) {
    errors.push('objetivo');
  }

  const urlMatches = mensaje.match(/https?:\/\//gi) || [];
  if (urlMatches.length > 3) errors.push('too-many-links');

  if (errors.length) return { valid: false, errors };
  return {
    valid: true,
    errors: [],
    data: { nombre, email, mensaje, canal, tipoNegocio, objetivo },
  };
}

// ----------------------------------------------------------------------
// Mailer
// ----------------------------------------------------------------------
let transporter;
function getTransporter() {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '465', 10),
    secure: String(process.env.EMAIL_SECURE || 'true') === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  return transporter;
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function sendContactEmail({ nombre, email, mensaje, canal, tipoNegocio, objetivo, origin, ip }) {
  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
  const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;

  const safe = {
    nombre: escapeHtml(nombre),
    email: escapeHtml(email),
    mensaje: escapeHtml(mensaje).replace(/\n/g, '<br>'),
    canal: escapeHtml(canal || '-'),
    tipoNegocio: escapeHtml(tipoNegocio || '-'),
    objetivo: escapeHtml(objetivo || '-'),
    origin: escapeHtml(origin || 'unknown'),
    ip: escapeHtml(ip || ''),
  };

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${safe.nombre}</p>
    <p><strong>Email:</strong> ${safe.email}</p>
    <p><strong>Canal:</strong> ${safe.canal}</p>
    <p><strong>Tipo de negocio:</strong> ${safe.tipoNegocio}</p>
    <p><strong>Objetivo:</strong> ${safe.objetivo}</p>
    <p><strong>Mensaje:</strong><br>${safe.mensaje}</p>
    <hr>
    <p style="color:#666;font-size:12px">Origen: ${safe.origin} · IP: ${safe.ip}</p>
  `;

  const text = `Nuevo mensaje de contacto

Nombre: ${nombre}
Email: ${email}
Canal: ${canal || '-'}
Tipo de negocio: ${tipoNegocio || '-'}
Objetivo: ${objetivo || '-'}

Mensaje:
${mensaje}

---
Origen: ${origin || 'unknown'}
IP: ${ip || ''}`;

  const info = await getTransporter().sendMail({
    from,
    to,
    replyTo: email,
    subject: `Nuevo contacto desde ${origin || 'web'} – ${nombre}`,
    text,
    html,
  });
  logger.info(`Email sent: ${info.messageId}`);
  return { ok: true, id: info.messageId };
}

// ----------------------------------------------------------------------
// Express app
// ----------------------------------------------------------------------
const app = express();
const PORT = parseInt(process.env.PORT || '8080', 10);

app.set('trust proxy', 1);
app.use(helmet());
app.use(express.json({ limit: '20kb' }));

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
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

app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.originalUrl} from ${req.ip}`);
  next();
});

// Health
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Global rate limit
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// Strict limit on /contact
const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
  max: parseInt(process.env.RATE_LIMIT_MAX || '5', 10),
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas solicitudes. Inténtalo más tarde.' },
});

app.post('/contact', contactLimiter, async (req, res) => {
  try {
    const { valid, errors, data } = validateContactPayload(req.body);
    if (!valid) {
      logger.warn(`Invalid contact payload: ${errors.join(',')}`);
      return res.status(400).json({ error: 'Datos inválidos', fields: errors });
    }

    const token = req.body['g-recaptcha-response'] || req.body.recaptchaToken;
    const captcha = await verifyRecaptcha(token, req.ip);
    if (!captcha.success) {
      logger.warn(`reCAPTCHA failed: ${(captcha.errorCodes || []).join(',')}`);
      return res.status(400).json({ error: 'reCAPTCHA inválido' });
    }

    await sendContactEmail({
      ...data,
      origin: req.headers.origin || req.headers.referer,
      ip: req.ip,
    });

    return res.json({ ok: true, message: 'Mensaje enviado correctamente' });
  } catch (err) {
    logger.error(`POST /contact error: ${err.message}`);
    return res.status(500).json({ error: 'No se pudo enviar el mensaje' });
  }
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
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
