export type ServiceCategory = "electrical" | "plumbing" | "specialized";

export type ServiceDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ServiceCategory;
  highlights: string[];
  deliverables: string[];
  process: string[];
};

export type ServiceLinkItem = {
  label: string;
  slug: string;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "electrical-services",
    title: "Electrical Services",
    shortDescription:
      "Complete wiring, panel, and safety solutions for homes and businesses.",
    description:
      "Our electrical team handles end-to-end electrical work for new construction, renovation, and upgrades. We focus on code compliance, load planning, safe installation, and reliable long-term performance.",
    category: "electrical",
    highlights: [
      "Certified technicians with code-compliant installations",
      "Safe load calculation and circuit balancing",
      "Residential and commercial project support",
    ],
    deliverables: [
      "Site assessment and scope confirmation",
      "Electrical layout and material planning",
      "Installation, testing, and safety verification",
      "Handover with maintenance recommendations",
    ],
    process: [
      "Inspection and requirement gathering",
      "Design and estimate approval",
      "Execution with progress updates",
      "Testing, commissioning, and handover",
    ],
  },
  {
    slug: "wiring-rewiring",
    title: "Wiring & Rewiring",
    shortDescription:
      "Safe and efficient wiring for new builds, remodels, and old systems.",
    description:
      "We provide complete wiring and rewiring services to improve safety, power distribution, and reliability. Ideal for older properties, expansion projects, and full-scale renovations.",
    category: "electrical",
    highlights: [
      "New wiring for homes, offices, and shops",
      "Rewiring for damaged or outdated systems",
      "Structured routing with clean finishing",
    ],
    deliverables: [
      "Circuit-wise rewiring plan",
      "Concealed or surface wiring execution",
      "Protection devices and grounding checks",
      "Final continuity and load tests",
    ],
    process: [
      "Existing network audit",
      "Phased rewiring plan",
      "Execution with minimal disruption",
      "Final safety and performance checks",
    ],
  },
  {
    slug: "panel-upgrades",
    title: "Panel Upgrades",
    shortDescription:
      "Upgrade electrical panels to support modern load demands safely.",
    description:
      "Old electrical panels can become unsafe under today’s appliance loads. We upgrade and reconfigure panels to improve safety, performance, and expandability.",
    category: "electrical",
    highlights: [
      "Main panel and sub-panel upgrades",
      "Breaker configuration and labeling",
      "Load redistribution for stability",
    ],
    deliverables: [
      "Panel capacity assessment",
      "Approved upgrade plan and components",
      "Installation with surge and breaker protection",
      "Commissioning and documentation",
    ],
    process: [
      "Load study and panel diagnosis",
      "Upgrade planning and material finalization",
      "Panel replacement/reconfiguration",
      "Functional and safety validation",
    ],
  },
  {
    slug: "smart-home-installation",
    title: "Smart Home Installation",
    shortDescription:
      "Integrated smart control systems for lighting, comfort, and security.",
    description:
      "We design and install smart home setups that simplify control of lighting, climate, and safety systems. The setup is planned for stability, easy use, and future upgrades.",
    category: "electrical",
    highlights: [
      "Smart lighting and automation setup",
      "Device integration and app configuration",
      "Scalable setup for future expansion",
    ],
    deliverables: [
      "System design based on property layout",
      "Device installation and pairing",
      "Automation scenes and scheduling setup",
      "User training and handover support",
    ],
    process: [
      "Requirement mapping and compatibility check",
      "Network and wiring readiness",
      "Device install and integration",
      "Testing, optimization, and training",
    ],
  },
  {
    slug: "lighting-design",
    title: "Lighting Design",
    shortDescription:
      "Practical and aesthetic indoor/outdoor lighting planning and execution.",
    description:
      "We create lighting plans that improve visibility, comfort, and energy efficiency while matching the visual style of your home or workspace.",
    category: "electrical",
    highlights: [
      "Ambient, task, and accent lighting layouts",
      "Energy-efficient fixture recommendations",
      "Indoor and landscape lighting execution",
    ],
    deliverables: [
      "Lighting concept with fixture suggestions",
      "Wiring and switch plan",
      "Installation and focus alignment",
      "Final brightness and coverage checks",
    ],
    process: [
      "Space and usage analysis",
      "Design proposal and refinement",
      "Installation and beam calibration",
      "Final walkthrough and adjustments",
    ],
  },
  {
    slug: "plumbing-solutions",
    title: "Plumbing Solutions",
    shortDescription:
      "End-to-end plumbing installation, repair, and preventive services.",
    description:
      "Our plumbing team covers installation, repair, and long-term maintenance for residential and commercial systems with a focus on reliability and quick issue resolution.",
    category: "plumbing",
    highlights: [
      "Fast diagnosis and repair execution",
      "Residential and commercial plumbing support",
      "Long-term reliability with preventive practices",
    ],
    deliverables: [
      "Site diagnosis and issue mapping",
      "Repair/replacement proposal",
      "Quality execution and pressure checks",
      "Maintenance recommendations",
    ],
    process: [
      "System assessment",
      "Scope and estimate confirmation",
      "Repair/installation execution",
      "Leak and flow performance testing",
    ],
  },
  {
    slug: "leak-detection-repair",
    title: "Leak Detection & Repair",
    shortDescription:
      "Pinpoint hidden leaks and repair quickly to prevent structural damage.",
    description:
      "We detect visible and concealed leaks using practical diagnostic methods, then perform focused repairs to stop water loss and prevent recurring issues.",
    category: "plumbing",
    highlights: [
      "Concealed and exposed leak tracing",
      "Targeted repair to reduce breakage",
      "Moisture-risk reduction and prevention",
    ],
    deliverables: [
      "Leak source identification report",
      "Repair with appropriate materials",
      "Post-repair pressure test",
      "Preventive action checklist",
    ],
    process: [
      "Leak tracing and cause analysis",
      "Repair plan finalization",
      "Corrective repair execution",
      "Validation and monitoring advice",
    ],
  },
  {
    slug: "pipe-installation",
    title: "Pipe Installation",
    shortDescription:
      "Durable and clean piping installation for water supply and drainage.",
    description:
      "We install piping networks for new and renovated properties, ensuring proper pressure, slope, and joint quality for long-term dependable flow.",
    category: "plumbing",
    highlights: [
      "Fresh installations and partial rerouting",
      "Material selection based on use case",
      "Precision alignment and secure joints",
    ],
    deliverables: [
      "Piping layout and route planning",
      "Supply and drainage pipeline execution",
      "Joint integrity and pressure testing",
      "Commission-ready handover",
    ],
    process: [
      "Requirement and route planning",
      "Material and fitting preparation",
      "Installation and connection",
      "Pressure and flow validation",
    ],
  },
  {
    slug: "water-heater-services",
    title: "Water Heater Services",
    shortDescription:
      "Install, repair, and maintain tank and tankless water heater systems.",
    description:
      "We provide full support for water heater systems, including new installations, breakdown repairs, and routine maintenance for energy-efficient operation.",
    category: "plumbing",
    highlights: [
      "Installation for tank and tankless units",
      "Thermostat and heating issue troubleshooting",
      "Preventive descaling and maintenance support",
    ],
    deliverables: [
      "Capacity planning based on usage",
      "Safe inlet/outlet and electrical integration",
      "Performance calibration",
      "Maintenance plan and safety checks",
    ],
    process: [
      "System review and capacity matching",
      "Installation/repair with safety controls",
      "Performance and temperature tuning",
      "Usage and maintenance guidance",
    ],
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    shortDescription:
      "Clear slow or blocked drains and restore proper system flow.",
    description:
      "We resolve drainage blockages efficiently with the right cleaning approach for kitchens, bathrooms, and external lines while helping reduce recurrence.",
    category: "plumbing",
    highlights: [
      "Quick unclogging for common block points",
      "Root-cause detection for recurring issues",
      "Flow restoration with hygiene-focused methods",
    ],
    deliverables: [
      "Drain condition inspection",
      "Mechanical/chemical cleaning as required",
      "Flow testing and verification",
      "Prevention recommendations",
    ],
    process: [
      "Drain assessment",
      "Blockage removal",
      "Deep clean and flush",
      "Flow confirmation and preventive advice",
    ],
  },
  {
    slug: "maintenance-contracts",
    title: "Maintenance Contracts",
    shortDescription:
      "Scheduled preventive checks for electrical and plumbing systems.",
    description:
      "Our maintenance contracts are designed to reduce downtime and emergency repairs through planned inspections, servicing, and proactive issue handling.",
    category: "specialized",
    highlights: [
      "Periodic inspection schedules",
      "Priority support for contract clients",
      "Preventive repairs and optimization",
    ],
    deliverables: [
      "Customized maintenance calendar",
      "Routine inspection and service logs",
      "Minor corrective actions during visits",
      "Quarterly health summary",
    ],
    process: [
      "Asset and risk assessment",
      "Plan creation and visit cadence setup",
      "Routine service execution",
      "Review and continuous improvements",
    ],
  },
  {
    slug: "safety-inspections",
    title: "Safety Inspections",
    shortDescription:
      "Comprehensive compliance-focused audits for electrical and plumbing safety.",
    description:
      "We conduct detailed safety inspections to identify hazards, non-compliance points, and operational risks, then provide clear corrective recommendations.",
    category: "specialized",
    highlights: [
      "Electrical and plumbing safety audits",
      "Compliance and risk gap identification",
      "Actionable correction roadmap",
    ],
    deliverables: [
      "Inspection checklist and findings report",
      "Priority-based corrective recommendations",
      "Safety improvement guidance",
      "Re-inspection support if needed",
    ],
    process: [
      "On-site safety inspection",
      "Risk classification and reporting",
      "Recommendation handover",
      "Follow-up verification support",
    ],
  },
  {
    slug: "commercial-contracts",
    title: "Commercial Contracts",
    shortDescription:
      "Reliable long-term electrical and plumbing execution for business sites.",
    description:
      "We support offices, retail spaces, and industrial units with structured commercial contracts covering installations, upgrades, and maintenance.",
    category: "specialized",
    highlights: [
      "Scalable teams for multi-site projects",
      "Project scheduling aligned with operations",
      "Defined SLA and communication workflow",
    ],
    deliverables: [
      "Scope planning and site coordination",
      "Execution timelines and milestone tracking",
      "Quality and safety review checkpoints",
      "Ongoing support and reporting",
    ],
    process: [
      "Requirement workshop and contract scope",
      "Deployment planning",
      "Execution and supervision",
      "SLA-based support and review",
    ],
  },
];

export const SERVICE_BY_SLUG = SERVICE_DETAILS.reduce<
  Record<string, ServiceDetail>
>((acc, service) => {
  acc[service.slug] = service;
  return acc;
}, {});

export const HOME_SERVICE_SLUGS: string[] = [
  "electrical-services",
  "plumbing-solutions",
  "maintenance-contracts",
  "safety-inspections",
];

export const FOOTER_SERVICE_LINKS: ServiceLinkItem[] = [
  { label: "Electrical Wiring", slug: "wiring-rewiring" },
  { label: "Plumbing Solutions", slug: "plumbing-solutions" },
  { label: "Smart Home Setup", slug: "smart-home-installation" },
  { label: "Maintenance", slug: "maintenance-contracts" },
  { label: "Commercial Contracts", slug: "commercial-contracts" },
];
