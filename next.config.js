/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["10.10.100.246", "notices.tcioe.edu.np"],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

