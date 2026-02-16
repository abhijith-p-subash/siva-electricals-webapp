import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>
          Siva Electricals Constructions | Expert Electrical & Plumbing Services
        </title>
        <meta
          name="description"
          content="Reliable residential and commercial electrical and plumbing services. Certified experts for wiring, smart homes, leak detection, and more. Get a quote today."
        />
      </Helmet>

      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
    </div>
  );
}
