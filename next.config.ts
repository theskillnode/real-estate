/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/real-estate",
  assetPrefix: "/real-estate/",
};

module.exports = nextConfig;
