import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { categories } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

const Shop = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="luxury-divider text-xs uppercase tracking-[0.3em] mb-6">
              <span>The Luxury Catalogue</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-5">
              Premium <span className="text-gold-gradient italic">T-Shirt</span> Collections
            </h1>
            <p className="text-muted-foreground text-lg">
              Ten curated categories. Every piece crafted for premium feel, perfect fit and
              resale-ready presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className="product-card group block animate-fade-in-up border border-border/40 hover:border-primary/40"
                style={{ animationDelay: `${i * 50}ms` }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-primary/40 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs text-primary uppercase tracking-[0.2em] mb-1.5">
                      From {c.startingFrom} · {c.products.length} Pieces
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2 leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-1">{c.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Shop;
