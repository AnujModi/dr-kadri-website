import { useEffect } from 'react';
import { doctorData } from '../data/doctorData';

interface StructuredDataProps {
  type?: 'organization' | 'faq' | 'all';
  faqData?: Array<{ question: string; answer: string }>;
}

export default function StructuredData({ type = 'all', faqData }: StructuredDataProps) {
  useEffect(() => {
    const siteUrl = window.location.origin;

    // Organization/LocalBusiness Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': ['Dentist', 'MedicalBusiness', 'LocalBusiness', 'HealthAndBeautyBusiness'],
      '@id': `${siteUrl}/#organization`,
      name: 'Carrollton Periodontics & Implant Dentistry',
      alternateName: 'Carrollton Perio',
      description: 'Specialized periodontal care and dental implant excellence by Dr. Donna Thomas-Moses & Dr. Hazeka Kadri in Carrollton, GA.',
      image: [
        `${siteUrl}/images/logo.jpeg`,
        `${siteUrl}/images/carousel/Moses-031-2000x680.jpeg`,
        `${siteUrl}/images/carousel/officeNEW-2000x680.jpeg`,
      ],
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.jpeg`,
        width: '600',
        height: '600',
      },
      url: siteUrl,
      telephone: '+1-770-832-0089',
      email: 'info@carrolltonperio.com',
      priceRange: '$$-$$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Check, Visa, MasterCard, American Express, Discover, CareCredit',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '530 Newnan Street',
        addressLocality: 'Carrollton',
        addressRegion: 'GA',
        postalCode: '30117',
        addressCountry: 'US',
      },
      hasMap: 'https://maps.google.com/maps?q=530+Newnan+Street+Carrollton+GA+30117',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '08:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Friday',
          opens: '08:00',
          closes: '14:00',
        },
      ],
      areaServed: {
        '@type': 'City',
        name: 'Carrollton',
        containedInPlace: {
          '@type': 'State',
          name: 'Georgia',
        },
      },
      sameAs: [
        // Add social media URLs when available
        // 'https://www.facebook.com/carrolltonperio',
        // 'https://www.instagram.com/carrolltonperio',
        // 'https://www.linkedin.com/company/carrolltonperio',
      ],
      medicalSpecialty: ['Periodontics', 'Implant Dentistry'],
      knowsAbout: [
        'Periodontics',
        'Dental Implants',
        'Gum Disease Treatment',
        'Cosmetic Periodontal Surgery',
        'TMJ Treatment',
        'Bone Grafting',
        'Gum Grafting',
        'Crown Lengthening',
      ],
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Dental Implants',
          description: 'Surgical placement of dental implants to replace missing teeth',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Periodontal Disease Treatment',
          description: 'Comprehensive treatment for gum disease including scaling and root planing',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Gum Grafting',
          description: 'Soft tissue grafting procedures to restore gum tissue',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Crown Lengthening',
          description: 'Cosmetic periodontal surgery to improve smile aesthetics',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Bone Grafting',
          description: 'Bone regeneration procedures for implant placement',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'TMJ Treatment',
          description: 'Diagnosis and treatment of temporomandibular joint disorders',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Scaling and Root Planing',
          description: 'Non-surgical deep cleaning to treat periodontal disease',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Cosmetic Periodontal Surgery',
          description: 'Aesthetic gum procedures to enhance smile appearance',
        },
      ],
      founder: {
        '@type': 'Person',
        '@id': `${siteUrl}/#dr-donna-thomas-moses`,
        name: 'Dr. Donna Thomas-Moses',
        jobTitle: 'Periodontist',
        description: 'DMD, Periodontist and founder of Carrollton Periodontics',
      },
      employee: [
        {
          '@type': 'Physician',
          '@id': `${siteUrl}/#dr-donna-thomas-moses`,
          name: 'Dr. Donna Thomas-Moses',
          jobTitle: 'Periodontist',
          description: 'DMD - Board Certified Periodontist with over 30 years of experience',
          image: `${siteUrl}${doctorData['dr-moses'].image}`,
          medicalSpecialty: 'Periodontics',
          alumniOf: [
            {
              '@type': 'EducationalOrganization',
              name: 'University of Mississippi School of Dentistry',
            },
            {
              '@type': 'EducationalOrganization',
              name: 'Medical College of Georgia',
            },
          ],
          memberOf: [
            {
              '@type': 'Organization',
              name: 'American Academy of Periodontology',
            },
            {
              '@type': 'Organization',
              name: 'American Academy of Implant Dentistry',
            },
            {
              '@type': 'Organization',
              name: 'Georgia Dental Association',
            },
          ],
        },
        {
          '@type': 'Physician',
          '@id': `${siteUrl}/#dr-hazeka-kadri`,
          name: 'Dr. Hazeka Kadri',
          jobTitle: doctorData['dr-hazeka'].title,
          description: 'BDS, DMD, MS Periodontics and Periodontal Prosthesis',
          image: `${siteUrl}${doctorData['dr-hazeka'].image}`,
          medicalSpecialty: 'Periodontics',
          alumniOf: [
            {
              '@type': 'EducationalOrganization',
              name: 'Boston University Henry M. Goldman School of Dental Medicine',
            },
            {
              '@type': 'EducationalOrganization',
              name: 'University of Pennsylvania',
            },
          ],
          honorificSuffix: ['BDS', 'DMD', 'MS'],
          award: ['OKU Award', 'Indian Society of Periodontology - Listerine Merit Award'],
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '100',
        bestRating: '5',
        worstRating: '1',
      },
    };

    // FAQ Schema
    const faqSchema = faqData
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

    // Default FAQ data if none provided
    const defaultFAQ = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What will happen at my initial visit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your initial visit involves co-discovery of your oral health findings and needs. Please provide photo ID, referral slips, x-rays from your referring dentist, a list of current medications, and insurance cards. Allow 1.5-2 hours for your first appointment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will it hurt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We strive to be gentle and considerate. The periodontal examination can be completed with little or no discomfort. We offer nitrous oxide and oral sedatives for patient comfort.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need radiographs (x-rays)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, current periodontal radiographs (FMX - full mouth series) are required for proper diagnosis. If your referring dentist has recent x-rays, they can be forwarded to our office.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my insurance cover the cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dental insurance policies often cover periodontal treatment. As an out-of-network provider, we require payment in full at the time of visit and will file your insurance on your behalf with reimbursement sent directly to you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I need surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not everyone needs periodontal surgery. If treated early, gum disease can be controlled without surgery. We make recommendations based on your individual situation and treat as conservatively as possible.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can my teeth be saved?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recent advances in periodontal treatment allow us to successfully treat and maintain most teeth. We will provide honest recommendations based on your specific condition.',
          },
        },
      ],
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
      ],
    };

    // Combine schemas based on type
    const schemasToAdd = [];
    if (type === 'organization' || type === 'all') {
      schemasToAdd.push(organizationSchema);
    }
    if (type === 'faq' && faqSchema) {
      schemasToAdd.push(faqSchema);
    }
    if (type === 'all' && !faqSchema) {
      schemasToAdd.push(defaultFAQ);
    }
    if (type === 'all') {
      schemasToAdd.push(breadcrumbSchema);
    }

    // Remove existing structured data
    document.querySelectorAll('[id^="structured-data"]').forEach((el) => el.remove());

    // Add new schemas
    schemasToAdd.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('[id^="structured-data"]').forEach((el) => el.remove());
    };
  }, [type, faqData]);

  return null;
}
