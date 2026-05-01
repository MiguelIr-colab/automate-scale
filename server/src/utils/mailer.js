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

export async function sendContactEmail({
  nombre,
  email,
  mensaje,
  canal,
  tipoNegocio,
  objetivo,
  origin,
  ip,
}) {
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
