import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
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
                <p className="text-muted-foreground">+91 98765 43210</p>
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
                  contact@sivaelectricals.com
                </p>
                <p className="text-muted-foreground">
                  support@sivaelectricals.com
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
                  123 Contractor Lane, Build City
                </p>
                <p className="text-muted-foreground">BC 54321, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Business Hours</h3>
                <div className="grid grid-cols-2 gap-x-8 text-muted-foreground text-sm">
                  <span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span>
                  <span>Saturday:</span> <span>9:00 AM - 4:00 PM</span>
                  <span>Sunday:</span> <span>Emergency Only</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" className="w-full md:w-auto">
                Schedule a Service
              </Button>
            </div>
          </div>

          {/* Map & Form */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
              <ContactForm />
            </div>

            <div className="bg-muted/10 rounded-2xl border border-border overflow-hidden h-[300px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.5!2d80.25!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiA4MMKwMTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
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
