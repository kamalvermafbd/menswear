const items = [
  "Premium Quality",
  "Wholesale Rates",
  "Pan India Shipping",
  "Latest Trending Designs",
  "Bulk Stock Available",
  "Trusted Supplier",
  "Fast Dispatch",
  "Reseller Support",
];

export const Marquee = () => {
  return (
    <div className="relative border-y border-border/60 bg-card/40 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-8">
            <span className="font-display italic text-2xl md:text-3xl text-gold-gradient">
              {item}
            </span>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
