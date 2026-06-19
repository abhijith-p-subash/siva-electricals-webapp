import { Phone, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Siva Electricals, I'd like to enquire about your services.",
);

export function FloatingActions() {
  const primaryPhone = CONTACT_INFO.phones[0];
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-card transition-transform hover:scale-105"
      >
        <MessageCircle size={22} className="fill-white/20" />
        <span className="hidden text-sm sm:inline">WhatsApp</span>
      </a>
      <a
        href={`tel:${primaryPhone.value}`}
        aria-label={`Call ${primaryPhone.display}`}
        className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-card transition-transform hover:scale-105"
      >
        <Phone size={20} />
        <span className="hidden text-sm sm:inline">Call Now</span>
      </a>
    </div>
  );
}
