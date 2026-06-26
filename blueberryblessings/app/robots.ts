import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // Replace with the production domain once deployed
    sitemap: 'https://blueberryblessings.ca/sitemap.xml',
  };
}
