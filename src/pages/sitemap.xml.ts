import type { APIRoute } from 'astro';
import { serviceAreas } from '@/data/service-areas';
import { blogListItems } from '@/data/blogs';

const SITE = 'https://www.blackknightroofing.com';

type SitemapEntry = {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

const today = formatDate(new Date());

function buildEntry(entry: SitemapEntry): string {
  return `
  <url>
    <loc>${SITE}${entry.url}</loc>
    <lastmod>${entry.lastmod ?? today}</lastmod>
    <changefreq>${entry.changefreq ?? 'monthly'}</changefreq>
    <priority>${entry.priority?.toFixed(1) ?? '0.5'}</priority>
  </url>`.trimEnd();
}

// ─── Static Pages ────────────────────────────────────────────────────────────

const staticPages: SitemapEntry[] = [
  // Core
  { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: today },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8, lastmod: today },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.9, lastmod: today },
  { url: '/financing', changefreq: 'monthly', priority: 0.8, lastmod: today },
  { url: '/faqs', changefreq: 'monthly', priority: 0.7, lastmod: today },
  { url: '/gallery', changefreq: 'weekly', priority: 0.7, lastmod: today },
  { url: '/before-and-after', changefreq: 'weekly', priority: 0.7, lastmod: today },

  // Blog hub
  { url: '/blogs', changefreq: 'weekly', priority: 0.8, lastmod: today },

  // Case studies hub
  { url: '/case-studies', changefreq: 'weekly', priority: 0.7, lastmod: today },
  { url: '/case-studies/1', changefreq: 'monthly', priority: 0.6, lastmod: today },
  { url: '/case-studies/star-house-siding-upgrade', changefreq: 'monthly', priority: 0.6, lastmod: today },

  // Service areas hub
  { url: '/service-areas', changefreq: 'weekly', priority: 0.9, lastmod: today },

  // Services hub
  { url: '/services', changefreq: 'monthly', priority: 0.9, lastmod: today },

  // Individual service pages
  { url: '/services/residential-roofing-co', changefreq: 'monthly', priority: 0.9, lastmod: today },
  { url: '/services/commercial-roofing-co', changefreq: 'monthly', priority: 0.9, lastmod: today },
  { url: '/services/roof-replacement-services-co', changefreq: 'monthly', priority: 0.9, lastmod: today },
  { url: '/services/metal-roofing-co', changefreq: 'monthly', priority: 0.9, lastmod: today },
  { url: '/services/concrete-tile-roof-co', changefreq: 'monthly', priority: 0.8, lastmod: today },
  { url: '/services/stone-coated-steel-roofing-co', changefreq: 'monthly', priority: 0.8, lastmod: today },
  { url: '/services/hail-damage-repair-co', changefreq: 'monthly', priority: 0.9, lastmod: today },
  { url: '/services/storm-damage-repair-co', changefreq: 'monthly', priority: 0.9, lastmod: today },
  { url: '/services/wind-damage-repair-co', changefreq: 'monthly', priority: 0.8, lastmod: today },
  { url: '/services/gutters-co', changefreq: 'monthly', priority: 0.8, lastmod: today },
  { url: '/services/siding-co', changefreq: 'monthly', priority: 0.8, lastmod: today },
  { url: '/services/window-replacement-services-co', changefreq: 'monthly', priority: 0.8, lastmod: today },

  // Legal / policy (low priority, never crawl-heavy)
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.2, lastmod: today },
  { url: '/terms-of-use', changefreq: 'yearly', priority: 0.2, lastmod: today },
  { url: '/accessibility', changefreq: 'yearly', priority: 0.2, lastmod: today },
  { url: '/company-info', changefreq: 'yearly', priority: 0.3, lastmod: today },
];

// ─── Dynamic pages ────────────────────────────────────────────────────────────

const serviceAreaPages: SitemapEntry[] = serviceAreas.map(area => ({
  url: `/service-areas/${area.slug}`,
  changefreq: 'monthly',
  priority: 0.8,
  lastmod: today,
}));

const blogPages: SitemapEntry[] = blogListItems.map(blog => ({
  url: blog.href,
  changefreq: 'monthly',
  priority: 0.7,
  lastmod: today,
}));

// ─── Assemble ────────────────────────────────────────────────────────────────

const allEntries = [...staticPages, ...serviceAreaPages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
${allEntries.map(buildEntry).join('\n')}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
