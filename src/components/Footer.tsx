import { Instagram, Phone, MessageCircle, MapPin } from "lucide-react";
import { PHONE_DISPLAY, INSTAGRAM_HANDLE, LOCATION, waLink } from "@/lib/contact";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/40 pt-20 pb-8">
      <div className="container-luxury">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="font-display text-3xl font-bold mb-5">
              <span className="text-gold-gradient">RK</span> Thukral
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              Premium wholesale fashion supplier from {LOCATION}. Trusted by 500+ resellers
              & boutiques across India for trendy, quality apparel at genuine wholesale rates.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={waLink("Hi RK Thukral!")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
                className="w-10 h-10 rounded-sm border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Explore</div>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#collections" className="hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#why" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Resellers</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Contact</div>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 text-primary shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle size={14} className="mt-1 text-primary shrink-0" />
                <span>WhatsApp 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 text-primary shrink-0" />
                <span>{LOCATION}</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={14} className="mt-1 text-primary shrink-0" />
                <span>@{INSTAGRAM_HANDLE}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <div>© {new Date().getFullYear()} RK Thukral. All rights reserved.</div>
          <div>Crafted with <span className="text-primary">✦</span> in Ludhiana, Punjab</div>
        </div>
      </div>
    </footer>
  );
};
