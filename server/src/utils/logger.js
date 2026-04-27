// Minimal structured logger – avoids pulling in a full logging library.
const ts = () => new Date().toISOString();

export const logger = {
  info: (msg) => console.log(`[${ts()}] [INFO]  ${msg}`),
  warn: (msg) => console.warn(`[${ts()}] [WARN]  ${msg}`),
  error: (msg) => console.error(`[${ts()}] [ERROR] ${msg}`),
};
