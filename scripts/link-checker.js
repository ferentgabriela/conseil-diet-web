#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple link checker for build-time validation
const BASE_URL = 'https://conseildietetique.lu';

// Routes that should exist (from our app routing)
const expectedRoutes = [
  '/',
  '/articles/nutrition-menopause-guide',
  '/articles/allaitement-perte-poids', 
  '/articles/diabete-aliments-recommandes',
  '/articles/cholesterol-alimentation',
  '/articles/troubles-digestifs-solutions',
  '/articles/perte-poids-apres-40',
  '/articles/hypertension-regime-dash',
  '/articles/thyroide-alimentation',
  '/mentions-legales',
  '/tarifs-prise-en-charge',
  '/transparence'
];

// Check if sitemap.xml contains any routes that don't exist in our app
function validateSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ sitemap.xml not found');
    return false;
  }
  
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
  
  if (!locMatches) {
    console.error('❌ No URLs found in sitemap.xml');
    return false;
  }
  
  const sitemapUrls = locMatches.map(match => 
    match.replace(/<\/?loc>/g, '').replace(BASE_URL, '')
  );
  
  console.log('🔍 Validating sitemap URLs...');
  
  let hasErrors = false;
  
  // Check if all expected routes are in sitemap
  for (const route of expectedRoutes) {
    if (!sitemapUrls.includes(route)) {
      console.error(`❌ Missing route in sitemap: ${route}`);
      hasErrors = true;
    }
  }
  
  // Check if sitemap has any routes not in our expected list
  for (const url of sitemapUrls) {
    if (!expectedRoutes.includes(url)) {
      console.warn(`⚠️  Unexpected route in sitemap: ${url}`);
    }
  }
  
  if (!hasErrors) {
    console.log(`✅ Sitemap validation passed (${sitemapUrls.length} URLs)`);
  }
  
  return !hasErrors;
}

// Validate internal links in React components (basic check)
function validateInternalLinks() {
  console.log('🔍 Checking internal links in components...');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const componentFiles = [];
  
  // Recursively find all .tsx and .ts files
  function findFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findFiles(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        componentFiles.push(filePath);
      }
    }
  }
  
  findFiles(srcDir);
  
  let linkIssues = [];
  
  for (const file of componentFiles) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Find internal links (to="/..." or href="/...")
    const linkMatches = content.match(/(to|href)=["']\/[^"']*["']/g);
    
    if (linkMatches) {
      for (const match of linkMatches) {
        const url = match.match(/(to|href)=["']([^"']*)["']/)?.[2];
        if (url && url.startsWith('/') && !url.startsWith('//')) {
          // Remove query params and hash for checking
          const cleanUrl = url.split('?')[0].split('#')[0];
          
          if (!expectedRoutes.includes(cleanUrl) && !cleanUrl.startsWith('/admin/')) {
            linkIssues.push({
              file: path.relative(process.cwd(), file),
              url: cleanUrl,
              match: match
            });
          }
        }
      }
    }
  }
  
  if (linkIssues.length > 0) {
    console.warn(`⚠️  Found ${linkIssues.length} potentially broken internal links:`);
    linkIssues.forEach(issue => {
      console.warn(`   ${issue.file}: ${issue.url}`);
    });
  } else {
    console.log('✅ No broken internal links found');
  }
  
  return linkIssues.length === 0;
}

// Main validation
async function runValidation() {
  console.log('🚀 Running build-time link validation...\n');
  
  const sitemapValid = validateSitemap();
  const linksValid = validateInternalLinks();
  
  console.log('\n📊 Validation Summary:');
  console.log(`   Sitemap: ${sitemapValid ? '✅ Valid' : '❌ Issues found'}`);
  console.log(`   Internal links: ${linksValid ? '✅ Valid' : '⚠️  Warnings'}`);
  
  if (!sitemapValid) {
    console.error('\n❌ Build validation failed - sitemap issues must be fixed');
    process.exit(1);
  }
  
  if (!linksValid) {
    console.warn('\n⚠️  Build validation completed with warnings');
  } else {
    console.log('\n✅ Build validation passed');
  }
}

runValidation().catch(error => {
  console.error('❌ Validation error:', error);
  process.exit(1);
});