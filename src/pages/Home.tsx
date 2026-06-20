import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
// import { Clients } from "@/components/sections/Clients"; // hidden for now — re-enable to show the client logos
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Seo } from "@/components/seo/Seo";
import {
  buildLocalBusinessSchema,
  buildWebSiteSchema,
  buildFaqSchema,
} from "@/constants/seo";

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Seo
        title="Electrician & Plumber in Adimali, Idukki | Electrical & Plumbing Services"
        description="Siva Electricals Constructions provides trusted electrical & plumbing services in Adimali, Munnar & across Idukki, Kerala — wiring, panel upgrades, smart homes, leak detection & 24/7 emergency repairs. Get a free quote today."
        path="/"
        schema={[
          buildLocalBusinessSchema(),
          buildWebSiteSchema(),
          buildFaqSchema(),
        ]}
      />

      <Hero />
      <StatsBand />
      {/* <Clients /> */}
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Faq />
      <CtaBand />
    </div>
  );
}
