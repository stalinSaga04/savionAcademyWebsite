export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sanvion Academy",
    "description": "Best IT training institute in Bangalore. Industry-focused IT training for Service Desk, Technical Support, MIM, and Career Readiness.",
    "url": "https://sanvionacademy.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-96299-98846",
      "contactType": "Customer Service",
      "email": "santhakumardevan@gmail.com",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": []
  }

  const courseSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Service Desk Fundamentals",
      "description": "Service Desk Fundamentals course in Bangalore. ITIL basics, ticketing systems, SLA/KPI understanding.",
      "provider": {
        "@type": "Organization",
        "name": "Sanvion Academy",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      "courseLocation": {
        "@type": "Place",
        "name": "Bangalore",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Technical Support Training",
      "description": "Technical Support Training course in Bangalore. Hardware & software troubleshooting, Windows basics, network fundamentals.",
      "provider": {
        "@type": "Organization",
        "name": "Sanvion Academy",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      "courseLocation": {
        "@type": "Place",
        "name": "Bangalore",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Major Incident Management (MIM) Mastery",
      "description": "MIM Mastery course in Bangalore. Incident lifecycle, bridge calls, stakeholder communication, root cause analysis.",
      "provider": {
        "@type": "Organization",
        "name": "Sanvion Academy",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      "courseLocation": {
        "@type": "Place",
        "name": "Bangalore",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "IT Career Readiness Program",
      "description": "IT Career Readiness Program in Bangalore. Resume building, interview preparation, workplace communication.",
      "provider": {
        "@type": "Organization",
        "name": "Sanvion Academy",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      "courseLocation": {
        "@type": "Place",
        "name": "Bangalore",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      }
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {courseSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
