import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../../dist');
const PORT = 4173;

// List of all public routes to pre-render
const ROUTES = [
  '/',
  '/web-development-company-in-raipur',
  '/web-development-in-raipur',
  '/about',
  '/contact',
  '/portfolio',
  '/services',
  '/services/web-development-in-raipur',
  '/services/mobile-app-development-in-raipur',
  '/services/ai-development-in-raipur',
  '/services/ecommerce-development-in-raipur',
  '/services/ui-ux-design-in-raipur',
  '/services/branding-logo-design-in-raipur',
  '/services/seo-services-in-raipur',
  '/services/custom-software-development-in-raipur',
  '/blog',
  '/blog/future-ai-enterprise-software-architecture',
  '/blog/minimalist-interaction-design-premium-brands',
  '/blog/website-development-cost-india-2026',
  '/blog/react-vs-nextjs-frontend-framework-seo',
  '/blog/ai-small-business-automation-rag-guide',
  '/blog/ecommerce-website-guide-sub-second-checkout',
  '/blog/why-every-startup-needs-high-performance-web-portal',
  '/blog/website-development-company-raipur-chhattisgarh',
  '/blog/how-website-mobile-app-grow-business-2026',
  '/blog/choosing-right-database-custom-software-2026',
  '/blog/ui-ux-secrets-high-converting-saas-dashboards',
  '/blog/optimize-google-business-profile-local-seo-raipur',
  '/blog/mobile-app-development-cost-raipur-startup-guide',
  '/blog/rag-replacing-simple-chatbots-b2b-operations',
  '/blog/why-headless-commerce-future-enterprise-retail',
  '/blog/custom-erp-software-manufacturing-chhattisgarh-urla',
  '/blog/page-speed-destroys-google-ads-quality-score-cpc',
  '/blog/web-development-in-raipur',
  '/privacy-policy',
  '/terms-of-service'
];

// Simple static file server helper for dist directory
function createStaticServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.ico': 'image/x-icon'
  };

  const indexHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');

  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    let filePath = path.join(DIST_DIR, reqPath);

    // If requesting root or a clean route, check if asset exists, else fallback to index.html SPA
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexHtml);
      return;
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading file');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  });

  return new Promise((resolve) => {
    server.listen(0, () => {
      const assignedPort = server.address().port;
      console.log(`Prerender local server running on http://localhost:${assignedPort}`);
      resolve({ server, port: assignedPort });
    });
  });
}

async function prerender() {
  console.log('🚀 Starting SSG Pre-rendering pipeline...');
  const { server, port } = await createStaticServer();

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu'
      ]
    });
  } catch (launchErr) {
    console.warn('⚠️ Puppeteer launch skipped or failed on build container (e.g., Vercel build environment):', launchErr.message);
    console.log('✅ Proceeding with standard Vite build distribution for Vercel deployment.');
    server.close();
    return;
  }

  try {
    const page = await browser.newPage();
    // Emulate desktop viewport
    await page.setViewport({ width: 1440, height: 900 });

    for (const route of ROUTES) {
      const url = `http://localhost:${port}${route}`;
      console.log(`Pre-rendering route: ${route}`);

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Extra wait for Framer Motion / dynamic text state
      await page.evaluate(() => new Promise((r) => setTimeout(r, 600)));

      const html = await page.content();

      // Determine output filepath
      const targetDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      const targetFile = path.join(targetDir, 'index.html');
      fs.writeFileSync(targetFile, html, 'utf8');
      console.log(`   ✓ Wrote static HTML to: ${path.relative(DIST_DIR, targetFile)}`);
    }

    console.log('🎉 SSG Pre-rendering completed successfully for all public pages!');
  } catch (err) {
    console.error('❌ Error during pre-rendering:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

prerender();
