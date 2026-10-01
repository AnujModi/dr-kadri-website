import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbSchemaProps {
  items?: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const location = useLocation();
  const siteUrl = window.location.origin;

  useEffect(() => {
    // Generate breadcrumb items from path if not provided
    const breadcrumbItems: BreadcrumbItem[] = items || generateBreadcrumbs(location.pathname);

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${item.path}`,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'breadcrumb-schema';

    const existing = document.getElementById('breadcrumb-schema');
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptElement = document.getElementById('breadcrumb-schema');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [items, location.pathname, siteUrl]);

  return null;
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];

  if (pathname === '/') {
    return breadcrumbs;
  }

  const pathSegments = pathname.split('/').filter(Boolean);
  let currentPath = '';

  const nameMap: Record<string, string> = {
    'about': 'About Us',
    'contact': 'Contact',
    'patient-info': 'Patient Information',
    'periodontal-disease': 'Periodontal Disease',
    'non-surgical-procedures': 'Non-Surgical Procedures',
    'surgical-procedures': 'Surgical Procedures',
    'tmj': 'TMJ Treatment',
    'referring-doctors': 'Referring Doctors',
    'our-team': 'Our Team',
    'staff': 'Staff',
    'office-tour': 'Office Tour',
    'services': 'Services',
  };

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: nameMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      path: currentPath,
    });
  });

  return breadcrumbs;
}
