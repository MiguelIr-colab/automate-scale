import validator from 'validator';

/**
 * Validates contact-form payload.
 * Returns { valid: boolean, errors: string[], data?: { nombre, email, mensaje } }
 */
export function validateContactPayload(body = {}) {
  const errors = [];

  // Honeypot: if a hidden field comes filled, treat as bot
  if (body.website || body.honeypot) {
    return { valid: false, errors: ['bot-detected'] };
  }

  const nombre = typeof body.nombre === 'string' ? body.nombre.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const mensaje = typeof body.mensaje === 'string' ? body.mensaje.trim() : '';

  if (!nombre || nombre.length < 2 || nombre.length > 100) {
    errors.push('nombre');
  }
  if (!email || !validator.isEmail(email) || email.length > 255) {
    errors.push('email');
  }
  if (!mensaje || mensaje.length < 5 || mensaje.length > 2000) {
    errors.push('mensaje');
  }

  // Anti-spam: too many URLs in the message
  const urlMatches = mensaje.match(/https?:\/\//gi) || [];
  if (urlMatches.length > 3) {
    errors.push('too-many-links');
  }

  if (errors.length) return { valid: false, errors };
  return { valid: true, errors: [], data: { nombre, email, mensaje } };
}
