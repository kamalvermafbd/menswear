import { LOCATION } from "@/lib/contact";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Direct from manufacturing hub of Ludhiana, Punjab",
  "Latest trending designs updated every week",
  "Genuine wholesale rates with bulk pricing tiers",
  "Dedicated reseller & boutique owner support",
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="container-luxury relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
              — About Menswear
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-8">
              A trusted name in <span className="text-gold-gradient italic">wholesale</span> fashion supply.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Based in {LOCATION} — India's largest apparel manufacturing hub — Menswear
              has built a reputation for delivering trendy, premium-quality clothing at true
              wholesale prices. We supply retail shops, boutiques and resellers nationwide.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our edge: latest fashion trends, ready stock, fast dispatch and a hands-on
              support team that treats every reseller like a long-term partner.
            </p>

            <ul className="space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "10+", l: "Years Experience" },
                { v: "500+", l: "Active Resellers" },
                { v: "100+", l: "Designs Monthly" },
                { v: "98%", l: "Repeat Orders" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className="relative p-8 border border-border bg-card/60 backdrop-blur-sm group hover:border-primary/60 transition-all duration-500 hover:-translate-y-1"
                  style={{ marginTop: i % 2 ? "2rem" : "0" }}
                >
                  <div className="font-display text-5xl font-bold text-gold-gradient mb-2">
                    {s.v}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-60 group-hover:scale-150 transition-transform" />
                </div>
              ))}
            </div>
            <div className="absolute -inset-4 bg-gradient-gold-soft blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
