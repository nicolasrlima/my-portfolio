/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "es", "pt", "fr"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
