import { COMPANY_STATS } from "@/constants/company";

export function StatsBand() {
  return (
    <section className="border-y border-border bg-secondary text-secondary-foreground">
      <div className="container py-10 md:py-12">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-heading text-3xl font-bold text-accent md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-secondary-foreground/70">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
