/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["monte-assets.s3.amazonaws.com", "www.google.com", "cheery-mandazi-5eb67f.netlify.app"],
  },

  reactStrictMode: false,

};

module.exports = nextConfig;
