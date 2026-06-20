// ============================================================================
// Static per-route SEO pre-rendering (pure Node — no headless browser).
//
// Runs as `postbuild`. It takes the built dist/index.html (the homepage shell,
// already containing full meta + JSON-LD + a <noscript> content block) and
// writes a dedicated dist/<route>/index.html for every other route, swapping
// in route-specific <title>, meta description, canonical, Open Graph/Twitter
// tags, JSON-LD, and <noscript> content.
//
// Why this instead of react-snap / a headless browser:
//   - react-snap pins a 2018 Chromium that cannot parse modern JS (optional
//     chaining), so it silently prerenders nothing, and it ships critical CVEs.
//   - This approach is dependency-free, deterministic, fast, and runs anywhere
//     (incl. Netlify) with no Chromium download.
//
// Crawlers (Google + AI engines like GPTBot/PerplexityBot/ClaudeBot that do not
// execute JS) now get correct, unique metadata, structured data, and readable
// text for EVERY route. The React app still hydrates the full UI for users.
//
// Keep the facts here in sync with src/constants/* and public/llms.txt.
// ============================================================================

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const SITE = "https://www.sivaelectricals.co.in";
const BRAND = "Siva Electricals Constructions";
const OG_IMAGE = `${SITE}/site-icon.svg`;
const ORG_ID = `${SITE}/#organization`;

// --- Shared facts ----------------------------------------------------------

const AREAS = [
  "Adimali",
  "Munnar",
  "Thodupuzha",
  "Idukki",
  "Kattappana",
  "Nedumkandam",
  "Rajakkad",
  "Devikulam",
];
const areaServed = AREAS.map((name) => ({ "@type": "City", name }));

// Mirrors src/constants/services.ts (title, slug, short + full description).
const SERVICES = [
  ["electrical-services", "Electrical Services", "Complete wiring, panel, and safety solutions for homes and businesses.", "Our electrical team handles end-to-end electrical work for new construction, renovation, and upgrades, focusing on code compliance, load planning, and reliable long-term performance."],
  ["wiring-rewiring", "Wiring & Rewiring", "Safe and efficient wiring for new builds, remodels, and old systems.", "Complete wiring and rewiring services to improve safety, power distribution, and reliability — ideal for older properties, expansions, and full renovations."],
  ["panel-upgrades", "Panel Upgrades", "Upgrade electrical panels to support modern load demands safely.", "We upgrade and reconfigure electrical panels to improve safety, performance, and expandability under today's appliance loads."],
  ["smart-home-installation", "Smart Home Installation", "Integrated smart control systems for lighting, comfort, and security.", "We design and install smart home setups that simplify control of lighting, climate, and safety systems, planned for stability and future upgrades."],
  ["lighting-design", "Lighting Design", "Practical and aesthetic indoor/outdoor lighting planning and execution.", "We create lighting plans that improve visibility, comfort, and energy efficiency while matching the style of your home or workspace."],
  ["plumbing-solutions", "Plumbing Solutions", "End-to-end plumbing installation, repair, and preventive services.", "Installation, repair, and long-term maintenance for residential and commercial plumbing systems with fast issue resolution."],
  ["leak-detection-repair", "Leak Detection & Repair", "Pinpoint hidden leaks and repair quickly to prevent structural damage.", "We detect visible and concealed leaks using practical diagnostics, then perform focused repairs to stop water loss and prevent recurrence."],
  ["pipe-installation", "Pipe Installation", "Durable and clean piping installation for water supply and drainage.", "We install piping networks for new and renovated properties, ensuring proper pressure, slope, and joint quality for dependable flow."],
  ["water-heater-services", "Water Heater Services", "Install, repair, and maintain tank and tankless water heater systems.", "Full support for water heater systems — new installations, breakdown repairs, and routine maintenance for energy-efficient operation."],
  ["drain-cleaning", "Drain Cleaning", "Clear slow or blocked drains and restore proper system flow.", "We resolve drainage blockages efficiently for kitchens, bathrooms, and external lines while helping reduce recurrence."],
  ["maintenance-contracts", "Maintenance Contracts", "Scheduled preventive checks for electrical and plumbing systems.", "Maintenance contracts (AMC) that reduce downtime and emergency repairs through planned inspections, servicing, and proactive issue handling."],
  ["safety-inspections", "Safety Inspections", "Comprehensive compliance-focused audits for electrical and plumbing safety.", "Detailed safety inspections to identify hazards, non-compliance points, and operational risks, with clear corrective recommendations."],
  ["commercial-contracts", "Commercial Contracts", "Reliable long-term electrical and plumbing execution for business sites.", "Structured commercial contracts for offices, retail spaces, and industrial units covering installations, upgrades, and maintenance."],
];

// --- Escaping helpers ------------------------------------------------------

const escAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const escHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// JSON-LD is embedded raw; only neutralize "</script>" style breakouts.
const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

function breadcrumb(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path}`,
    })),
  };
}

// --- Route definitions -----------------------------------------------------

function serviceRoute([slug, title, short, desc]) {
  const path = `/services/${slug}`;
  const fullTitle = `${title} in Adimali & Idukki, Kerala | ${BRAND}`;
  const description = `${short} Trusted ${title.toLowerCase()} by ${BRAND} in Adimali, Munnar & across Idukki, Kerala. Certified technicians, transparent pricing, 24/7 support.`;
  return {
    path,
    title: fullTitle,
    description,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: title,
        serviceType: title,
        description: desc,
        url: `${SITE}${path}`,
        provider: { "@id": ORG_ID },
        areaServed,
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: title, path },
      ]),
    ],
    noscript: `<h1>${escHtml(title)} in Adimali &amp; Idukki, Kerala</h1>
      <p>${escHtml(desc)}</p>
      <p>Provided by ${BRAND}, a trusted electrical &amp; plumbing contractor in Adimali, Idukki, Kerala. Serving ${AREAS.join(", ")}.</p>
      <p>Call <a href="tel:+919447294319">+91 94472 94319</a> or <a href="/quote">request a free quote</a>.</p>`,
  };
}

const ROUTES = [
  {
    path: "/services",
    title: `Electrical & Plumbing Services in Adimali & Idukki | ${BRAND}`,
    description:
      "Full-service electrical & plumbing solutions in Adimali, Munnar and across Idukki, Kerala: house wiring & rewiring, panel upgrades, smart homes, lighting, leak detection, pipe installation, water heaters, drain cleaning, AMC & commercial contracts.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Electrical & Plumbing Services",
        itemListElement: SERVICES.map(([slug, title, short], i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: title,
          description: short,
          url: `${SITE}/services/${slug}`,
        })),
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
    ],
    noscript: `<h1>Electrical &amp; Plumbing Services in Adimali &amp; Idukki, Kerala</h1>
      <p>${BRAND} offers comprehensive electrical and plumbing services for homes and businesses across ${AREAS.join(", ")}.</p>
      <ul>${SERVICES.map(([slug, title, short]) => `<li><a href="/services/${slug}">${escHtml(title)}</a> — ${escHtml(short)}</li>`).join("\n      ")}</ul>
      <p>Call <a href="tel:+919447294319">+91 94472 94319</a> or <a href="/quote">request a free quote</a>.</p>`,
  },
  {
    path: "/about",
    title: `About Us — Trusted Electricians & Plumbers in Idukki | ${BRAND}`,
    description:
      "Siva Electricals Constructions is a trusted local electrical & plumbing contractor in Adimali, Idukki, Kerala. Certified technicians, years of experience, and a safety-first commitment to homes and businesses.",
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
    noscript: `<h1>About Siva Electricals Constructions</h1>
      <p>${BRAND} is a trusted electrical and plumbing contractor based in Adimali, Idukki, Kerala. We provide reliable, code-compliant, safety-first work for residential, commercial, and industrial clients across ${AREAS.join(", ")}.</p>
      <p>Call <a href="tel:+919447294319">+91 94472 94319</a> · <a href="/services">Our services</a> · <a href="/contact">Contact us</a>.</p>`,
  },
  {
    path: "/contact",
    title: `Contact Us — Electrician & Plumber in Adimali, Idukki | ${BRAND}`,
    description:
      "Contact Siva Electricals Constructions in Adimali, Idukki, Kerala for electrical & plumbing quotes, 24/7 emergency support, and service enquiries. Call +91 94472 94319 or message us on WhatsApp.",
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
    noscript: `<h1>Contact Siva Electricals Constructions</h1>
      <p>Phone: <a href="tel:+919447294319">+91 94472 94319</a>, <a href="tel:+919562294319">+91 95622 94319</a>. WhatsApp: +91 94472 94319.</p>
      <p>Email: <a href="mailto:contact@sivaelectricals.co.in">contact@sivaelectricals.co.in</a>.</p>
      <p>Address: Achuthamenon Road, Adimali, Idukki, Kerala 685561, India. Hours: Mon–Fri 8:00 AM–6:00 PM, Sat 9:00 AM–4:00 PM, Sun emergency only. 24/7 emergency support.</p>`,
  },
  {
    path: "/quote",
    title: `Request a Free Quote — Electrical & Plumbing in Idukki | ${BRAND}`,
    description:
      "Get a free, no-obligation quote for electrical & plumbing work in Adimali, Munnar and across Idukki, Kerala. Same-day response from certified, insured technicians at Siva Electricals Constructions.",
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Get a Quote", path: "/quote" },
      ]),
    ],
    noscript: `<h1>Request a Free Electrical &amp; Plumbing Quote</h1>
      <p>Tell ${BRAND} about your project for a free, no-obligation estimate with a same-day response. Serving ${AREAS.join(", ")}.</p>
      <p>Call <a href="tel:+919447294319">+91 94472 94319</a> or email <a href="mailto:contact@sivaelectricals.co.in">contact@sivaelectricals.co.in</a>.</p>`,
  },
  ...SERVICES.map(serviceRoute),
];

// --- Transform & write -----------------------------------------------------

function applyRoute(template, route) {
  const url = `${SITE}${route.path}`;
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escHtml(route.title)}</title>`);
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?>/,
    `<meta name="description" content="${escAttr(route.description)}" />`,
  );
  html = html.replace(
    /<link\s+rel="canonical"[\s\S]*?>/,
    `<link rel="canonical" href="${url}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:title"[\s\S]*?>/,
    `<meta property="og:title" content="${escAttr(route.title)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?>/,
    `<meta property="og:description" content="${escAttr(route.description)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:url"[\s\S]*?>/,
    `<meta property="og:url" content="${url}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:title"[\s\S]*?>/,
    `<meta name="twitter:title" content="${escAttr(route.title)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?>/,
    `<meta name="twitter:description" content="${escAttr(route.description)}" />`,
  );

  const schemaTags = route.schema
    .map((s) => `<script type="application/ld+json">${jsonLd(s)}</script>`)
    .join("\n    ");
  html = html.replace(
    /<!-- SEO:SCHEMA:START[\s\S]*?SEO:SCHEMA:END -->/,
    `<!-- SEO:SCHEMA -->\n    ${schemaTags}\n    <!-- /SEO:SCHEMA -->`,
  );

  html = html.replace(
    /<!-- SEO:NOSCRIPT:START[\s\S]*?SEO:NOSCRIPT:END -->/,
    `<noscript>\n      ${route.noscript}\n    </noscript>`,
  );

  return html;
}

async function run() {
  const template = await readFile(join(DIST, "index.html"), "utf8");

  // Sanity check: bail loudly if the markers/og tags are missing, so a future
  // index.html change can't silently disable per-route SEO.
  for (const marker of ["SEO:SCHEMA:START", "SEO:NOSCRIPT:START", 'property="og:title"']) {
    if (!template.includes(marker)) {
      throw new Error(`prerender-seo: expected marker "${marker}" not found in dist/index.html`);
    }
  }

  let count = 0;
  for (const route of ROUTES) {
    const outDir = join(DIST, route.path);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), applyRoute(template, route), "utf8");
    count++;
  }

  console.log(`prerender-seo: wrote ${count} static route pages.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
