import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string | string[];
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // Default high-end real estate image as agency hero image
  type = 'website',
  schema
}: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Title Tag
    document.title = title;

    // Helper to find or create meta tag
    const setMetaTag = (attr: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description
    setMetaTag('name', 'description', description);

    // 3. Meta Keywords
    if (keywords) {
      const keywordsStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      setMetaTag('name', 'keywords', keywordsStr);
    }

    // 4. Canonical URL Link Tag
    const currentUrl = canonical || `https://corebuildsolutions.in${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 5. Open Graph Meta Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:site_name', 'CoreBuild Solutions');

    // 6. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // 7. Schema.org JSON-LD Script Tag Injection
    // Clear out old JSON-LD script tags with our specific ID
    const existingScripts = document.querySelectorAll('script[id^="jsonld-seo-"]');
    existingScripts.forEach(script => script.remove());

    if (schema) {
      const schemasArray = Array.isArray(schema) ? schema : [schema];
      
      schemasArray.forEach((schemaObj, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `jsonld-seo-${index}`;
        script.innerHTML = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }

  }, [title, description, keywords, canonical, image, type, schema, location.pathname]);

  return null; // Component does not render visual UI elements
}
