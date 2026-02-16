import { Zap, Droplet, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const electricalServices = [
  {
    title: "Wiring & Rewiring",
    description:
      "Complete home and office wiring solutions, ensuring safety and code compliance for new builds or renovations.",
  },
  {
    title: "Panel Upgrades",
    description:
      "Modernize your electrical panel to handle increased power loads and improve safety.",
  },
  {
    title: "Smart Home Installation",
    description:
      "Integration of smart lighting, thermostats, and security systems for a connected home.",
  },
  {
    title: "Lighting Design",
    description:
      "Indoor and outdoor lighting solutions to enhance aesthetics and functionality.",
  },
];

const plumbingServices = [
  {
    title: "Leak Detection & Repair",
    description:
      "Advanced technology to locate and fix leaks quickly, preventing water damage.",
  },
  {
    title: "Pipe Installation",
    description:
      "Professional piping for water supply, drainage, and gas lines in residential and commercial properties.",
  },
  {
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance of tankless and traditional water heaters.",
  },
  {
    title: "Drain Cleaning",
    description:
      "Effective solutions for clogged drains to restore proper flow and hygiene.",
  },
];

export function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Our Services | Siva Electricals Constructions</title>
        <meta
          name="description"
          content="Comprehensive electrical and plumbing services: wiring, panel upgrades, leak detection, pipe installation, and more."
        />
      </Helmet>
      {/* Page Header */}
      <section className="bg-muted/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive electrical and plumbing solutions delivered by
            certified experts.
          </p>
        </div>
      </section>

      {/* Electrical Section */}
      <section id="electrical" className="py-20 container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
            <Zap size={32} />
          </div>
          <h2 className="text-3xl font-heading font-bold">
            Electrical Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {electricalServices.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl bg-card hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-secondary" />
                {service.title}
              </h3>
              <p className="text-muted-foreground ml-7 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="h-px bg-border w-full" />
      </div>

      {/* Plumbing Section */}
      <section id="plumbing" className="py-20 container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
            <Droplet size={32} />
          </div>
          <h2 className="text-3xl font-heading font-bold">Plumbing Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plumbingServices.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-xl bg-card hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-blue-500" />
                {service.title}
              </h3>
              <p className="text-muted-foreground ml-7 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/40 text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            We handle projects of all sizes. Contact us today to discuss your
            specific requirements.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get a Quote <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
