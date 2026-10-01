import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultSEO = {
  title: 'Carrollton Periodontics & Implant Dentistry',
  description:
    'Specialized periodontal care and dental implant excellence by Dr. Donna Thomas-Moses & Dr. Hazeka Kadri in Carrollton, GA.',
  keywords:
    'periodontics, dental implants, gum disease, Carrollton GA, periodontist, Dr. Donna Thomas-Moses, Dr. Hazeka Kadri',
  image: '/images/logo.jpeg',
  type: 'website' as const,
  author: 'Dr. Donna Thomas-Moses & Dr. Hazeka Kadri',
  siteName: 'Carrollton Periodontics & Implant Dentistry',
};

export default function SEO({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noindex = false,
  author,
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const location = useLocation();
  const siteUrl = 'https://carrolltonperio.com';
  const currentUrl = `${siteUrl}${location.pathname}`;

  const seo = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image ? `${siteUrl}${image}` : `${siteUrl}${defaultSEO.image}`,
    type: type || defaultSEO.type,
    author: author || defaultSEO.author,
  };

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', seo.description);
    updateMetaTag('keywords', seo.keywords);
    updateMetaTag('author', seo.author);
    updateMetaTag('copyright', 'Carrollton Periodontics & Implant Dentistry');
    updateMetaTag('language', 'EN');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');

    // Geographic meta tags for local SEO
    updateMetaTag('geo.region', 'US-GA');
    updateMetaTag('geo.placename', 'Carrollton');
    updateMetaTag('geo.position', '33.5801;-85.0766');
    updateMetaTag('ICBM', '33.5801, -85.0766');

    // Mobile optimization
    updateMetaTag('format-detection', 'telephone=yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('apple-mobile-web-app-title', 'Carrollton Perio');

    // Open Graph tags (Facebook, LinkedIn)
    updateMetaTag('og:title', seo.title, true);
    updateMetaTag('og:description', seo.description, true);
    updateMetaTag('og:image', seo.image, true);
    updateMetaTag('og:image:alt', seo.title, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', seo.type, true);
    updateMetaTag('og:site_name', defaultSEO.siteName, true);
    updateMetaTag('og:locale', 'en_US', true);

    // Article-specific Open Graph tags
    if (type === 'article') {
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
      updateMetaTag('article:author', seo.author, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seo.title);
    updateMetaTag('twitter:description', seo.description);
    updateMetaTag('twitter:image', seo.image);
    updateMetaTag('twitter:image:alt', seo.title);
    updateMetaTag('twitter:creator', '@CarrolltonPerio');
    updateMetaTag('twitter:site', '@CarrolltonPerio');

    // Additional SEO tags
    updateMetaTag('referrer', 'origin-when-cross-origin');

    // Theme color for browsers
    updateMetaTag('theme-color', '#1F2937');
    updateMetaTag('msapplication-TileColor', '#1F2937');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    // Robots meta
    if (noindex) {
      updateMetaTag('robots', 'noindex,nofollow');
      updateMetaTag('googlebot', 'noindex,nofollow');
    } else {
      updateMetaTag('robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
      updateMetaTag('googlebot', 'index,follow');
      updateMetaTag('bingbot', 'index,follow');
    }
  }, [seo.title, seo.description, seo.keywords, seo.image, seo.type, seo.author, currentUrl, noindex, type, publishedTime, modifiedTime]);

  return null;
}
