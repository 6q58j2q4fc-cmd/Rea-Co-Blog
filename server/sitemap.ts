/**
 * Dynamic Sitemap Generator
 * Generates XML sitemap including all static pages and dynamically generated articles
 * for maximum SEO reach and search engine indexing
 * Canonical domain: bendoregonluxuryhomebuilder.com
 */

import { getAllArticles } from "./db";

const SITE_URL = "https://bendoregonluxuryhomebuilder.com";
const HERO_CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk";

// All static pages with priorities and change frequencies
const STATIC_PAGES = [
  // Core pages
  { path: "/", priority: 1.0, changefreq: "weekly", imageTitle: "Award-Winning Custom Homes in Central Oregon", imagePath: `${HERO_CDN}/hero-main_2cc4c17d.jpg` },
  { path: "/portfolio", priority: 0.9, changefreq: "monthly", imageTitle: "Custom Home Portfolio - Rea Co Homes", imagePath: `${HERO_CDN}/reaco-hero-portfolio_980a56c9.webp` },
  { path: "/neighborhoods", priority: 0.9, changefreq: "monthly", imageTitle: "Central Oregon Luxury Home Communities", imagePath: `${HERO_CDN}/hero-neighborhoods_a1b2c3d4.jpg` },
  { path: "/about", priority: 0.8, changefreq: "monthly", imageTitle: "Kevin Rea - Master Custom Home Builder", imagePath: `${HERO_CDN}/kevin-rea_e5f6g7h8.webp` },
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
  { path: "/blog", priority: 0.9, changefreq: "daily" },
  { path: "/articles", priority: 0.9, changefreq: "daily" },
  { path: "/testimonials", priority: 0.7, changefreq: "monthly" },
  { path: "/resources", priority: 0.8, changefreq: "monthly" },
  { path: "/faq", priority: 0.7, changefreq: "monthly" },
  { path: "/compare-communities", priority: 0.8, changefreq: "monthly" },

  // Golf course & luxury community landing pages
  { path: "/brasada-ranch-builder", priority: 0.95, changefreq: "monthly", imageTitle: "Brasada Ranch Custom Home Builder - Rea Co Homes" },
  { path: "/tetherow-custom-homes", priority: 0.95, changefreq: "monthly", imageTitle: "Tetherow Custom Home Builder - Rea Co Homes" },
  { path: "/pronghorn-builder", priority: 0.95, changefreq: "monthly", imageTitle: "Pronghorn Custom Home Builder - Rea Co Homes" },
  { path: "/broken-top-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Broken Top Custom Home Builder - Rea Co Homes" },
  { path: "/caldera-springs-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Caldera Springs Custom Home Builder - Rea Co Homes" },
  { path: "/awbrey-butte-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Awbrey Butte Custom Home Builder - Rea Co Homes" },
  { path: "/sunriver-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Sunriver Custom Home Builder - Rea Co Homes" },
  { path: "/awbrey-glen-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Awbrey Glen Golf Club Custom Home Builder" },
  { path: "/black-butte-ranch-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Black Butte Ranch Custom Home Builder" },
  { path: "/juniper-preserve-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Juniper Preserve Custom Home Builder" },
  { path: "/northwest-crossing-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Northwest Crossing Custom Home Builder" },
  { path: "/highlands-broken-top-builder", priority: 0.9, changefreq: "monthly", imageTitle: "The Highlands at Broken Top Custom Home Builder" },
  { path: "/old-mill-builder", priority: 0.85, changefreq: "monthly", imageTitle: "Old Mill District Custom Home Builder" },
  { path: "/aspen-lakes-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Aspen Lakes Custom Home Builder" },
  { path: "/crosswater-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Crosswater at Sunriver Custom Home Builder" },
  { path: "/eagle-crest-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Eagle Crest Resort Custom Home Builder" },

  // City-specific landing pages
  { path: "/redmond-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Custom Home Builder Redmond Oregon" },
  { path: "/sisters-builder", priority: 0.9, changefreq: "monthly", imageTitle: "Custom Home Builder Sisters Oregon" },
  { path: "/la-pine-builder", priority: 0.85, changefreq: "monthly", imageTitle: "Custom Home Builder La Pine Oregon" },
  { path: "/prineville-builder", priority: 0.85, changefreq: "monthly", imageTitle: "Custom Home Builder Prineville Oregon" },

  // High-value SEO keyword landing pages
  { path: "/luxury-home-builder-bend-oregon", priority: 0.95, changefreq: "monthly", imageTitle: "Luxury Home Builder Bend Oregon - Rea Co Homes" },
  { path: "/home-builder-bend-oregon", priority: 0.95, changefreq: "monthly", imageTitle: "Home Builder Bend Oregon - Kevin Rea" },
  { path: "/custom-home-builder-near-me", priority: 0.9, changefreq: "monthly", imageTitle: "Custom Home Builder Near Me - Central Oregon" },
  { path: "/cost-to-build-custom-home-bend-oregon", priority: 0.9, changefreq: "monthly", imageTitle: "Cost to Build Custom Home Bend Oregon 2025" },
  { path: "/services", priority: 0.9, changefreq: "monthly", imageTitle: "Custom Home Building Services - Rea Co Homes" },
  { path: "/dream-home-builder", priority: 0.85, changefreq: "monthly", imageTitle: "Dream Home Builder Tool - Rea Co Homes" },
  { path: "/inspiration", priority: 0.8, changefreq: "weekly", imageTitle: "Custom Home Design Inspiration - Central Oregon" },
  { path: "/news", priority: 0.8, changefreq: "daily", imageTitle: "Central Oregon Home Building News" },
  { path: "/river-rim-builder", priority: 0.85, changefreq: "monthly", imageTitle: "River Rim Custom Home Builder" },
  { path: "/shevlin-commons-builder", priority: 0.85, changefreq: "monthly", imageTitle: "Shevlin Commons Custom Home Builder" },
  { path: "/summit-west-builder", priority: 0.85, changefreq: "monthly", imageTitle: "Summit West Custom Home Builder" },
  { path: "/widgi-creek-builder", priority: 0.85, changefreq: "monthly", imageTitle: "Widgi Creek Custom Home Builder" },
];

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function generateDynamicSitemap(): Promise<string> {
  const today = formatDate(new Date());

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  // Static pages
  for (const page of STATIC_PAGES) {
    xml += `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`;

    if (page.imagePath && page.imageTitle) {
      xml += `
    <image:image>
      <image:loc>${escapeXml(page.imagePath)}</image:loc>
      <image:title>${escapeXml(page.imageTitle)}</image:title>
    </image:image>`;
    } else if (page.imageTitle) {
      xml += `
    <image:image>
      <image:loc>${HERO_CDN}/hero-main_2cc4c17d.jpg</image:loc>
      <image:title>${escapeXml(page.imageTitle)}</image:title>
    </image:image>`;
    }

    xml += `
  </url>
`;
  }

  // Dynamic article pages - each gets its own indexed URL
  try {
    const articles = await getAllArticles();
    const publishedArticles = articles.filter(a => a.status === "published");

    for (const article of publishedArticles) {
      const articleDate = article.publishedAt
        ? formatDate(new Date(article.publishedAt))
        : today;

      const isRecent = article.publishedAt
        ? (Date.now() - new Date(article.publishedAt).getTime()) < 2 * 24 * 60 * 60 * 1000
        : false;

      xml += `  <url>
    <loc>${SITE_URL}/articles/${escapeXml(article.slug)}</loc>
    <lastmod>${articleDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>`;

      // Add featured image for article
      if (article.featuredImage) {
        xml += `
    <image:image>
      <image:loc>${escapeXml(article.featuredImage)}</image:loc>
      <image:title>${escapeXml(article.title)}</image:title>
      <image:caption>${escapeXml(article.excerpt || article.title)}</image:caption>
    </image:image>`;
      }

      // Add Google News sitemap tags for recent articles (within 48 hours)
      if (isRecent) {
        xml += `
    <news:news>
      <news:publication>
        <news:name>Rea Co Homes Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(article.publishedAt!).toISOString()}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>
      <news:keywords>${escapeXml(article.metaKeywords || article.category || "custom home builder Bend Oregon")}</news:keywords>
    </news:news>`;
      }

      xml += `
  </url>
`;
    }

    console.log(`[Sitemap] Generated sitemap with ${STATIC_PAGES.length} static pages and ${publishedArticles.length} articles`);
  } catch (error) {
    console.error("[Sitemap] Error fetching articles:", error);
  }

  xml += `</urlset>`;

  return xml;
}
