import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={waLink("Hi RK Thukral, I'm interested in wholesale orders.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-gold" />
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-elegant hover:scale-110 transition-transform duration-300">
          <MessageCircle size={26} />
        </div>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 bg-card border border-primary/40 rounded-sm text-xs uppercase tracking-[0.18em] text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Chat with us
        </div>
      </div>
    </a>
  );
};
