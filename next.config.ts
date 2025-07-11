import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Remove turbopack config for production
  experimental: {
    // Any experimental features can go here
  },
};

export default withNextIntl(nextConfig);
