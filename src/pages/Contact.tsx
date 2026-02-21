import { Mail, Phone, MapPin, Clock } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT_INFO } from "@/constants/contact";
import { Seo } from "@/components/seo/Seo";

export function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Contact Us"
        description="Contact Siva Electricals Constructions for electrical and plumbing quotes, emergency support, and service inquiries."
        path="/contact"
      />
      {/* Header */}
      <section className="bg-muted/30 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're here to help. Reach out for quotes, emergencies, or general
            inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Get in Touch
            </h2>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Phone & WhatsApp</h3>
                <div className="text-muted-foreground space-y-1">
                  {CONTACT_INFO.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={`tel:${phone.value}`}
                      className="block hover:text-secondary transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  Available 24/7 for emergencies
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email</h3>
                <p className="text-muted-foreground">
                  {CONTACT_INFO.email.primary}
                </p>
                <p className="text-muted-foreground">
                  {CONTACT_INFO.email.support}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Location</h3>
                <p className="text-muted-foreground">
                  {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}
                </p>
                <p className="text-muted-foreground">
                  {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip},{" "}
                  {CONTACT_INFO.address.country}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Business Hours</h3>
                <div className="grid grid-cols-2 gap-x-8 text-muted-foreground text-sm">
                  <span>Mon - Fri:</span>{" "}
                  <span>{CONTACT_INFO.workingHours.weekdays}</span>
                  <span>Saturday:</span>{" "}
                  <span>{CONTACT_INFO.workingHours.saturday}</span>
                  <span>Sunday:</span>{" "}
                  <span>{CONTACT_INFO.workingHours.sunday}</span>
                </div>
              </div>
            </div>

            {/* <div className="pt-6">
              <Button size="lg" className="w-full md:w-auto">
                Schedule a Service
              </Button>
            </div> */}
          </div>

          {/* Map & Form */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
              <ContactForm />
            </div>

            <div className="bg-muted/10 rounded-2xl border border-border overflow-hidden h-[300px] relative">
              <iframe
                key={1233}
                src={CONTACT_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
