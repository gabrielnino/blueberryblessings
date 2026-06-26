import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://blueberryblessings.org',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://blueberryblessings.org/blueberry_basket.jpg',
        'https://blueberryblessings.org/blueberry_harvest.jpg',
        'https://blueberryblessings.org/blueberry_muffins.jpg',
      ],
    },
  ];
}
