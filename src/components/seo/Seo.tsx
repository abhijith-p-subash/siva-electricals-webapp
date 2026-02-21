import { Helmet } from "react-helmet-async";
import { SITE_CONFIG, normalizeBaseUrl } from "@/constants/site";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

function getSiteUrl() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return normalizeBaseUrl(window.location.origin);
  }
  const fromEnv = import.meta.env.VITE_SITE_URL || SITE_CONFIG.fallbackSiteUrl;
  return normalizeBaseUrl(fromEnv);
}

export function Seo({
  title,
  description,
  path = "/",
  image = SITE_CONFIG.defaultOgImage,
  type = "website",
  noIndex = false,
  schema,
}: SeoProps) {
  const siteUrl = getSiteUrl();
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.defaultTitle} | ${SITE_CONFIG.name}`;
  const fullDescription = description || SITE_CONFIG.defaultDescription;
  const canonical = `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Helmet>
  );
}

