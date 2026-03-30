/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ]
  },
}

module.exports = nextConfig
