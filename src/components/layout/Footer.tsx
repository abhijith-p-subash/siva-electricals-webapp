import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-muted/10 text-primary-foreground pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">
              Siva <span className="text-secondary">Electricals</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium electrical and plumbing contracting services for
              residential and commercial projects. Safe, reliable, and
              professional.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors"
                >
                  Electrical Wiring
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors"
                >
                  Plumbing Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors"
                >
                  Smart Home Setup
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-secondary transition-colors"
                >
                  Commercial Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>123 Contractor Lane, Build City, BC 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>contact@sivaelectricals.com</span>
              </li>
            </ul>
            <Button variant="secondary" size="sm" className="w-full mt-4">
              Get a Quote
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Siva Electricals Constructions.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
