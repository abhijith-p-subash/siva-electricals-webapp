import { useState } from "react";
import { motion } from "framer-motion";
import { CLIENTS } from "@/constants/clients";
import type { Client } from "@/constants/clients";

function ClientCell({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);
  const showImage = client.logo && !failed;

  const content = showImage ? (
    <img
      src={client.logo}
      alt={client.name}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="max-h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  ) : (
    <span className="text-center text-sm font-bold uppercase tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-slate-800 sm:text-base">
      {client.short}
    </span>
  );

  // Uniform white tile so every logo — whatever its own background — sits on a
  // consistent surface and stays readable in both light and dark themes.
  const cell = (
    <div className="group flex h-32 items-center justify-center overflow-hidden rounded-xl border border-border bg-white px-4 py-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
      {content}
    </div>
  );

  if (client.url) {
    return (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        title={client.name}
        aria-label={client.name}
      >
        {cell}
      </a>
    );
  }
  return <div title={client.name}>{cell}</div>;
}

export function Clients() {
  return (
    <section className="section-y bg-background">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Our clients</span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Trusted by leading organisations
          </h2>
          <p className="mt-4 text-muted-foreground">
            From government departments and banks to manufacturers across Kerala,
            our work is trusted where reliability and safety matter most.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: (index % 5) * 0.06 }}
              viewport={{ once: true }}
            >
              <ClientCell client={client} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
