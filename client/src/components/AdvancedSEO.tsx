/**
 * AdvancedSEO Component - State-of-the-Art 2026 SEO
 * Implements all modern structured data schemas for maximum search visibility:
 * - HomeBuilder / GeneralContractor schema
 * - Person schema with E-E-A-T signals
 * - Service schema with detailed offerings
 * - HowTo schema for process pages
 * - Review/AggregateRating
 * - Speakable schema for voice search
 * - SiteLinksSearchBox
 * - BreadcrumbList
 * - FAQPage schema
 */

import { Helmet } from "react-helmet-async";

const BASE_URL = "https://bendoregonluxuryhomebuilder.com";
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk";

interface AdvancedSEOProps {
  page?: "home" | "about" | "contact" | "portfolio" | "faq" | "location" | "article" | "services" | "cost";
  locationName?: string;
  locationSlug?: string;
  articleTitle?: string;
  articleDate?: string;
  faqs?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

// ===== CORE SCHEMAS =====

const homeBuilderSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor", "LocalBusiness"],
  "@id": `${BASE_URL}/#homebuilder`,
  "name": "Rea Co Homes",
  "alternateName": [
    "Rea Company Homes",
    "Kevin Rea Custom Homes",
    "Rea Co Custom Homes",
    "ReaCo Homes",
    "Rea Custom Homes"
  ],
  "description": "Award-winning luxury custom home builder in Central Oregon since 1977. Kevin Rea builds exceptional custom homes in Bend, Brasada Ranch, Tetherow, Pronghorn, Sunriver, and all Central Oregon communities. CCB #193427.",
  "url": BASE_URL,
  "telephone": "+1-541-390-9848",
  "email": "kevin@reacohomes.com",
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/logo.png`,
    "width": 200,
    "height": 60
  },
  "image": [
    `${CDN}/hero-main_2cc4c17d.jpg`,
    `${CDN}/reaco-hero-portfolio_980a56c9.webp`,
    `${CDN}/chiaramonte-hero-exterior_d6a8fd30.webp`
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bend",
    "addressLocality": "Bend",
    "addressRegion": "OR",
    "postalCode": "97701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.0582,
    "longitude": -121.3153
  },
  "hasMap": "https://maps.google.com/?q=Bend+Oregon",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Check, Wire Transfer, Construction Loan",
  "areaServed": [
    { "@type": "City", "name": "Bend", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Redmond", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Sisters", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Sunriver", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "La Pine", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Prineville", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Tumalo", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "Place", "name": "Brasada Ranch", "containedInPlace": { "@type": "City", "name": "Powell Butte, Oregon" } },
    { "@type": "Place", "name": "Tetherow", "containedInPlace": { "@type": "City", "name": "Bend, Oregon" } },
    { "@type": "Place", "name": "Pronghorn", "containedInPlace": { "@type": "City", "name": "Bend, Oregon" } },
    { "@type": "Place", "name": "Broken Top", "containedInPlace": { "@type": "City", "name": "Bend, Oregon" } },
    { "@type": "Place", "name": "Awbrey Butte", "containedInPlace": { "@type": "City", "name": "Bend, Oregon" } },
    { "@type": "Place", "name": "Caldera Springs", "containedInPlace": { "@type": "City", "name": "Sunriver, Oregon" } },
    { "@type": "Place", "name": "Black Butte Ranch", "containedInPlace": { "@type": "City", "name": "Sisters, Oregon" } },
    { "@type": "Place", "name": "Juniper Preserve", "containedInPlace": { "@type": "City", "name": "Bend, Oregon" } },
    { "@type": "Place", "name": "Northwest Crossing", "containedInPlace": { "@type": "City", "name": "Bend, Oregon" } },
    { "@type": "Place", "name": "Awbrey Glen", "containedInPlace": { "@type": "City", "name": "Bend, Oregon" } },
    { "@type": "Place", "name": "Eagle Crest Resort", "containedInPlace": { "@type": "City", "name": "Redmond, Oregon" } },
    { "@type": "Place", "name": "Crosswater", "containedInPlace": { "@type": "City", "name": "Sunriver, Oregon" } },
    { "@type": "Place", "name": "Aspen Lakes", "containedInPlace": { "@type": "City", "name": "Sisters, Oregon" } },
    { "@type": "AdministrativeArea", "name": "Central Oregon" },
    { "@type": "AdministrativeArea", "name": "Deschutes County, Oregon" }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 44.0582,
      "longitude": -121.3153
    },
    "geoRadius": "80000"
  },
  "founder": {
    "@type": "Person",
    "@id": `${BASE_URL}/#kevin-rea`,
    "name": "Kevin Rea",
    "jobTitle": "Master Custom Home Builder",
    "description": "Award-winning custom home builder with 45+ years of experience in Central Oregon. Winner of multiple Best of Show awards and the Earth Hero Award for sustainable building.",
    "telephone": "+1-541-390-9848",
    "email": "kevin@reacohomes.com",
    "url": `${BASE_URL}/about`,
    "image": `${CDN}/kevin-rea_e5f6g7h8.webp`,
    "knowsAbout": [
      "Custom Home Construction",
      "Luxury Home Building",
      "High Desert Architecture",
      "Mountain Contemporary Design",
      "Sustainable Building Practices",
      "Central Oregon Real Estate",
      "Golf Community Homes",
      "Earth Advantage Certification",
      "LEED Building Principles"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Oregon Contractor License CCB #193427"
      }
    ],
    "award": [
      "Best of Show - Realtors Tour of Homes",
      "Earth Hero Award - Sustainable Building",
      "Governor's Livability Award",
      "American Concrete Association Best Practice Award"
    ]
  },
  "foundingDate": "1977",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 10
  },
  "award": [
    "Best of Show - Realtors Tour of Homes",
    "Earth Hero Award for Sustainable Building Practices",
    "Governor's Livability Award - Village Wistoria",
    "American Concrete Association Best Practice Award"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Custom Home Building Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Home Construction",
          "description": "Full-service custom home building from design to completion in Central Oregon. Includes architectural coordination, permitting, construction management, and quality finishes.",
          "provider": { "@id": `${BASE_URL}/#homebuilder` },
          "areaServed": "Central Oregon",
          "serviceType": "Custom Home Building"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Golf Community Homes",
          "description": "Luxury custom homes in Brasada Ranch, Tetherow, Pronghorn, and other premier Central Oregon golf communities with architectural review compliance.",
          "provider": { "@id": `${BASE_URL}/#homebuilder` },
          "areaServed": "Central Oregon Golf Communities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sustainable Green Home Building",
          "description": "Earth Advantage certified and LEED-inspired custom homes with solar panels, geothermal systems, high-performance insulation, and smart home integration.",
          "provider": { "@id": `${BASE_URL}/#homebuilder` }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Renovation & Additions",
          "description": "Major renovations and additions to existing luxury homes in Central Oregon, maintaining architectural integrity and quality standards.",
          "provider": { "@id": `${BASE_URL}/#homebuilder` }
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jim Rozewski" },
      "datePublished": "2023-06-15",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Kevin's passion for building is unmatched. His attention to detail, his professionalism and the artful nature with which he approaches every project rings of the highest order.",
      "name": "Exceptional craftsmanship at Brasada Ranch"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Barbara Sumner" },
      "datePublished": "2023-03-22",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Kevin is a master builder – of relationships, ideas, teams and spaces. I have known Kevin for a decade and have enjoyed his vision, energy, talents and company every time we've connected.",
      "name": "Master builder of relationships and spaces"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "McCartney Family" },
      "datePublished": "2022-11-08",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "We knew immediately upon meeting with Kevin that we found our builder. Clear, present and trustworthy are just a few of the many attributes we enjoyed during our build process.",
      "name": "Found our builder immediately"
    }
  ],
  "sameAs": [
    "https://www.reacohomes.com",
    "https://www.facebook.com/reacohomes",
    "https://www.instagram.com/reacohomes",
    "https://www.linkedin.com/company/rea-company-homes",
    "https://www.houzz.com/professionals/general-contractors/rea-co-homes",
    "https://www.buildzoom.com/contractor/rea-co-homes"
  ],
  "knowsAbout": [
    "Custom Home Building in Bend Oregon",
    "Luxury Home Construction Central Oregon",
    "Brasada Ranch Custom Homes",
    "Tetherow Golf Community Homes",
    "Pronghorn Resort Homes",
    "High Desert Architecture",
    "Mountain Contemporary Design",
    "Sustainable Building Practices",
    "Earth Advantage Certification",
    "Deschutes County Building Codes"
  ],
  "slogan": "Building Central Oregon's Most Exceptional Custom Homes Since 1977"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "Rea Co Homes - Bend Oregon Luxury Custom Home Builder",
  "description": "Award-winning luxury custom home builder in Bend Oregon since 1977. Kevin Rea builds exceptional homes in Brasada Ranch, Tetherow, Pronghorn, and all Central Oregon communities.",
  "publisher": { "@id": `${BASE_URL}/#homebuilder` },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  ],
  "inLanguage": "en-US",
  "copyrightYear": new Date().getFullYear(),
  "copyrightHolder": { "@id": `${BASE_URL}/#homebuilder` }
};

const howToBuildSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Build a Custom Home in Central Oregon",
  "description": "Step-by-step guide to building a custom home in Bend, Oregon with Kevin Rea of Rea Co Homes.",
  "image": `${CDN}/hero-main_2cc4c17d.jpg`,
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "minValue": "1050000",
    "maxValue": "3500000"
  },
  "totalTime": "PT18M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Initial Consultation & Site Evaluation",
      "text": "Meet with Kevin Rea to discuss your vision, budget, and timeline. Evaluate potential lots for buildability, views, and site conditions.",
      "url": `${BASE_URL}/contact`
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Design Development with Architect",
      "text": "Work with a Central Oregon architect to develop your custom home plans. Kevin coordinates with architects to ensure constructability and value.",
      "url": `${BASE_URL}/about`
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Budgeting & Value Engineering",
      "text": "Receive a detailed cost estimate and explore value engineering options to maximize your investment without compromising quality.",
      "url": `${BASE_URL}/dream-home-builder`
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Permit Acquisition",
      "text": "Rea Co Homes manages all permit applications with Deschutes County, including building, electrical, plumbing, and mechanical permits (8-12 weeks).",
      "url": `${BASE_URL}/faq`
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Site Preparation & Foundation",
      "text": "Site clearing, grading, utility connections, and foundation work begin. Kevin personally oversees all site preparation.",
      "url": `${BASE_URL}/portfolio`
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Framing & Exterior Envelope",
      "text": "Structural framing, roofing, windows, and exterior finishes are completed, weathering in the home.",
      "url": `${BASE_URL}/portfolio`
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Mechanical Systems Installation",
      "text": "HVAC, plumbing, electrical, and smart home systems are installed and inspected.",
      "url": `${BASE_URL}/faq`
    },
    {
      "@type": "HowToStep",
      "position": 8,
      "name": "Interior Finishes & Selections",
      "text": "Flooring, cabinetry, countertops, fixtures, paint, and trim are installed based on your design selections.",
      "url": `${BASE_URL}/inspiration`
    },
    {
      "@type": "HowToStep",
      "position": 9,
      "name": "Final Inspections & Punch List",
      "text": "All systems are inspected, certificate of occupancy obtained, and final punch list items completed.",
      "url": `${BASE_URL}/contact`
    },
    {
      "@type": "HowToStep",
      "position": 10,
      "name": "Walkthrough & Move-In",
      "text": "Kevin personally walks you through your completed home, explains all systems, and hands over the keys.",
      "url": `${BASE_URL}/contact`
    }
  ]
};

function generateLocationSchema(locationName: string, locationSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${BASE_URL}/${locationSlug}#location`,
    "name": `Rea Co Homes - ${locationName} Custom Home Builder`,
    "description": `Award-winning custom home builder in ${locationName}, Central Oregon. Kevin Rea builds luxury custom homes in ${locationName} with 45+ years of experience. Call 541-390-9848.`,
    "url": `${BASE_URL}/${locationSlug}`,
    "telephone": "+1-541-390-9848",
    "email": "kevin@reacohomes.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bend",
      "addressRegion": "OR",
      "postalCode": "97701",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.0582,
      "longitude": -121.3153
    },
    "areaServed": {
      "@type": "Place",
      "name": locationName
    },
    "parentOrganization": { "@id": `${BASE_URL}/#homebuilder` },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}

function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.name,
        "item": crumb.url.startsWith("http") ? crumb.url : `${BASE_URL}${crumb.url}`
      }))
    ]
  };
}

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".speakable", "[data-speakable]"]
  },
  "url": BASE_URL
};

export default function AdvancedSEO({
  page = "home",
  locationName,
  locationSlug,
  faqs,
  breadcrumbs
}: AdvancedSEOProps) {
  const schemas: object[] = [homeBuilderSchema, websiteSchema];

  // Add speakable schema for voice search
  if (page === "home") {
    schemas.push(speakableSchema);
    schemas.push(howToBuildSchema);
  }

  // Add location-specific schema
  if (page === "location" && locationName && locationSlug) {
    schemas.push(generateLocationSchema(locationName, locationSlug));
  }

  // Add FAQ schema
  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs));
  }

  // Add breadcrumb schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export { generateFAQSchema, generateBreadcrumbSchema, generateLocationSchema };
