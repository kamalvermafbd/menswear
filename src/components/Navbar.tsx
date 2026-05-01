import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { waLink } from "@/lib/contact";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Home", type: "route" as const },
  { href: "/shop", label: "Shop", type: "route" as const },
  { href: "/?scroll=why", label: "Why Us", type: "route" as const },
  { href: "/?scroll=testimonials", label: "Resellers", type: "route" as const },
  { href: "/?scroll=contact", label: "Contact", type: "route" as const },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const renderLink = (l: (typeof links)[number], onClick?: () => void) => (
  <Link
    key={l.href}
    to={l.href}
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      if (onClick) onClick();
    }}
    className="text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors duration-300"
  >
    {l.label}
  </Link>
);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-luxury flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className="text-gold-gradient">RK</span>
            <span className="text-foreground"> Thukral</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => renderLink(l))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative w-10 h-10 flex items-center justify-center rounded-sm border border-primary/30 text-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ShoppingBag size={17} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <a
            href={waLink("Hi, I'm interested in wholesale orders.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.18em] font-semibold rounded-sm hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5"
          >
            Wholesale Rates
          </a>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <nav className="container-luxury py-6 flex flex-col gap-5">
            {links.map((l) => renderLink(l, () => setOpen(false)))}
            <a
              href={waLink("Hi RK Thukral, I'm interested in wholesale orders.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center px-5 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.18em] font-semibold rounded-sm"
            >
              Wholesale Rates
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
