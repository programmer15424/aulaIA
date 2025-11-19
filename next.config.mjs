/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aulaIA',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
