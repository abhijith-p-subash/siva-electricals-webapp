import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/constants/company";

export function Testimonials() {
  return (
    <section className="section-y bg-muted/50">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Customer reviews</span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            What our customers say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real feedback from homeowners and businesses we've helped across
            Idukki.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-soft"
            >
              <Quote size={28} className="text-primary/30" />
              <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 flex-grow text-sm leading-relaxed text-card-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
