import { logger } from './logger.js';

const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

/**
 * Verifies a Google reCAPTCHA token (works for v2 and v3).
 * Returns { success: boolean, score?: number, action?: string, errorCodes?: string[] }
 */
export async function verifyRecaptcha(token, remoteIp) {
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
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const data = await res.json();

    const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.5');
    // For v3, Google returns a score. For v2 there is no score.
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
