import { CheckCircle2, Clock, ShieldCheck, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    description:
      "Certified professionals handling every project safely and to code.",
  },
  {
    icon: Clock,
    title: "On-time, every time",
    description:
      "We respect your schedule and deliver quality work on the agreed timeline.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction guaranteed",
    description:
      "We stand behind our work. Your satisfaction is our top priority.",
  },
  {
    icon: CheckCircle2,
    title: "Quality materials",
    description:
      "Only durable, trusted materials for long-lasting, reliable results.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-y bg-muted/50">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent/15 blur-lg" />
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
              alt="Electrician working on a project"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-card ring-1 ring-border"
            />
          </div>

          {/* Text Side */}
          <div>
            <span className="eyebrow">Why Siva Electricals</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Reliable work, honest people
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We bring expertise, reliability, and a commitment to excellence to
              every project — big or small.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-card p-5 shadow-soft"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <reason.icon size={22} />
                  </div>
                  <h3 className="mb-1 font-bold text-card-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
