# iAssistant Bots – Backend API

Express server for the contact form of **iassistant-bots.ch** and **swissicoupons.com**.
Designed to be deployed on a VPS via **Dokploy** (Docker).

## Features

- `POST /contact` → validates payload + reCAPTCHA + sends email via SMTP
- `GET /health` → healthcheck for Dokploy/Traefik
- Google reCAPTCHA v2/v3 verification (server-side)
- Strict rate limiting (5 requests / 15 min per IP by default)
- CORS whitelist (only iassistant-bots.ch & swissicoupons.com)
- Helmet security headers
- Honeypot + basic anti-spam validation
- Clean error handling and structured logs

## Local development

```bash
cd server
cp .env.example .env   # fill in your values
npm install
npm run dev
```

Server listens on `http://localhost:8080`.

## API

### `POST /contact`

Body (JSON):
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "mensaje": "Hola, quería información...",
  "g-recaptcha-response": "TOKEN_FROM_GOOGLE"
}
```

Optional honeypot fields `website` / `honeypot` must be empty.

Responses:
- `200 { ok: true, message: "Mensaje enviado correctamente" }`
- `400 { error: "Datos inválidos", fields: [...] }`
- `400 { error: "reCAPTCHA inválido" }`
- `429 { error: "Demasiadas solicitudes..." }`
- `500 { error: "No se pudo enviar el mensaje" }`

## Frontend integration (reCAPTCHA v3 example)

Site key: `6LfSMdIsAAAAALqAv_dNRvuYzzIARX61C-Ue63pN`

```html
<script src="https://www.google.com/recaptcha/api.js?render=6LfSMdIsAAAAALqAv_dNRvuYzzIARX61C-Ue63pN"></script>
```

```js
const token = await grecaptcha.execute(
  '6LfSMdIsAAAAALqAv_dNRvuYzzIARX61C-Ue63pN',
  { action: 'contact' }
);

await fetch('https://api.iassistant-bots.ch/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre, email, mensaje,
    'g-recaptcha-response': token,
  }),
});
```

## Deploy on Dokploy

1. Create a new **Application** in Dokploy.
2. Source: this repo, **Build path:** `server/` (or the subfolder containing the Dockerfile).
3. Build type: **Dockerfile**.
4. Domain: `api.iassistant-bots.ch` → port `8080`.
5. Environment variables: copy from `.env.example` and fill them in.
6. Healthcheck path: `/health`.
7. Deploy.

### Required environment variables

See [`.env.example`](./.env.example):

| Var | Purpose |
|---|---|
| `PORT` | Port to listen on (default `8080`) |
| `ALLOWED_ORIGINS` | Comma-separated allowed origins for CORS |
| `RECAPTCHA_SECRET` | Google reCAPTCHA secret (server) |
| `RECAPTCHA_MIN_SCORE` | Min v3 score (default `0.5`) |
| `EMAIL_HOST` / `EMAIL_PORT` / `EMAIL_SECURE` | SMTP server config |
| `EMAIL_USER` / `EMAIL_PASS` | SMTP credentials |
| `EMAIL_TO` | Recipient inbox |
| `EMAIL_FROM` | From header |
| `RATE_LIMIT_WINDOW_MS` / `RATE_LIMIT_MAX` | Rate limit config |

> ⚠️ Never commit a real `.env`. Only `.env.example` should be in git.
