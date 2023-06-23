const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  redirects() {
    return [
      {
        source: "/42-a-comprehensive-guide-to-pipex",
        destination: "/post/42-a-comprehensive-guide-to-pipex",
        permanent: true,
      },
      {
        source: "/42-building-a-game-with-the-mlx",
        destination: "/post/42-a-comprehensive-guide-to-so_long",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
