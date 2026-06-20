import { Zap, Droplet, ArrowRight, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { SERVICE_DETAILS } from "@/constants/services";
import type { ServiceCategory } from "@/constants/services";
import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbSchema } from "@/constants/seo";
import { SITE_CONFIG } from "@/constants/site";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/sections/CtaBand";

function ServiceSection({
  id,
  title,
  description,
  icon,
  category,
}: {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  category: ServiceCategory;
}) {
  const services = SERVICE_DETAILS.filter(
    (service) => service.category === category,
  );

  return (
    <section id={id} className="section-y container">
      <div className="mb-10 flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="mt-1 max-w-2xl text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
          >
            <h3 className="text-lg font-bold text-card-foreground">
              {service.title}
            </h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
              {service.shortDescription}
            </p>
            <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
              View details
              <ArrowRight
                size={14}
                className="ml-1 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <Seo
        title="Electrical & Plumbing Services in Adimali & Idukki"
        description="Full-service electrical & plumbing solutions in Adimali, Munnar and across Idukki, Kerala: house wiring & rewiring, panel upgrades, smart homes, lighting, leak detection, pipe installation, water heaters, drain cleaning, AMC & commercial contracts."
        path="/services"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Electrical & Plumbing Services",
            itemListElement: SERVICE_DETAILS.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              description: service.shortDescription,
              url: `${SITE_CONFIG.fallbackSiteUrl}/services/${service.slug}`,
            })),
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Our services"
        title="Electrical & plumbing, done right"
        description="Comprehensive solutions delivered by certified experts — for homes, shops, and commercial sites."
      />

      <ServiceSection
        id="electrical"
        title="Electrical Services"
        description="Safe, code-compliant electrical work from wiring to smart automation."
        icon={<Zap size={28} />}
        category="electrical"
      />

      <div className="border-t border-border bg-muted/40">
        <ServiceSection
          id="plumbing"
          title="Plumbing Services"
          description="Installation, repair, and maintenance that keeps water flowing reliably."
          icon={<Droplet size={28} />}
          category="plumbing"
        />
      </div>

      <ServiceSection
        id="specialized"
        title="Maintenance & Commercial"
        description="Preventive contracts, safety audits, and scalable support for businesses."
        icon={<Wrench size={28} />}
        category="specialized"
      />

      <CtaBand
        title="Need a custom solution?"
        description="We handle projects of all sizes. Tell us your requirement and we'll tailor an estimate for you."
      />
    </div>
  );
}
