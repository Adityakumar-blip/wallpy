const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

module.exports = withPWA({
  // other congigs
  reactStrictMode: false,
  staticPageGenerationTimeout: 180,
  images: {
    domains: [],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
});
