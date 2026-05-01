import { Award, TrendingUp, Tag, Truck, Boxes, ShieldCheck } from "lucide-react";

const items = [
  { icon: Award, title: "Premium Quality", desc: "Hand-checked fabric & stitching on every piece before dispatch." },
  { icon: TrendingUp, title: "Latest Trending Designs", desc: "Fresh drops every week — Insta-ready styles your customers want." },
  { icon: Tag, title: "Genuine Wholesale Rates", desc: "Direct manufacturer pricing with tiered bulk discounts." },
  { icon: Truck, title: "Fast Pan-India Delivery", desc: "Same-day dispatch on confirmed orders. Reliable logistics." },
  { icon: Boxes, title: "Bulk Stock Available", desc: "Deep inventory across sizes, colours & combo packs." },
  { icon: ShieldCheck, title: "Trusted Supplier", desc: "500+ resellers, boutiques & retailers reorder every month." },
];

export const WhyChooseUs = () => {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-card/30 grain">
      <div className="container-luxury relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">— Why Choose Us</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Built for <span className="text-gold-gradient italic">resellers</span>, <br />
            engineered for trust.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-background p-10 hover:bg-card transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <div className="absolute top-6 right-6 font-display text-5xl text-primary/10 group-hover:text-primary/20 transition-colors">
                  0{i + 1}
                </div>
                <Icon className="text-primary mb-6 transition-transform duration-500 group-hover:-translate-y-1" size={36} strokeWidth={1.2} />
                <h3 className="font-display text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
