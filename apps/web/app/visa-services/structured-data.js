export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bazaari.com/#organization",
      "name": "Bazaari Thailand Visa Services",
      "url": "https://bazaari.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bazaari.com/logo.png",
        "width": 300,
        "height": 100
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+66-99-353-3556",
        "contactType": "customer service",
        "availableLanguage": ["English", "Thai", "Chinese", "Japanese"],
        "areaServed": "TH",
        "email": "visa@bazaari.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "19/18 Soi Sukhumvit 13 (Saeng Chan), Sukhumvit Road",
        "addressLocality": "Khlong Toei Nuea",
        "addressRegion": "Watthana District",
        "postalCode": "10110",
        "addressCountry": "TH"
      },
      "sameAs": [
        "https://facebook.com/bazaari",
        "https://twitter.com/bazaari",
        "https://instagram.com/bazaari"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://bazaari.com/visa-services/#service",
      "name": "Thailand Visa Services",
      "description": "Professional Thailand visa assistance for foreigners seeking tourist, work, education, retirement, and family visas with 98% success rate",
      "provider": {
        "@id": "https://bazaari.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Thailand"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Thailand Visa Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thailand Tourist Visa",
              "description": "60-day single entry tourist visa for leisure travel to Thailand"
            },
            "price": "2000",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thailand Work Visa (Non-B)",
              "description": "Non-immigrant B visa for employment in Thailand"
            },
            "price": "8500",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thailand Retirement Visa (Non-O)",
              "description": "Non-immigrant O visa for retirees over 50 years old"
            },
            "price": "6500",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thailand Education Visa (Non-ED)",
              "description": "Non-immigrant ED visa for students studying in Thailand"
            },
            "price": "5500",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thailand Work Permit Application",
              "description": "Complete work permit application assistance for foreign workers"
            },
            "price": "12000",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thailand Company Registration",
              "description": "Complete company registration services for foreign investors"
            },
            "price": "25000",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thailand Marriage Registration",
              "description": "Legal marriage registration services for foreign nationals"
            },
            "price": "8500",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thailand 1-Year Multiple Entry Visa",
              "description": "Long-term multiple entry visa for frequent travelers"
            },
            "price": "15000",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Law Consultation Thailand",
              "description": "Professional legal consultation and lawyer arrangement"
            },
            "price": "5500",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Security Services Thailand",
              "description": "Professional bodyguard and personal protection services"
            },
            "price": "15000",
            "priceCurrency": "THB",
            "availability": "https://schema.org/InStock"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1247",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://bazaari.com/visa-services/#webpage",
      "url": "https://bazaari.com/visa-services",
      "name": "Thailand Visa Services | Professional Visa Assistance for Foreigners",
      "description": "Expert Thailand visa services for tourists, workers, students, and retirees. 98% success rate, fast processing, document preparation. Get your Thai visa today!",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://bazaari.com/#website"
      },
      "about": {
        "@id": "https://bazaari.com/visa-services/#service"
      },
      "mainEntity": {
        "@id": "https://bazaari.com/visa-services/#service"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://bazaari.com/#website",
      "url": "https://bazaari.com",
      "name": "Bazaari",
      "description": "Multi-service platform for Thailand: Visa services, Hotels, Food delivery, Healthcare, Real estate, and more",
      "publisher": {
        "@id": "https://bazaari.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://bazaari.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to get a Thailand visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Processing times vary by nationality and visa type. Tourist visas typically take 3-7 working days, while work and other non-immigrant visas may take 7-15 working days."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a visa to visit Thailand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your nationality. Citizens of many countries can enter Thailand visa-free for 30 days. However, if you plan to stay longer or for specific purposes like work or study, you'll need a visa."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need for a Thailand visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common requirements include a valid passport (6+ months validity), passport photos, flight bookings, accommodation proof, and financial statements. Specific requirements vary by visa type and nationality."
          }
        },
        {
          "@type": "Question",
          "name": "Can you guarantee visa approval?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While we have a 98% success rate, visa approval ultimately depends on the Thai embassy/consulate. We provide expert guidance to maximize your chances of approval and offer a money-back guarantee if your application is rejected due to our error."
          }
        }
      ]
    }
  ]
};