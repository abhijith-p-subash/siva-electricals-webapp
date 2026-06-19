// Marketing/content data for the site.
// NOTE: Stats and testimonials below are placeholders — replace with the
// owner's real numbers, reviews, and customer names before going live.

export type Stat = {
  value: string;
  label: string;
};

export const COMPANY_STATS: Stat[] = [
  { value: "15+", label: "Years of experience" },
  { value: "2,500+", label: "Projects completed" },
  { value: "4.9★", label: "Average customer rating" },
  { value: "24/7", label: "Emergency support" },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Book a visit",
    description:
      "Call, WhatsApp, or request a quote online. We respond fast and schedule at your convenience.",
  },
  {
    title: "On-site assessment",
    description:
      "A certified technician inspects the site, understands your needs, and shares a clear estimate.",
  },
  {
    title: "Expert execution",
    description:
      "We complete the work safely and cleanly using quality materials, with progress updates throughout.",
  },
  {
    title: "Testing & handover",
    description:
      "Every job is tested for safety and performance, then handed over with maintenance guidance.",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh K.",
    location: "Adimali",
    rating: 5,
    quote:
      "Rewired our entire house with zero mess and finished ahead of schedule. The team was punctual, polite, and explained everything clearly.",
  },
  {
    name: "Anitha Thomas",
    location: "Munnar",
    rating: 5,
    quote:
      "Had a hidden water leak for weeks. They found and fixed it the same day. Honest pricing and genuinely helpful.",
  },
  {
    name: "Suresh Menon",
    location: "Idukki",
    rating: 5,
    quote:
      "We use them for our shop's annual maintenance contract. Reliable, responsive, and always on time. Highly recommended.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const FAQS: Faq[] = [
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Adimali and the wider Idukki district, including Munnar, Thodupuzha, and nearby towns. Contact us to confirm coverage for your location.",
  },
  {
    question: "Do you handle emergency call-outs?",
    answer:
      "Yes. We offer 24/7 support for electrical and plumbing emergencies such as power failures, short circuits, and major leaks. Call us any time.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer:
      "All our work is carried out by certified, experienced technicians following safety and code-compliance standards for both residential and commercial sites.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Request a quote through our online form, call us, or message us on WhatsApp. We'll assess your requirement and share a clear, itemised estimate.",
  },
  {
    question: "Do you take on both small repairs and large projects?",
    answer:
      "Absolutely. From a single switchboard repair to full-building electrical and plumbing installations and commercial contracts, we handle projects of every size.",
  },
];

// Options for the quote form's service dropdown, aligned to real service slugs.
export const QUOTE_SERVICE_OPTIONS = [
  { value: "electrical-services", label: "Electrical Services" },
  { value: "wiring-rewiring", label: "Wiring & Rewiring" },
  { value: "panel-upgrades", label: "Panel Upgrades" },
  { value: "smart-home-installation", label: "Smart Home Installation" },
  { value: "lighting-design", label: "Lighting Design" },
  { value: "plumbing-solutions", label: "Plumbing Solutions" },
  { value: "leak-detection-repair", label: "Leak Detection & Repair" },
  { value: "pipe-installation", label: "Pipe Installation" },
  { value: "water-heater-services", label: "Water Heater Services" },
  { value: "drain-cleaning", label: "Drain Cleaning" },
  { value: "maintenance-contracts", label: "Maintenance Contracts" },
  { value: "safety-inspections", label: "Safety Inspections" },
  { value: "commercial-contracts", label: "Commercial Contracts" },
  { value: "other", label: "Other / Not sure" },
] as const;
