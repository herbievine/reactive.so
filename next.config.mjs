import "./src/env.mjs";
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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

export default withContentlayer(nextConfig);
