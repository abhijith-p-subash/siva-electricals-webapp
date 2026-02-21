import { Zap, Droplet, ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SERVICE_DETAILS } from "@/constants/services";
import type { ServiceCategory } from "@/constants/services";
import type { ReactNode } from "react";

function ServiceSection({
  id,
  title,
  icon,
  iconClassName,
  borderClassName,
  category,
}: {
  id: string;
  title: string;
  icon: ReactNode;
  iconClassName: string;
  borderClassName: string;
  category: ServiceCategory;
}) {
  const services = SERVICE_DETAILS.filter((service) => service.category === category);

  return (
    <section id={id} className="py-20 container mx-auto px-4 md:px-6">
      <div className="flex items-center gap-4 mb-12">
        <div className={`p-3 rounded-xl ${iconClassName}`}>{icon}</div>
        <h2 className="text-3xl font-heading font-bold">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.slug}
            className={`p-6 border border-border rounded-xl bg-card ${borderClassName} transition-colors`}
          >
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-secondary" />
              {service.title}
            </h3>
            <p className="text-muted-foreground ml-7 leading-relaxed mb-5">
              {service.shortDescription}
            </p>
            <Link
              to={`/services/${service.slug}`}
              className="inline-flex ml-7 items-center text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              View Details <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Our Services | Siva Electricals Constructions</title>
        <meta
          name="description"
          content="Comprehensive electrical and plumbing services: wiring, panel upgrades, leak detection, pipe installation, and more."
        />
      </Helmet>
      {/* Page Header */}
      <section className="bg-muted/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive electrical and plumbing solutions delivered by
            certified experts.
          </p>
        </div>
      </section>

      <ServiceSection
        id="electrical"
        title="Electrical Services"
        icon={<Zap size={32} />}
        iconClassName="bg-secondary/10 text-secondary"
        borderClassName="hover:border-secondary/50"
        category="electrical"
      />

      <div className="container mx-auto px-4">
        <div className="h-px bg-border w-full" />
      </div>

      <ServiceSection
        id="plumbing"
        title="Plumbing Services"
        icon={<Droplet size={32} />}
        iconClassName="bg-blue-500/10 text-blue-500"
        borderClassName="hover:border-blue-500/50"
        category="plumbing"
      />

      <div className="container mx-auto px-4">
        <div className="h-px bg-border w-full" />
      </div>

      <ServiceSection
        id="specialized"
        title="Maintenance & Commercial Services"
        icon={<Wrench size={32} />}
        iconClassName="bg-orange-500/10 text-orange-500"
        borderClassName="hover:border-orange-500/50"
        category="specialized"
      />

      {/* CTA Section */}
      <section className="py-20 bg-muted/40 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            We handle projects of all sizes. Contact us today to discuss your
            specific requirements.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get a Quote <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
