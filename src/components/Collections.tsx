import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";

export const Collections = () => {
  return (
    <section id="collections" className="relative py-24 md:py-32">
      <div className="container-luxury">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="luxury-divider text-xs uppercase tracking-[0.3em] mb-6">
            <span>Curated Collections</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-5">
            Explore Our <span className="text-gold-gradient italic">Premium</span> Range
          </h2>
          <p className="text-muted-foreground text-lg">
            Ten luxury T-shirt categories. Hand-picked, premium-finished, and resale-ready for
            retailers across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="product-card group block animate-fade-in-up border border-border/40 hover:border-primary/40"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] uppercase tracking-[0.2em] font-semibold rounded-sm">
                    {c.products.length} Pieces
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-primary/40 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="text-xs text-primary uppercase tracking-[0.2em] mb-1.5">
                    From {c.startingFrom}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1 mb-3">{c.tagline}</p>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/90 border-b border-primary/60 pb-1">
                    Shop Collection
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-semibold rounded-sm hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5"
          >
            View Full Catalogue <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
