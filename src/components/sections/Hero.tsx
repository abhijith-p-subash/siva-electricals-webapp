import { ArrowRight, Phone, ShieldCheck, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/constants/contact";

const trustPoints = [
  { icon: ShieldCheck, label: "Certified & insured" },
  { icon: Clock, label: "24/7 emergency support" },
  { icon: Wrench, label: "Electrical & plumbing" },
];

export function Hero() {
  const primaryPhone = CONTACT_INFO.phones[0];

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <div className="container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow"
          >
            Adimali · Idukki · Kerala
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Trusted electrical & plumbing experts for your{" "}
            <span className="text-primary">home and business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-muted-foreground"
          >
            From wiring and panel upgrades to leak repair and smart installations
            — certified technicians, honest pricing, and reliable service you can
            count on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" asChild>
              <Link to="/quote">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${primaryPhone.value}`}>
                <Phone className="mr-2 h-4 w-4" />
                {primaryPhone.display}
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                <Icon size={18} className="text-primary" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
            alt="Certified technician carrying out electrical work"
            loading="eager"
            className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-card ring-1 ring-border"
          />
          {/* Floating trust card */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-card backdrop-blur sm:left-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-success/15 text-success">
              <ShieldCheck size={22} />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight text-card-foreground">
                Satisfaction guaranteed
              </p>
              <p className="text-xs text-muted-foreground">
                Quality work, done right
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
