/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  experiments: {
    topLevelAwait: true,
  },
}

module.exports = nextConfig
