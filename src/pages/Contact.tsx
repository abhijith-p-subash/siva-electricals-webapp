import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT_INFO } from "@/constants/contact";
import { Seo } from "@/components/seo/Seo";
import { buildLocalBusinessSchema, buildBreadcrumbSchema } from "@/constants/seo";
import { PageHeader } from "@/components/layout/PageHeader";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Siva Electricals, I'd like to enquire about your services.",
);

export function Contact() {
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="flex min-h-screen flex-col">
      <Seo
        title="Contact Us — Electrician & Plumber in Adimali, Idukki"
        description="Contact Siva Electricals Constructions in Adimali, Idukki, Kerala for electrical & plumbing quotes, 24/7 emergency support, and service enquiries. Call +91 94472 94319 or message us on WhatsApp."
        path="/contact"
        schema={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Get in touch"
        title="We're here to help"
        description="Reach out for quotes, emergencies, or general enquiries — we usually respond the same day."
      />

      <section className="section-y container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">
                  Phone & WhatsApp
                </h3>
                <div className="mt-1 space-y-1 text-sm">
                  {CONTACT_INFO.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={`tel:${phone.value}`}
                      className="block text-muted-foreground transition-colors hover:text-primary"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1da851]"
                >
                  <MessageCircle size={15} /> Chat on WhatsApp
                </a>
                <p className="mt-1 text-xs text-muted-foreground">
                  Available 24/7 for emergencies
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">Email</h3>
                <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                  <a
                    href={`mailto:${CONTACT_INFO.email.primary}`}
                    className="block transition-colors hover:text-primary"
                  >
                    {CONTACT_INFO.email.primary}
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email.support}`}
                    className="block transition-colors hover:text-primary"
                  >
                    {CONTACT_INFO.email.support}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">Location</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {CONTACT_INFO.address.full}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock size={22} />
              </div>
              <div className="w-full">
                <h3 className="font-bold text-card-foreground">
                  Business hours
                </h3>
                <dl className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <dt>Mon – Fri</dt>
                    <dd>{CONTACT_INFO.workingHours.weekdays}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Saturday</dt>
                    <dd>{CONTACT_INFO.workingHours.saturday}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunday</dt>
                    <dd>{CONTACT_INFO.workingHours.sunday}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl font-bold text-card-foreground">
                Send us a message
              </h2>
              <p className="mb-5 mt-1 text-sm text-muted-foreground">
                Fill in the form and we'll get back to you shortly.
              </p>
              <ContactForm />
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-xl border border-border shadow-soft">
              <iframe
                src={CONTACT_INFO.mapEmbedUrl}
                title="Siva Electricals location on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
