// ============================================================================
// Centralized SEO / structured-data (JSON-LD) builders.
//
// These power both classic search (Google rich results) and "Generative Engine
// Optimization" (GEO) — i.e. being cited by ChatGPT, Perplexity, Gemini, and
// other AI answer engines, which lean heavily on clean schema + factual copy.
//
// Keep facts here in sync with the static copies baked into:
//   - index.html  (<script type="application/ld+json"> + <noscript>)
//   - public/llms.txt
// ============================================================================

import { CONTACT_INFO } from "@/constants/contact";
import { SITE_CONFIG } from "@/constants/site";
import { SERVICE_DETAILS } from "@/constants/services";
import { FAQS } from "@/constants/company";

const SITE_URL = SITE_CONFIG.fallbackSiteUrl;

// Stable @id so every page references the SAME business entity (helps search
// engines and LLMs build one consistent knowledge-graph node).
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** High-intent keywords blending service + location for local + AI search. */
export const SEO_KEYWORDS = [
  "electrician in Adimali",
  "plumber in Adimali",
  "electrical services Idukki",
  "plumbing services Idukki",
  "electrician Munnar",
  "plumber Munnar",
  "house wiring Adimali",
  "rewiring Idukki",
  "electrical panel upgrade Kerala",
  "smart home installation Kerala",
  "leak detection and repair Idukki",
  "water heater installation Adimali",
  "drain cleaning Idukki",
  "24/7 emergency electrician Kerala",
  "commercial electrical contractor Kerala",
  "electrical safety inspection Idukki",
  "Siva Electricals Constructions",
].join(", ");

/** Profiles to declare as the business's official presence (sameAs). */
function sameAs(): string[] {
  const links = [
    CONTACT_INFO.socialLinks.facebook,
    CONTACT_INFO.socialLinks.instagram,
    CONTACT_INFO.socialLinks.twitter,
    CONTACT_INFO.mapLocation,
  ];
  // Drop unset placeholders ("#") so we never publish dead links.
  return links.filter((url) => url && url !== "#");
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.state,
    postalCode: CONTACT_INFO.address.zip,
    addressCountry: CONTACT_INFO.address.countryCode,
  };
}

function openingHoursSpecification() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ];
}

/**
 * The core business entity. Modeled as Electrician (a recognized
 * LocalBusiness subtype) so Google/AI can classify the trade precisely.
 */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Electrician", "Plumber", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE_CONFIG.name,
    alternateName: "Siva Electricals",
    description: SITE_CONFIG.defaultDescription,
    url: SITE_URL,
    telephone: CONTACT_INFO.phones.map((phone) => phone.value),
    email: CONTACT_INFO.email.primary,
    image: `${SITE_URL}${SITE_CONFIG.defaultOgImage}`,
    logo: `${SITE_URL}${SITE_CONFIG.defaultOgImage}`,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT_INFO.geo.latitude,
      longitude: CONTACT_INFO.geo.longitude,
    },
    hasMap: CONTACT_INFO.mapLocation,
    areaServed: CONTACT_INFO.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: openingHoursSpecification(),
    sameAs: sameAs(),
    knowsLanguage: ["en", "ml"],
    slogan: SITE_CONFIG.defaultTitle,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical & Plumbing Services",
      itemListElement: SERVICE_DETAILS.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `${SITE_URL}/services/${service.slug}`,
        },
      })),
    },
  };
}

/** WebSite node with a SearchAction (sitelinks search box eligibility). */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_CONFIG.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/** FAQPage — strong for both Google FAQ rich results and AI answer citation. */
export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type Crumb = { name: string; path: string };

/** BreadcrumbList for a given trail of crumbs. */
export function buildBreadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

/** Per-service Service schema linked back to the business entity. */
export function buildServiceSchema(service: (typeof SERVICE_DETAILS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: CONTACT_INFO.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.deliverables.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}
