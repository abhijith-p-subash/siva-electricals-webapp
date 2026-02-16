import { Zap, Droplet, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: Zap,
    title: "Electrical Services",
    description:
      "Complete wiring, panel upgrades, and smart home installations for safety and efficiency.",
    link: "/services#electrical",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Droplet,
    title: "Plumbing Solutions",
    description:
      "Expert detailed leak detection, pipe repair, and installation for residential and commercial needs.",
    link: "/services#plumbing",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Wrench,
    title: "Maintenance Contracts",
    description:
      "Regular check-ups and preventative maintenance to keep your systems running smoothly.",
    link: "/services#maintenance",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspections",
    description:
      "Thorough electrical and plumbing inspections to ensure compliance and peace of mind.",
    link: "/about",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
];

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
            key={index}
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
              {service.title}
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              {service.description}
            </p>
            <Link
              to={service.link}
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
