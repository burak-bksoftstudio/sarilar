const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = withNextIntl(nextConfig)