import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_BY_SLUG, SERVICE_DETAILS } from "@/constants/services";

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

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{`${service.title} | Siva Electricals Constructions`}</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            to="/services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-secondary transition-colors mb-6"
          >
            <ArrowLeft size={14} className="mr-1" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-muted-foreground max-w-3xl text-lg">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="border border-border rounded-2xl bg-card p-6">
              <h2 className="text-2xl font-bold mb-4">Service Highlights</h2>
              <ul className="space-y-3">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-secondary mt-1" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border rounded-2xl bg-card p-6">
              <h2 className="text-2xl font-bold mb-4">What You Get</h2>
              <ul className="space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-secondary mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-2xl bg-card p-6">
              <h2 className="text-xl font-bold mb-4">Our Process</h2>
              <ol className="space-y-3">
                {service.process.map((step, index) => (
                  <li key={step} className="text-muted-foreground">
                    <span className="font-semibold text-foreground mr-2">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-border rounded-2xl bg-card p-6">
              <h2 className="text-xl font-bold mb-3">Need This Service?</h2>
              <p className="text-muted-foreground text-sm mb-5">
                Share your requirement and we will provide a tailored estimate.
              </p>
              <Button className="w-full" asChild>
                <Link to="/quote">
                  Get a Quote <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
