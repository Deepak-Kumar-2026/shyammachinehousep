import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  cityName?: string;
  productName?: string;
  locationProductCombo?: { city: string; product: string };
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Shyam Machine House | Official Industrial Workshop Machinery & CNC Coil Winder Manufacturer',
  description = 'Shyam Machine House (www.shyammachine.com) is India\'s premier manufacturer & supplier of CNC Coil Winding Machines, Transformer Winding Equipment, Soldering Pots, All Geared Lathes, Radial Drills, Milling Machines & Power Presses. Direct factory pricing in DELHI, NOIDA, KARNATAKA, TAMIL NADU, and MAHARASHTRA.',
  keywords = [
    'Shyam Machine House',
    'www.shyammachine.com',
    'Shyam Machine Tools',
    'CNC Coil Winding Machine Manufacturer',
    'Transformer Coil Winding Machine Supplier',
    'Soldering Pot Manufacturer India',
    'Lathe Machine Supplier Delhi',
    'Machine Tools Karnataka Peenya',
    'Industrial Machinery Supplier Noida',
    'Machine Tools Tamil Nadu Chennai Coimbatore',
    'Lathe Machine Price Maharashtra Mumbai Pune',
    'GST 07AFHFS7121Q1ZE'
  ],
  cityName,
  productName,
  locationProductCombo
}) => {
  useEffect(() => {
    let finalTitle = title;
    let finalDescription = description;
    let finalKeywords = [...keywords];

    if (locationProductCombo) {
      finalTitle = `${locationProductCombo.product} in ${locationProductCombo.city} | Price & Specs - Shyam Machine House`;
      finalDescription = `Buy official ${locationProductCombo.product} in ${locationProductCombo.city}. Direct factory rates, Grade-1 precision, fast delivery, GST tax invoice, and on-site setup by Shyam Machine House.`;
      finalKeywords = [
        `${locationProductCombo.product} ${locationProductCombo.city}`,
        `Buy ${locationProductCombo.product} in ${locationProductCombo.city}`,
        `${locationProductCombo.product} Supplier ${locationProductCombo.city}`,
        `Shyam Machine House ${locationProductCombo.city}`,
        ...keywords
      ];
    } else if (productName && cityName) {
      finalTitle = `${productName} in ${cityName} | Official Supplier & Price | Shyam Machine House`;
      finalDescription = `Official supplier of ${productName} in ${cityName}. Direct factory dispatch, Grade-1 accuracy testing, GST billing, and local technician support.`;
      finalKeywords = [
        `${productName} ${cityName}`,
        `${productName} Price ${cityName}`,
        `${productName} Manufacturer ${cityName}`,
        ...keywords
      ];
    } else if (productName) {
      finalTitle = `${productName} Specification, Technical Data & Price | Shyam Machine House`;
      finalDescription = `Explore ${productName} by Shyam Machine House (www.shyammachine.com). Grade-1 industrial build, heavy duty motors, digital controls, 1 year warranty and direct factory quote.`;
      finalKeywords = [
        `${productName}`,
        `${productName} Price`,
        `${productName} Specification`,
        `${productName} Manufacturer`,
        ...keywords
      ];
    } else if (cityName) {
      finalTitle = `Industrial Machinery Supplier in ${cityName} | Shyam Machine House (DELHI, NOIDA, KARNATAKA, TAMIL NADU, MAHARASHTRA)`;
      finalDescription = `Leading official supplier of CNC Coil Winders, Transformer Coil Winders, Soldering Pots, Lathe Machines, Milling Machines, Radial Drills, and Power Presses in ${cityName}. Express delivery and on-site installation.`;
      finalKeywords = [
        `Industrial Machinery Supplier ${cityName}`,
        `Machine Tools ${cityName}`,
        `Lathe Machine Supplier ${cityName}`,
        `CNC Coil Winder ${cityName}`,
        `Soldering Pot Supplier ${cityName}`,
        ...keywords
      ];
    }

    // Set Document Title
    document.title = finalTitle;

    // Helper to set or update meta tag
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Meta Description & Keywords
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'keywords', finalKeywords.join(', '));
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'author', 'Shyam Machine House');
    setMetaTag('name', 'geo.region', 'IN-DL');
    setMetaTag('name', 'geo.placename', 'New Delhi');

    // OpenGraph Meta Tags
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', window.location.href);
    setMetaTag('property', 'og:site_name', 'Shyam Machine House');
    setMetaTag('property', 'og:image', 'https://www.shyammachine.com/logo.png');

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', window.location.href.split('?')[0]);

    // JSON-LD Structured Data Schema for LocalBusiness & Product Catalog
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "IndustrialBusiness",
          "@id": "https://www.shyammachine.com/#organization",
          "name": "Shyam Machine House",
          "alternateName": ["Shyam Machine Tools", "SHYAM MACHINE HOUSE NEW DELHI"],
          "url": "https://www.shyammachine.com/",
          "logo": "https://www.shyammachine.com/logo.png",
          "image": "https://www.shyammachine.com/logo.png",
          "telephone": "+91-9899746674",
          "email": "Shyammachinetools@gmail.com",
          "vatID": "07AFHFS7121Q1ZE",
          "taxID": "07AFHFS7121Q1ZE",
          "priceRange": "₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "First Floor, 1/4717, Gali No 4 & 5 Balbir Nagar Extn, Near Durga Puri Chowk, Shahdara",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110032",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.6725,
            "longitude": 77.2885
          },
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "DELHI" },
            { "@type": "AdministrativeArea", "name": "NOIDA" },
            { "@type": "AdministrativeArea", "name": "KARNATAKA" },
            { "@type": "AdministrativeArea", "name": "TAMIL NADU" },
            { "@type": "AdministrativeArea", "name": "MAHARASHTRA" }
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "19:00"
          },
          "sameAs": [
            "https://www.shyammachine.com/",
            "https://youtube.com/@shyammachinehouse5758"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.shyammachine.com/#website",
          "url": "https://www.shyammachine.com/",
          "name": "Shyam Machine House",
          "publisher": { "@id": "https://www.shyammachine.com/#organization" }
        }
      ]
    };

    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);

  }, [title, description, keywords, cityName, productName, locationProductCombo]);

  return null;
};

