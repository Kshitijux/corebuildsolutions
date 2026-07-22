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

    // 2. Meta Robots Tag
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Meta Description
    setMetaTag('name', 'description', description);

    // 4. Meta Keywords
    if (keywords) {
      const keywordsStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      setMetaTag('name', 'keywords', keywordsStr);
    }

    // 5. Canonical URL Link Tag
    const currentUrl = canonical || `https://corebuildsolutions.in${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. Open Graph Meta Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:site_name', 'CoreBuild Solutions');
    setMetaTag('property', 'og:locale', 'en_US');

    // 7. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // 8. Schema.org JSON-LD Script Tag Injection
    // Clear out old JSON-LD script tags with our specific ID
    const existingScripts = document.querySelectorAll('script[id^="jsonld-seo-"]');
    existingScripts.forEach(script => script.remove());

    const globalOrganizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://corebuildsolutions.in/#organization",
      "name": "CoreBuild Solutions",
      "url": "https://corebuildsolutions.in",
      "logo": "https://corebuildsolutions.in/logo.png",
      "sameAs": [
        "https://github.com/Kshitijux/corebuildsolutions"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9244007322",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    };

    const globalLocalBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://corebuildsolutions.in/#localbusiness",
      "name": "CoreBuild Solutions - Web Development Company in Raipur",
      "image": "https://corebuildsolutions.in/logo.png",
      "url": "https://corebuildsolutions.in",
      "telephone": "+91-9244007322",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Raipur",
        "addressRegion": "Chhattisgarh",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.2514,
        "longitude": 81.6296
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    };

    const globalWebSiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://corebuildsolutions.in/#website",
      "url": "https://corebuildsolutions.in",
      "name": "CoreBuild Solutions",
      "publisher": {
        "@id": "https://corebuildsolutions.in/#organization"
      }
    };

    const schemasArray = [
      globalOrganizationSchema,
      globalLocalBusinessSchema,
      globalWebSiteSchema,
      ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])
    ];

    schemasArray.forEach((schemaObj, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `jsonld-seo-${index}`;
      script.innerHTML = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });

  }, [title, description, keywords, canonical, image, type, schema, location.pathname]);

  return null; // Component does not render visual UI elements
}
