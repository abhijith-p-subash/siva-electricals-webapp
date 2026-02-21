import { Zap, Droplet, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HOME_SERVICE_SLUGS, SERVICE_BY_SLUG } from "@/constants/services";

const services = [
  {
    icon: Zap,
    slug: HOME_SERVICE_SLUGS[0],
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Droplet,
    slug: HOME_SERVICE_SLUGS[1],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Wrench,
    slug: HOME_SERVICE_SLUGS[2],
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: ShieldCheck,
    slug: HOME_SERVICE_SLUGS[3],
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
]
  .map((item) => ({
    ...item,
    service: SERVICE_BY_SLUG[item.slug],
  }))
  .filter(
    (
      item,
    ): item is (typeof item & {
      service: NonNullable<(typeof item)["service"]>;
    }) => Boolean(item.service),
  );

export function ServicesOverview() {
  return (
    <section className="py-20 bg-background container mx-auto px-4 md:px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Our Core Services
        </h2>
        <p className="text-muted-foreground">
          We provide comprehensive solutions for all your electrical and
          plumbing needs, backed by years of expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl border border-border bg-card hover:border-secondary/50 transition-colors"
          >
            <div
              className={`w-12 h-12 rounded-lg ${service.bg} ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <service.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
              {service.service.title}
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              {service.service.shortDescription}
            </p>
            <Link
              to={`/services/${service.service.slug}`}
              className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              Learn More <ArrowRight size={14} className="ml-1" />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg" asChild>
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    </section>
  );
}
