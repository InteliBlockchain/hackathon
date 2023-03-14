/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  env: {
    allow_subscriptions: false,
    NEXT_PUBLIC_SERVER_URL: 'http://localhost:5500/',
    JWT_TOKEN_VALIDATION_FRONT: "fda185375967e0569363a5f061f0e1ae"
  }
}

module.exports = nextConfig
