/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'yts.mx',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
      },
      {
        protocol: 'https',
        hostname: 'api.themoviedb.org',
      },
    ],
  },
};

module.exports = nextConfig;

