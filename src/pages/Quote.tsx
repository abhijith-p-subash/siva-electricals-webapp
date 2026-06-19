import { ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Seo } from "@/components/seo/Seo";
import { PageHeader } from "@/components/layout/PageHeader";

const assurances = [
  { icon: Clock, label: "Fast, same-day response" },
  { icon: BadgeCheck, label: "Free, no-obligation estimate" },
  { icon: ShieldCheck, label: "Certified & insured technicians" },
];

export function Quote() {
  return (
    <div className="flex min-h-screen flex-col">
      <Seo
        title="Request a Quote"
        description="Request a detailed quote for electrical and plumbing services from Siva Electricals Constructions."
        path="/quote"
      />

      <PageHeader
        eyebrow="Free estimate"
        title="Request a quote"
        description="Tell us about your project and we'll get back to you with a clear, detailed estimate."
      >
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {assurances.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80"
            >
              <Icon size={18} className="text-primary" />
              {label}
            </li>
          ))}
        </ul>
      </PageHeader>

      <section className="section-y container max-w-3xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
