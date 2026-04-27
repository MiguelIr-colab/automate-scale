import nodemailer from 'nodemailer';
import { logger } from './logger.js';

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

export async function sendContactEmail({ nombre, email, mensaje, origin, ip }) {
  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
  const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;

  const safeName = escapeHtml(nombre);
  const safeEmail = escapeHtml(email);
  const safeMsg = escapeHtml(mensaje).replace(/\n/g, '<br>');
  const safeOrigin = escapeHtml(origin || 'unknown');

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Mensaje:</strong><br>${safeMsg}</p>
    <hr>
    <p style="color:#666;font-size:12px">Origen: ${safeOrigin} · IP: ${escapeHtml(ip || '')}</p>
  `;

  const text = `Nuevo mensaje de contacto

Nombre: ${nombre}
Email: ${email}

Mensaje:
${mensaje}

---
Origen: ${origin || 'unknown'}
IP: ${ip || ''}`;

  try {
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
  } catch (err) {
    logger.error(`Email send failed: ${err.message}`);
    throw err;
  }
}
