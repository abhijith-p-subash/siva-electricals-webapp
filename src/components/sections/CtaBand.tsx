import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/constants/contact";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = "Ready to get started?",
  description = "Tell us about your project and get a free, no-obligation estimate. Same-day response for most enquiries.",
}: CtaBandProps) {
  const primaryPhone = CONTACT_INFO.phones[0];

  return (
    <section className="section-y bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-secondary px-6 py-14 text-center text-secondary-foreground md:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-secondary-foreground/75">{description}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/quote">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="accent" asChild>
                <a href={`tel:${primaryPhone.value}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {primaryPhone.display}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
