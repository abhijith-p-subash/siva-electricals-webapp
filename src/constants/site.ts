export const SITE_CONFIG = {
  name: "Siva Electricals Constructions",
  defaultTitle: "Expert Electrical & Plumbing Services",
  defaultDescription:
    "Reliable residential and commercial electrical and plumbing services including wiring, maintenance, leak repair, and smart installations.",
  fallbackSiteUrl: "https://www.sivaelectricals.co.in",
  defaultOgImage: "/vite.svg",
};

export function normalizeBaseUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

