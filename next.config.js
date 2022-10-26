/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: process.env.NODE_ENV === 'development',
  swcMinify: true,
};

module.exports = nextConfig;
