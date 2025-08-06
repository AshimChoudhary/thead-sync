/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the 'typeScript' block as it's not a valid top-level option.

  // Remove the 'experimental' block for serverActions as they are now stable.
  // The 'serverComponentsExternalPackages' key has been renamed.

  // Use the new, non-experimental key for external packages.
  serverExternalPackages: ['mongoose'],

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'images.clerk.dev',
      },
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

module.exports = nextConfig;
