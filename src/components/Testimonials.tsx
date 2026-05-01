import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Mehta",
    role: "Boutique Owner, Delhi",
    text: "RK Thukral has been our go-to wholesale partner for 2+ years. Quality is consistent and the trending designs sell out within days at our store.",
  },
  {
    name: "Priya Sharma",
    role: "Reseller, Mumbai",
    text: "Best wholesale rates in Ludhiana. Fast dispatch, genuine pricing, and Shivam personally handles every query. Highly recommended for serious resellers.",
  },
  {
    name: "Arjun Singh",
    role: "Retail Shop, Jaipur",
    text: "Combo packs are a steal. My customers love the oversized fits and printed tees. Fresh stock every week keeps my shop ahead of the trend.",
  },
  {
    name: "Neha Kapoor",
    role: "Online Reseller",
    text: "I run a small Insta store and RK Thukral made bulk ordering effortless. Premium packing, no defects, and they accommodate small starter orders too.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">— Reseller Voices</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Trusted by <span className="text-gold-gradient italic">500+</span> resellers across India
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="relative p-8 md:p-10 border border-border bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 group animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors" size={48} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-8 text-lg">"{r.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-0.5">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
