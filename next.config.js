/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_allow_subscriptions: true,
    NEXT_PUBLIC_API_URL: 'https://api.inteliblockchain.co'
  }
}

module.exports = nextConfig
