import { Zap, Droplet, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HOME_SERVICE_SLUGS, SERVICE_BY_SLUG } from "@/constants/services";

const services = [
  { icon: Zap, slug: HOME_SERVICE_SLUGS[0] },
  { icon: Droplet, slug: HOME_SERVICE_SLUGS[1] },
  { icon: Wrench, slug: HOME_SERVICE_SLUGS[2] },
  { icon: ShieldCheck, slug: HOME_SERVICE_SLUGS[3] },
]
  .map((item) => ({ ...item, service: SERVICE_BY_SLUG[item.slug] }))
  .filter(
    (
      item,
    ): item is typeof item & {
      service: NonNullable<(typeof item)["service"]>;
    } => Boolean(item.service),
  );

export function ServicesOverview() {
  return (
    <section className="section-y bg-background">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Our core services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive solutions for all your electrical and plumbing needs,
            backed by years of hands-on expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/services/${item.service.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">
                  {item.service.title}
                </h3>
                <p className="mb-5 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {item.service.shortDescription}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View all services <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
