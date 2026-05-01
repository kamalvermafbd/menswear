import { Link, useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ProductCard } from "@/components/ProductCard";
import { getCategory, categories } from "@/data/products";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategory(slug) : undefined;

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [slug]);
  
  if (!category) return <Navigate to="/shop" replace />;

  const others = categories.filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section className="pt-28 pb-12 border-b border-border/40">
        <div className="container-luxury">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary mb-6"
          >
            <ChevronLeft size={14} /> All Collections
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="luxury-divider text-xs uppercase tracking-[0.3em] mb-5 justify-start">
                <span>Premium Collection</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-3">
                {category.title}
              </h1>
              <p className="text-muted-foreground max-w-xl">{category.tagline}</p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">
                Starting From
              </div>
              <div className="font-display text-3xl text-gold-gradient">
                {category.startingFrom}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                {category.products.length} Premium Pieces
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.products.map((p, i) => (
              <div key={p.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 60}ms` }}>
                <ProductCard product={p} categoryTitle={category.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-border/40">
        <div className="container-luxury">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl">
              Explore Other <span className="text-gold-gradient italic">Collections</span>
            </h2>
            <Link
              to="/shop"
              className="text-xs uppercase tracking-[0.25em] text-primary border-b border-primary/60 pb-1"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className="product-card group block border border-border/40 hover:border-primary/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={c.cover}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <h3 className="font-display text-base text-foreground leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary mt-1">
                      From {c.startingFrom}
                    </p>
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



export default CategoryPage;
