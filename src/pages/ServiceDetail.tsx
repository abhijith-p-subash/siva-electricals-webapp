import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_BY_SLUG, SERVICE_DETAILS } from "@/constants/services";
import { Seo } from "@/components/seo/Seo";
import { CONTACT_INFO } from "@/constants/contact";

export function ServiceDetail() {
  const { slug } = useParams();
  const normalizedSlug = (slug || "")
    .trim()
    .toLowerCase()
    .replaceAll("_", "-")
    .replaceAll(" ", "-");
  const service =
    SERVICE_BY_SLUG[normalizedSlug] ||
    SERVICE_DETAILS.find((item) => item.slug.toLowerCase() === normalizedSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const primaryPhone = CONTACT_INFO.phones[0];

  return (
    <div className="flex min-h-screen flex-col">
      <Seo
        title={service.title}
        description={service.description}
        path={`/services/${service.slug}`}
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "LocalBusiness",
            name: "Siva Electricals Constructions",
          },
          areaServed: "India",
          url: `/services/${service.slug}`,
        }}
      />

      <section className="relative overflow-hidden border-b border-border bg-muted/40">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative py-14 md:py-16">
          <Link
            to="/services"
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} className="mr-1" />
            Back to services
          </Link>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            {service.description}
          </p>
        </div>
      </section>

      <section className="section-y container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl font-bold text-card-foreground">
                Service highlights
              </h2>
              <ul className="mt-4 space-y-3">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl font-bold text-card-foreground">
                What you get
              </h2>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-lg font-bold text-card-foreground">
                Our process
              </h2>
              <ol className="mt-4 space-y-4">
                {service.process.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <span className="pt-0.5 text-sm text-muted-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-soft">
              <h2 className="text-lg font-bold text-card-foreground">
                Need this service?
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Share your requirement and we'll send a tailored estimate.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button className="w-full" asChild>
                  <Link to="/quote">
                    Get a quote <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`tel:${primaryPhone.value}`}>
                    <Phone size={14} className="mr-2" />
                    {primaryPhone.display}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
