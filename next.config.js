/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  env: {
    allow_subscriptions: false,
    API_PUBLIC_URL: "https://api.inteliblockchain.co/v1", // "http://hackton-alb-39395383.us-east-1.elb.amazonaws.com",
    JWT_TOKEN_VALIDATION_FRONT: "fda185375967e0569363a5f061f0e1ae"
  }
}

module.exports = nextConfig
