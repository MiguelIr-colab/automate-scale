FROM node:20-alpine

WORKDIR /app

# Install deps first (better cache)
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy source
COPY src ./src

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Healthcheck for Dokploy / Traefik
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/health || exit 1

CMD ["node", "src/index.js"]
