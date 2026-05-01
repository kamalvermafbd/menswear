import { MessageCircle, Camera, Zap } from "lucide-react";
import { waLink } from "@/lib/contact";

export const WhatsAppCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-luxury relative">
        <div className="border-gold-gradient rounded-sm p-10 md:p-16 lg:p-20 text-center max-w-5xl mx-auto relative overflow-hidden grain">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/40 rounded-full">
            <Zap size={14} className="text-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Instant Pricing</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Send Product <span className="text-gold-gradient italic">Screenshot</span> <br />
            on WhatsApp for <span className="text-gold-gradient">Instant Price</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Found a design you love anywhere on Instagram or online? Send us the screenshot —
            we'll match it and quote you the best wholesale rate within minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink("Hi RK Thukral, I'm sharing a product screenshot — please quote your wholesale rate.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-whatsapp text-whatsapp-foreground rounded-sm font-semibold text-sm uppercase tracking-[0.18em] shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-pulse-gold"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp Now
            </a>
            <a
              href={waLink("Hi RK Thukral, please share your latest catalogue.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 border border-primary/60 text-foreground rounded-sm font-semibold text-sm uppercase tracking-[0.18em] hover:bg-primary/10 transition-all duration-500"
            >
              <Camera size={18} />
              Request Catalogue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
