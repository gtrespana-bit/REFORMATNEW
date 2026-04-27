/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'reformat-venezuela.online', pathname: '/**' }],
    unoptimized: true,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
