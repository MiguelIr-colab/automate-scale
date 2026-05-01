import validator from 'validator';

/**
 * Validates contact-form payload.
 * Returns { valid: boolean, errors: string[], data?: {...} }
 */
export function validateContactPayload(body = {}) {
  const errors = [];

  // Honeypot: if a hidden field comes filled, treat as bot
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

  // Optional whitelist checks (only if provided)
  if (canal && !['whatsapp', 'instagram', 'both'].includes(canal)) {
    errors.push('canal');
  }
  if (objetivo && !['leads', 'appointments', 'support', 'other'].includes(objetivo)) {
    errors.push('objetivo');
  }

  // Anti-spam: too many URLs in the message
  const urlMatches = mensaje.match(/https?:\/\//gi) || [];
  if (urlMatches.length > 3) errors.push('too-many-links');

  if (errors.length) return { valid: false, errors };
  return {
    valid: true,
    errors: [],
    data: { nombre, email, mensaje, canal, tipoNegocio, objetivo },
  };
}
