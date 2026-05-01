import { Instagram } from "lucide-react";
import { INSTAGRAM_HANDLE } from "@/lib/contact";
import dropShoulder from "@/assets/cat-drop-shoulder.jpg";
import oversized from "@/assets/cat-oversized.jpg";
import printed from "@/assets/cat-printed.jpg";
import luxury from "@/assets/cat-luxury.jpg";
import looney from "@/assets/cat-looney.jpg";
import tom from "@/assets/cat-tom.jpg";

const grid = [printed, luxury, oversized, looney, dropShoulder, tom];

export const InstagramSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-card/30">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Instagram className="mx-auto mb-5 text-primary" size={32} strokeWidth={1.3} />
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">— Follow Our Drops</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-gradient italic">@{INSTAGRAM_HANDLE}</span>
          </h2>
          <p className="text-muted-foreground">
            Live catalogue, fresh drops & reseller-only deals — every single day on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
          {grid.map((src, i) => (
            <a
              key={i}
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm bg-muted"
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-colors duration-500 flex items-center justify-center">
                <Instagram className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" size={36} />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary/60 hover:bg-primary/10 text-foreground rounded-sm font-semibold text-sm uppercase tracking-[0.18em] transition-all duration-500"
          >
            <Instagram size={18} />
            Follow @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
};
