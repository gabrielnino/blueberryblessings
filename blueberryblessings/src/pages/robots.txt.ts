import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.toString().replace(/\/$/, "") : "https://www.blueberryblessings.org";
  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  
  const content = `User-agent: *
Allow: /
Disallow: /private/

Sitemap: ${sitemapUrl}
`;

  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
};
