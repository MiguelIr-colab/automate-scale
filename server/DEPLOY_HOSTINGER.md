# Despliegue del backend en Hostinger VPS

Backend Express para el formulario de contacto (reCAPTCHA + email).
Dominio final: **https://api.aiassistant-bots.ch**

---

## Opción A — Despliegue con Dokploy (recomendado)

1. En Dokploy, crea una **Application** apuntando a este repo.
2. **Build path**: `server/`
3. **Build type**: Dockerfile
4. **Domain**: `api.aiassistant-bots.ch` → puerto **8080**, HTTPS activado (Let's Encrypt).
5. **Healthcheck path**: `/health`
6. **Variables de entorno**: copia las de `.env.example` y rellénalas.
7. Deploy.

---

## Opción B — Despliegue con Docker Compose (VPS Hostinger sin Dokploy)

### 1. Conéctate por SSH a tu VPS
```bash
ssh root@TU_IP
```

### 2. Instala Docker (si no lo tienes)
```bash
curl -fsSL https://get.docker.com | sh
```

### 3. Sube el contenido de la carpeta `server/` al VPS
Por ejemplo a `/opt/iassistant-api`:
```bash
mkdir -p /opt/iassistant-api
# usa scp / git clone / rsync para copiar la carpeta server/
```

### 4. Crea el archivo `.env`
```bash
cd /opt/iassistant-api
cp .env.example .env
nano .env   # rellena RECAPTCHA_SECRET, EMAIL_*, ALLOWED_ORIGINS
```

### 5. Levanta el contenedor
```bash
docker compose up -d --build
```

Comprueba que arranca:
```bash
curl http://127.0.0.1:8080/health
# {"status":"ok",...}
```

### 6. Configura el dominio `api.aiassistant-bots.ch`

En tu DNS (Hostinger):
- `A` record: `api.aiassistant-bots.ch` → IP de tu VPS

### 7. Reverse proxy con HTTPS (Nginx + Certbot)

Instala:
```bash
apt install -y nginx certbot python3-certbot-nginx
```

Crea `/etc/nginx/sites-available/api.aiassistant-bots.ch`:
```nginx
server {
    listen 80;
    server_name api.aiassistant-bots.ch;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Activa y emite certificado:
```bash
ln -s /etc/nginx/sites-available/api.aiassistant-bots.ch /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
certbot --nginx -d api.aiassistant-bots.ch
```

Listo: `https://api.aiassistant-bots.ch/health` debe responder OK.

---

## Opción C — Sin Docker (Node directo + PM2)

```bash
cd /opt/iassistant-api
npm install --omit=dev
cp .env.example .env && nano .env
npm install -g pm2
pm2 start src/index.js --name iassistant-api
pm2 save && pm2 startup
```

Luego configura Nginx + Certbot igual que en la Opción B.

---

## Verificación end-to-end

Desde tu máquina local:
```bash
curl https://api.aiassistant-bots.ch/health
```

Prueba el endpoint de contacto (debería fallar por reCAPTCHA pero confirma que está vivo):
```bash
curl -X POST https://api.aiassistant-bots.ch/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://aiassistant-bots.ch" \
  -d '{"nombre":"Test","email":"a@a.com","mensaje":"hola mundo"}'
```

Deberías recibir `{"error":"reCAPTCHA inválido"}` → ✅ el backend funciona y valida.

---

## Actualizar el backend

```bash
cd /opt/iassistant-api
git pull   # o vuelve a subir los archivos
docker compose up -d --build
```

---

## Variables de entorno requeridas

Ver [`.env.example`](./.env.example). Las críticas:

- `RECAPTCHA_SECRET` → la clave **secreta** de tu reCAPTCHA (la del backend, no la site key).
  Site key actual: `6LfSMdIsAAAAALqAv_dNRvuYzzIARX61C-Ue63pN`
- `ALLOWED_ORIGINS` → `https://aiassistant-bots.ch,https://www.aiassistant-bots.ch,https://swissicoupons.com,https://www.swissicoupons.com`
- `EMAIL_*` → tu SMTP (Gmail, Hostinger Mail, etc.)
