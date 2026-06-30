import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.toString().replace(/\/$/, "") : "https://www.blueberryblessings.org";
  const currentDate = new Date().toISOString().split("T")[0];

  const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${siteUrl}/blueberry_basket.jpg</image:loc>
    </image:image>
    <image:image>
      <image:loc>${siteUrl}/blueberry_harvest.jpg</image:loc>
    </image:image>
    <image:image>
      <image:loc>${siteUrl}/blueberry_muffins.jpg</image:loc>
    </image:image>
  </url>
</urlset>`;

  return new Response(content, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
    },
  });
};
