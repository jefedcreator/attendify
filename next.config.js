/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: config => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'attendify.infura-ipfs.io',
          port: '',
          pathname: '/ipfs/*',
        },
        {
          protocol: 'https',
          hostname: 'altar.berrysauce.me',
          port: '',
          pathname: '/generate',
        },
      ],
      dangerouslyAllowSVG: true
    },
  };
  
  module.exports = nextConfig;