import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), "canvas", "jsdom"]
    return config
  },
}

export default nextConfig

