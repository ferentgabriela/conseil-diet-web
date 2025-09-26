import { corsHeaders } from '../_shared/cors.ts';

interface LinkCheck {
  url: string;
  status: number;
  referrers: string[];
  lastChecked: string;
  error?: string;
}

interface CrawlResult {
  timestamp: string;
  totalChecked: number;
  errors404: LinkCheck[];
  errors5xx: LinkCheck[];
  orphanPages: LinkCheck[];
  allLinks: LinkCheck[];
}

const BASE_URL = 'https://conseildietetique.lu';
const MAX_DEPTH = 3;

// Common legacy patterns to test proactively
const LEGACY_PATTERNS = [
  '/blog',
  '/article',
  '/articles',
  '/posts',
  '/tarifs',
  '/pricing', 
  '/mentions',
  '/mentions-legales/',
  '/transparency',
  '/transparence/',
  '/index.html',
  '/home'
];

function normalizeUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    // Remove hash
    urlObj.hash = '';
    // Normalize trailing slash
    if (urlObj.pathname.endsWith('/') && urlObj.pathname !== '/') {
      urlObj.pathname = urlObj.pathname.slice(0, -1);
    }
    // Lowercase path
    urlObj.pathname = urlObj.pathname.toLowerCase();
    return urlObj.toString();
  } catch {
    return url;
  }
}

function calculateSimilarity(str1: string, str2: string): number {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  const editDistance = levenshteinDistance(longer, shorter);
  if (longer.length === 0) return 1.0;
  return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(str1: string, str2: string): number {
  const matrix = [];
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[str2.length][str1.length];
}

async function fetchSitemap(): Promise<string[]> {
  try {
    const response = await fetch(`${BASE_URL}/sitemap.xml`);
    if (!response.ok) return [];
    
    const text = await response.text();
    const urls = [];
    const locMatches = text.match(/<loc>(.*?)<\/loc>/g);
    
    if (locMatches) {
      for (const match of locMatches) {
        const url = match.replace(/<\/?loc>/g, '');
        if (url.startsWith(BASE_URL)) {
          urls.push(normalizeUrl(url));
        }
      }
    }
    
    return urls;
  } catch (error) {
    console.error('Error fetching sitemap:', error);
    return [];
  }
}

async function checkUrl(url: string): Promise<{ status: number; error?: string }> {
  try {
    // Try HEAD request first
    let response = await fetch(url, { method: 'HEAD' });
    
    // If HEAD fails or returns unclear result, try GET
    if (!response.ok || response.status === 405) {
      response = await fetch(url, { method: 'GET' });
    }
    
    return { status: response.status };
  } catch (error: any) {
    return { status: 0, error: error?.message || 'Unknown error' };
  }
}

async function extractLinksFromPage(url: string): Promise<string[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) return [];
    
    const html = await response.text();
    const links = [];
    
    // Simple regex to find href attributes
    const hrefMatches = html.match(/href=["']([^"']+)["']/g);
    
    if (hrefMatches) {
      for (const match of hrefMatches) {
        const href = match.match(/href=["']([^"']+)["']/)?.[1];
        if (href) {
          try {
            const absoluteUrl = new URL(href, url).toString();
            if (absoluteUrl.startsWith(BASE_URL)) {
              links.push(normalizeUrl(absoluteUrl));
            }
          } catch {
            // Invalid URL, skip
          }
        }
      }
    }
    
    return [...new Set(links)]; // Remove duplicates
  } catch (error) {
    console.error(`Error extracting links from ${url}:`, error);
    return [];
  }
}

async function crawlLinks(): Promise<CrawlResult> {
  const discovered = new Map<string, Set<string>>(); // url -> referrers
  const checked = new Map<string, LinkCheck>();
  const toCheck = new Set<string>();
  
  // Start with sitemap URLs and homepage
  const sitemapUrls = await fetchSitemap();
  const startUrls = [normalizeUrl(BASE_URL), ...sitemapUrls];
  
  // Add legacy patterns
  for (const pattern of LEGACY_PATTERNS) {
    startUrls.push(normalizeUrl(`${BASE_URL}${pattern}`));
  }
  
  // Initialize with start URLs
  for (const url of startUrls) {
    discovered.set(url, new Set(['sitemap/homepage']));
    toCheck.add(url);
  }
  
  // Crawl up to MAX_DEPTH levels
  for (let depth = 0; depth < MAX_DEPTH && toCheck.size > 0; depth++) {
    console.log(`Crawling depth ${depth + 1}, ${toCheck.size} URLs to check`);
    
    const currentBatch = Array.from(toCheck);
    toCheck.clear();
    
    for (const url of currentBatch) {
      if (checked.has(url)) continue;
      
      const result = await checkUrl(url);
      const referrers = Array.from(discovered.get(url) || []);
      
      checked.set(url, {
        url,
        status: result.status,
        referrers,
        lastChecked: new Date().toISOString(),
        error: result.error
      });
      
      // If page is accessible, extract links for next depth
      if (result.status === 200 && depth < MAX_DEPTH - 1) {
        const links = await extractLinksFromPage(url);
        for (const link of links) {
          if (!discovered.has(link)) {
            discovered.set(link, new Set());
          }
          discovered.get(link)!.add(url);
          
          if (!checked.has(link)) {
            toCheck.add(link);
          }
        }
      }
    }
  }
  
  const allLinks = Array.from(checked.values());
  const errors404 = allLinks.filter(link => link.status === 404);
  const errors5xx = allLinks.filter(link => link.status >= 500);
  
  // Find orphan pages (200 status but no referrers except sitemap/homepage)
  const orphanPages = allLinks.filter(link => 
    link.status === 200 && 
    link.referrers.length <= 1 && 
    link.referrers[0] === 'sitemap/homepage'
  );
  
  // Add suggested redirects for 404s
  const workingUrls = allLinks.filter(link => link.status === 200).map(link => link.url);
  
  for (const error404 of errors404) {
    let bestMatch = '';
    let bestScore = 0;
    
    for (const workingUrl of workingUrls) {
      const score = calculateSimilarity(error404.url, workingUrl);
      if (score > bestScore && score >= 0.7) {
        bestScore = score;
        bestMatch = workingUrl;
      }
    }
    
    if (bestMatch) {
      (error404 as any).suggestedRedirect = bestMatch;
      (error404 as any).similarity = bestScore;
    }
  }
  
  return {
    timestamp: new Date().toISOString(),
    totalChecked: allLinks.length,
    errors404,
    errors5xx,
    orphanPages,
    allLinks
  };
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    console.log('Starting link crawl...');
    const result = await crawlLinks();
    console.log(`Crawl completed: ${result.totalChecked} links checked, ${result.errors404.length} 404s found`);
    
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Crawl error:', error);
    return new Response(JSON.stringify({ error: 'Crawl failed', details: error?.message || 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});