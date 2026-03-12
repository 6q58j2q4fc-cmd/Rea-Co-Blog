/**
 * LocalBusiness JSON-LD Structured Data Component
 * Enhanced with comprehensive E-E-A-T signals, all service areas,
 * awards, credentials, and rich review data for maximum rich snippet eligibility
 * Uses canonical domain: bendoregonluxuryhomebuilder.com
 */

import { useEffect } from "react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk";
const BASE_URL = "https://bendoregonluxuryhomebuilder.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  "name": "Rea Co Homes",
  "alternateName": [
    "Rea Company Homes",
    "Kevin Rea Custom Homes",
    "ReaCo Homes",
    "Rea Custom Homes",
    "Kevin Rea Builder"
  ],
  "description": "Award-winning luxury custom home builder in Bend Oregon since 1977. Kevin Rea builds exceptional homes in Central Oregon's premier communities including Brasada Ranch, Tetherow, Pronghorn, Broken Top, and Awbrey Butte. CCB #193427.",
  "url": BASE_URL,
  "telephone": "+1-541-390-9848",
  "email": "kevin@reacohomes.com",
  "foundingDate": "1977",
  "founder": {
    "@type": "Person",
    "@id": `${BASE_URL}/#kevin-rea`,
    "name": "Kevin Rea",
    "jobTitle": "Master Custom Home Builder & Owner",
    "description": "Award-winning custom home builder with 45+ years of experience in Central Oregon. Winner of multiple Best of Show awards and the Earth Hero Award for sustainable building.",
    "telephone": "+1-541-390-9848",
    "email": "kevin@reacohomes.com",
    "url": `${BASE_URL}/about`,
    "image": `${CDN}/kevin-rea_e5f6g7h8.webp`,
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Oregon Contractor License CCB #193427"
    },
    "award": [
      "Best of Show - Realtors Tour of Homes (2x)",
      "Earth Hero Award - Sustainable Building Practices",
      "Governor's Livability Award - Village Wistoria",
      "American Concrete Association Best Practice Award"
    ],
    "knowsAbout": [
      "Custom Home Construction",
      "Luxury Home Building",
      "High Desert Architecture",
      "Mountain Contemporary Design",
      "Sustainable Building Practices",
      "Central Oregon Real Estate",
      "Golf Community Homes",
      "Earth Advantage Certification",
      "LEED Building Principles",
      "Deschutes County Building Codes"
    ]
  },
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
  "hasMap": "https://maps.google.com/?q=Rea+Co+Homes+Bend+Oregon",
  "areaServed": [
    { "@type": "City", "name": "Bend", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Redmond", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Sisters", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Sunriver", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "La Pine", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Prineville", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "City", "name": "Tumalo", "containedInPlace": { "@type": "State", "name": "Oregon" } },
    { "@type": "Place", "name": "Brasada Ranch", "containedInPlace": { "@type": "City", "name": "Powell Butte, Oregon" } },
    { "@type": "Place", "name": "Tetherow" },
    { "@type": "Place", "name": "Pronghorn" },
    { "@type": "Place", "name": "Broken Top" },
    { "@type": "Place", "name": "Awbrey Butte" },
    { "@type": "Place", "name": "Caldera Springs" },
    { "@type": "Place", "name": "Black Butte Ranch" },
    { "@type": "Place", "name": "Juniper Preserve" },
    { "@type": "Place", "name": "Northwest Crossing" },
    { "@type": "Place", "name": "Awbrey Glen" },
    { "@type": "Place", "name": "Eagle Crest Resort" },
    { "@type": "Place", "name": "Crosswater" },
    { "@type": "Place", "name": "Aspen Lakes" },
    { "@type": "Place", "name": "River Rim" },
    { "@type": "Place", "name": "Summit West" },
    { "@type": "Place", "name": "Widgi Creek" },
    { "@type": "Place", "name": "Shevlin Commons" },
    { "@type": "Place", "name": "The Highlands at Broken Top" },
    { "@type": "AdministrativeArea", "name": "Central Oregon" },
    { "@type": "AdministrativeArea", "name": "Deschutes County, Oregon" },
    { "@type": "AdministrativeArea", "name": "Crook County, Oregon" },
    { "@type": "AdministrativeArea", "name": "Jefferson County, Oregon" }
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
  "priceRange": "$$$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Check, Wire Transfer, Construction Loan",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.reacohomes.com",
    "https://www.facebook.com/reacohomes",
    "https://www.instagram.com/reacohomes",
    "https://www.linkedin.com/company/rea-company-homes",
    "https://www.houzz.com/professionals/general-contractors/rea-co-homes"
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
          "serviceType": "Custom Home Building"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Golf Community Homes",
          "description": "Luxury custom homes in Brasada Ranch, Tetherow, Pronghorn, and other premier Central Oregon golf communities."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sustainable Green Home Building",
          "description": "Earth Advantage certified custom homes with solar panels, geothermal systems, and smart home integration."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Renovation & Additions",
          "description": "Major renovations and additions to existing luxury homes in Central Oregon."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pre-Construction Consulting",
          "description": "Expert guidance on lot selection, plan review, cost estimation, and value engineering before breaking ground."
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
  "award": [
    "Best of Show - Realtors Tour of Homes (2x)",
    "Earth Hero Award for Sustainable Building Practices",
    "Governor's Livability Award - Village Wistoria",
    "American Concrete Association Best Practice Award"
  ],
  "slogan": "Building Central Oregon's Most Exceptional Custom Homes Since 1977",
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
    "Deschutes County Building Codes",
    "Oregon CCB Licensing",
    "Construction Loan Financing",
    "HOA Architectural Review Compliance"
  ],
  "image": [
    `${CDN}/hero-main_2cc4c17d.jpg`,
    `${CDN}/kevin-rea_e5f6g7h8.webp`,
    `${CDN}/reaco-hero-portfolio_980a56c9.webp`,
    `${CDN}/chiaramonte-hero-exterior_d6a8fd30.webp`,
    `${CDN}/mccartney-exterior_e5caf5be.webp`
  ],
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/logo.png`,
    "width": 200,
    "height": 60
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 10
  }
};

export default function LocalBusinessSchema() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[data-schema="local-business"]');
    if (existingScript) return;

    // Create and inject the JSON-LD script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", "local-business");
    script.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[data-schema="local-business"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
