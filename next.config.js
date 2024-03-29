/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_API_URL: 'https://hackathon-back.herokuapp.com',
    NEXT_PUBLIC_ALLOW_SUBSCRIPTIONS: false,
    NEXT_PUBLIC_JWT_TOKEN_VALIDATION_FRONT: "fda185375967e0569363a5f061f0e1ae",
    NEXT_PUBLIC_MAINTANANCE_MODE: false,
    NEXT_PUBLIC_SUBSCRIPTIONS_ENDED: true,
  }
}

module.exports = nextConfig
