import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/constants/contact";
import { FOOTER_SERVICE_LINKS, SERVICE_BY_SLUG } from "@/constants/services";

const socials = [
  { icon: Facebook, href: CONTACT_INFO.socialLinks.facebook, label: "Facebook" },
  { icon: Instagram, href: CONTACT_INFO.socialLinks.instagram, label: "Instagram" },
  { icon: Twitter, href: CONTACT_INFO.socialLinks.twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container pb-8 pt-16">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-2xl font-heading font-bold"
            >
              <img
                src="/site-icon.svg"
                alt="Siva Electricals logo"
                className="h-8 w-8"
              />
              <span>
                Siva <span className="text-accent">Electricals</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-secondary-foreground/70">
              Trusted electrical and plumbing contracting for homes and
              businesses across Adimali and Idukki. Safe, reliable, and
              professional — every time.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-secondary-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-secondary-foreground/90">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
                { to: "/quote", label: "Get a Quote" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-secondary-foreground/90">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              {FOOTER_SERVICE_LINKS.filter(
                (item) => SERVICE_BY_SLUG[item.slug],
              ).map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/services/${item.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-secondary-foreground/90">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>{CONTACT_INFO.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                <div className="space-y-1">
                  {CONTACT_INFO.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={`tel:${phone.value}`}
                      className="block transition-colors hover:text-accent"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-accent" />
                <a
                  href={`mailto:${CONTACT_INFO.email.primary}`}
                  className="transition-colors hover:text-accent"
                >
                  {CONTACT_INFO.email.primary}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  Mon–Sat: {CONTACT_INFO.workingHours.weekdays}
                  <br />
                  Sun: {CONTACT_INFO.workingHours.sunday}
                </span>
              </li>
            </ul>
            <Button variant="accent" size="sm" className="mt-2 w-full" asChild>
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Siva Electricals Constructions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
