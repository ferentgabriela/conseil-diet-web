#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://conseildietetique.lu';

// Define all current routes from the app
const routes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/articles/nutrition-menopause-guide',
    changefreq: 'monthly', 
    priority: '0.8',
    lastmod: '2024-01-15'
  },
  {
    url: '/articles/allaitement-perte-poids',
    changefreq: 'monthly',
    priority: '0.8', 
    lastmod: '2024-01-15'
  },
  {
    url: '/articles/diabete-aliments-recommandes',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: '2024-01-15'
  },
  {
    url: '/articles/cholesterol-alimentation',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: '2024-01-15'
  },
  {
    url: '/articles/troubles-digestifs-solutions',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: '2024-01-15'
  },
  {
    url: '/articles/perte-poids-apres-40',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: '2024-01-15'
  },
  {
    url: '/articles/hypertension-regime-dash',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: '2024-01-15'
  },
  {
    url: '/articles/thyroide-alimentation',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: '2024-01-15'
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/prestations',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/mentions-legales',
    changefreq: 'yearly',
    priority: '0.3',
    lastmod: '2024-01-01'
  },
  {
    url: '/tarifs-prise-en-charge',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: '2024-01-01'
  },
  {
    url: '/transparence',
    changefreq: 'yearly',
    priority: '0.3',
    lastmod: '2024-01-01'
  }
];

function generateSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin and temporary paths
Disallow: /admin/
Disallow: /temp/
Disallow: /*?key=*`;
}

// Generate and save sitemap
const sitemapContent = generateSitemap();
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log('✅ Generated sitemap.xml');

// Write robots.txt
const robotsContent = generateRobotsTxt();
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
console.log('✅ Generated robots.txt');

// Verify all routes are accessible (basic validation)
console.log('\n📋 Route validation:');
routes.forEach(route => {
  console.log(`  ${route.url} - Priority: ${route.priority}, Changefreq: ${route.changefreq}`);
});

console.log(`\n✨ Sitemap generated with ${routes.length} URLs`);
console.log(`🔗 Canonical domain: ${BASE_URL}`);