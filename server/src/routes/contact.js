import { Router } from 'express';
import rateLimit from 'express-rate-limit';

import { logger } from '../utils/logger.js';
import { verifyRecaptcha } from '../utils/recaptcha.js';
import { validateContactPayload } from '../utils/validate.js';
import { sendContactEmail } from '../utils/mailer.js';

const router = Router();

// Strict rate limit for the contact endpoint
const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 min
  max: parseInt(process.env.RATE_LIMIT_MAX || '5', 10),
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas solicitudes. Inténtalo más tarde.' },
});

router.post('/', contactLimiter, async (req, res) => {
  try {
    // 1. Validate payload
    const { valid, errors, data } = validateContactPayload(req.body);
    if (!valid) {
      logger.warn(`Invalid contact payload: ${errors.join(',')}`);
      return res.status(400).json({ error: 'Datos inválidos', fields: errors });
    }

    // 2. Verify reCAPTCHA
    const token = req.body['g-recaptcha-response'] || req.body.recaptchaToken;
    const captcha = await verifyRecaptcha(token, req.ip);
    if (!captcha.success) {
      logger.warn(`reCAPTCHA failed: ${(captcha.errorCodes || []).join(',')}`);
      return res.status(400).json({ error: 'reCAPTCHA inválido' });
    }

    // 3. Send email
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

export default router;
