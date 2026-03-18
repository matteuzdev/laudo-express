/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuração básica de PWA pode ser feita via plugins como next-pwa
  // Por enquanto, garantimos que o Next.js não barre as rotas offline
};

module.exports = nextConfig;

