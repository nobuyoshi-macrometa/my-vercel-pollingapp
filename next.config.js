/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // ssr and displayName are configured by default
  },
  reactStrictMode: true,
}

module.exports = nextConfig
