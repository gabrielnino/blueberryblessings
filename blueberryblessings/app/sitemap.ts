import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.blueberryblessings.org',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://www.blueberryblessings.org/blueberry_basket.jpg',
        'https://www.blueberryblessings.org/blueberry_harvest.jpg',
        'https://www.blueberryblessings.org/blueberry_muffins.jpg',
      ],
    },
  ];
}
