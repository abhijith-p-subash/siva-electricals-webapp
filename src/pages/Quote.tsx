import { QuoteForm } from "@/components/forms/QuoteForm";
import { Seo } from "@/components/seo/Seo";

export function Quote() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Request a Quote"
        description="Request a detailed quote for electrical and plumbing services from Siva Electricals Constructions."
        path="/quote"
      />
      <section className="bg-muted/30 py-12 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Request a Quote
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tell us about your project, and we'll get back to you with a
            detailed estimate.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 container mx-auto px-4 max-w-3xl">
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
