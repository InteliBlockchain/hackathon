/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_allow_subscriptions: false
  }
}

module.exports = nextConfig
