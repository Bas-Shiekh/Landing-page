/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}
function override(webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto"
  });

  return webpackConfig;
}

module.exports = override

module.exports = nextConfig
