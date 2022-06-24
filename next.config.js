/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // ssr and displayName are configured by default
  },
  reactStrictMode: false,
  webpack (config, {}) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: require.resolve("path-browserify"),
      url: require.resolve("url"),
    }
    return config
  },
}

module.exports = nextConfig
