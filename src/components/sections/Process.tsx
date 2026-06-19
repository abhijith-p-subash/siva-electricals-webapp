import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/constants/company";

export function Process() {
  return (
    <section className="section-y bg-background">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Simple, transparent process
          </h2>
          <p className="mt-4 text-muted-foreground">
            From your first call to final handover, we keep things clear,
            on-time, and hassle-free.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="font-heading text-4xl font-bold text-primary/25">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
