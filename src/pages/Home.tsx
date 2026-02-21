import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Seo } from "@/components/seo/Seo";
import { CONTACT_INFO } from "@/constants/contact";

export function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Siva Electricals Constructions",
    url: "/",
    telephone: CONTACT_INFO.phones.map((phone) => phone.value),
    email: CONTACT_INFO.email.primary,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.zip,
      addressCountry: CONTACT_INFO.address.country,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Expert Electrical & Plumbing Services"
        description="Reliable residential and commercial electrical and plumbing services. Certified experts for wiring, smart homes, leak detection, and more. Get a quote today."
        path="/"
        schema={schema}
      />

      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
    </div>
  );
}
