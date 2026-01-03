import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://hausedgecapital.com';

// Read blog posts
const blogPostsPath = path.join(__dirname, '../src/data/blog-posts.json');
const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, 'utf-8'));

// Generate sitemap.xml
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/learn', priority: '0.8', changefreq: 'monthly' },
    { url: '/trade', priority: '0.8', changefreq: 'monthly' },
    { url: '/lending', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.9', changefreq: 'daily' },
    { url: '/trading-strategies', priority: '0.8', changefreq: 'weekly' },
    { url: '/capital-growth', priority: '0.8', changefreq: 'weekly' },
    { url: '/daily-updates', priority: '0.9', changefreq: 'daily' },
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  for (const page of staticPages) {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  }

  // Add blog posts
  for (const post of blogPosts) {
    const lastmod = post.publishDate || today;
    sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }

  sitemap += `</urlset>
`;

  return sitemap;
}

// Generate robots.txt
function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
}

// Write files
const publicDir = path.join(__dirname, '../public');

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateSitemap());
console.log('Generated sitemap.xml');

fs.writeFileSync(path.join(publicDir, 'robots.txt'), generateRobots());
console.log('Generated robots.txt');

console.log(`Total blog posts in sitemap: ${blogPosts.length}`);
