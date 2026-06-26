import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://blueberryblessings.ca',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://blueberryblessings.ca/blueberry_basket.jpg',
        'https://blueberryblessings.ca/blueberry_harvest.jpg',
        'https://blueberryblessings.ca/blueberry_muffins.jpg',
      ],
    },
  ];
}
