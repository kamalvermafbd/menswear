import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Sparkles } from "lucide-react";
import { waLink } from "@/lib/contact";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium wholesale fashion model"
          className="w-full h-full object-cover object-center scale-105"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      </div>

      {/* Floating gold orbs */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary-deep/15 rounded-full blur-[140px] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container-luxury relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/40 bg-primary/5 backdrop-blur-sm rounded-full animate-fade-in"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Bulk Orders Available
            </span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Premium <br />
            <span className="text-gold-gradient italic">Wholesale</span> <br />
            Fashion Collection
          </h1>

          <p
            className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Trendy T-Shirts, Jeans, Drop Shoulder, Oversized Tees & Premium Apparel
            at wholesale prices. Trusted by resellers and boutique owners across India.
          </p>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href={waLink("Hi RK Thukral, I want to place a bulk wholesale order. Please share your latest catalogue & rates.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground rounded-sm font-semibold text-sm uppercase tracking-[0.18em] shadow-gold hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              Order on WhatsApp
              <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="#collections"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border hover:border-primary text-foreground rounded-sm font-semibold text-sm uppercase tracking-[0.18em] transition-all duration-500 hover:bg-primary/5"
            >
              View Collections
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="grid grid-cols-3 gap-6 mt-16 max-w-lg animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { v: "500+", l: "Resellers" },
              { v: "50K+", l: "Pieces / Month" },
              { v: "24h", l: "Dispatch" },
            ].map((s) => (
              <div key={s.l} className="border-l border-primary/40 pl-4">
                <div className="font-display text-3xl font-bold text-gold-gradient">{s.v}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
