import React from 'react';
import { Helmet } from 'react-helmet-async';

const DEFAULT_TITLE = "HDC MA | Horizon Digital Core Management Associates";
const DEFAULT_DESC = "Horizon Digital Core Management Associates (HDC MA) delivers enterprise-grade software, AI-powered applications, cloud solutions, and scalable digital transformation platforms.";
const DEFAULT_KEYWORDS = "HDC MA, Horizon Digital Core, enterprise software, AI solutions, cloud infrastructure, digital transformation, custom software, systems integration";
const SITE_URL = "https://www.horizondigitalcore.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/hero.png`;

function SEO({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  path = "",
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  ogTitle,
  ogDescription,
  twitterCard = "summary_large_image",
  robots = "index, follow",
  schema
}) {
  const fullTitle = title ? `${title} | HDC MA` : DEFAULT_TITLE;
  const canonical = `${SITE_URL}${path}`;

  // Default Structured Data (Schema.org)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    "@id": `${SITE_URL}/#organization`,
    "name": "Horizon Digital Core Management Associates",
    "alternateName": "HDC MA",
    "url": SITE_URL,
    "logo": `${SITE_URL}/apple-touch-icon.png`,
    "sameAs": [
      "https://github.com/hdcma",
      "https://linkedin.com/company/hdcma"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "customer service",
      "availableLanguage": "en"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": "HDC MA",
    "publisher": {
      "@id": `${SITE_URL}/#organization`
    }
  };

  return (
    <Helmet>
      {/* Basic Title & Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="HDC MA" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;
