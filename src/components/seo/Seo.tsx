import { Helmet } from "react-helmet-async";
import { SITE_CONFIG, normalizeBaseUrl } from "@/constants/site";
import { CONTACT_INFO } from "@/constants/contact";
import { SEO_KEYWORDS } from "@/constants/seo";

type SchemaObject = Record<string, unknown>;

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  keywords?: string;
  /** One schema object or an array — each is emitted as its own JSON-LD block. */
  schema?: SchemaObject | SchemaObject[];
};

function getSiteUrl() {
  const fromEnv = import.meta.env.VITE_SITE_URL;
  if (fromEnv) {
    return normalizeBaseUrl(fromEnv);
  }

  if (typeof window !== "undefined" && window.location?.origin) {
    return normalizeBaseUrl(window.location.origin);
  }

  return normalizeBaseUrl(SITE_CONFIG.fallbackSiteUrl);
}

export function Seo({
  title,
  description,
  path = "/",
  image = SITE_CONFIG.defaultOgImage,
  type = "website",
  noIndex = false,
  keywords = SEO_KEYWORDS,
  schema,
}: SeoProps) {
  const siteUrl = getSiteUrl();
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.defaultTitle} | ${SITE_CONFIG.name}`;
  const fullDescription = description || SITE_CONFIG.defaultDescription;
  const canonical = `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  let schemas: SchemaObject[] = [];
  if (schema) {
    schemas = Array.isArray(schema) ? schema : [schema];
  }

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_CONFIG.name} />
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={canonical} />

      {/* Local / geo signals */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Adimali, Idukki, Kerala" />
      <meta
        name="geo.position"
        content={`${CONTACT_INFO.geo.latitude};${CONTACT_INFO.geo.longitude}`}
      />
      <meta
        name="ICBM"
        content={`${CONTACT_INFO.geo.latitude}, ${CONTACT_INFO.geo.longitude}`}
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((entry) => {
        const json = JSON.stringify(entry);
        return (
          <script type="application/ld+json" key={json.slice(0, 80)}>
            {json}
          </script>
        );
      })}
    </Helmet>
  );
}
