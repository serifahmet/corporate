import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  turbopack: {
    resolveAlias: {
      // Turbopack aliases if needed
    },
  },
};

export default withNextIntl(nextConfig);
