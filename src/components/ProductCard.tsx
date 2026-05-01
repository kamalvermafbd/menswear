import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, MessageCircle, Zap } from "lucide-react";
import { waLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Props = { product: Product; categoryTitle: string };

export const ProductCard = ({ product, categoryTitle }: Props) => {
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [qty, setQty] = useState(1);
  const { addItem, openCart } = useCart();

  const handleAdd = () => {
    addItem(
      {
        productId: product.id,
        name: product.name,
        image: product.image,
        price: product.setPrice,
        size,
      },
      qty
    );
  };

  const handleBuyNow = () => {
    handleAdd();
    openCart();
  };

  return (
  <article className="group product-card flex flex-col h-full min-h-[700px] border border-border/40 hover:border-primary/40 bg-card">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className="w-full h-full object-cover"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-primary/95 backdrop-blur-sm text-primary-foreground text-[10px] uppercase tracking-[0.2em] font-semibold rounded-sm">
              {product.badge}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

    <div className="p-5 flex flex-col flex-1">
  <div>
    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
      {categoryTitle}
    </p>

    <h3 className="font-display text-lg leading-tight mb-2 line-clamp-2">
      {product.name}
    </h3>

    <div className="space-y-1.5">
      <div className="font-display text-xl text-gold-gradient">
        {product.setPrice}/set
      </div>

      <div className="mt-3">
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
          Colors
        </p>

        <p className="text-sm text-foreground leading-relaxed">
          {product.colors.join(", ")}
        </p>
      </div>
    </div>

    <div className="mt-3">
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
        Size
      </p>

      <div className="flex flex-wrap gap-1.5">
        {product.sizes.map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={cn(
              "min-w-[34px] h-8 px-2 text-xs rounded-sm border transition-all",
              size === s
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
            )}
          >
            {s}
          </button>
        ))}
      </div>
    </div>

    <div className="flex items-center justify-between gap-3 mt-3">
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        Qty
      </p>

      <div className="inline-flex items-center border border-border rounded-sm">
        <button
          aria-label="Decrease"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-8 h-8 flex items-center justify-center hover:text-primary"
        >
          <Minus size={14} />
        </button>

        <span className="w-9 text-center text-sm tabular-nums">
          {qty}
        </span>

        <button
          aria-label="Increase"
          onClick={() => setQty((q) => q + 1)}
          className="w-8 h-8 flex items-center justify-center hover:text-primary"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>

    <div className="mt-3">
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
        Sets
      </p>

      <p className="text-sm text-foreground">
        {product.colors.length} Colors × {product.sizes.length} Sizes ={" "}
        {product.setCount} PCS
      </p>
    </div>
  </div>

  <div className="mt-auto space-y-2 pt-2">
    <div className="flex justify-center">
  <Button
    onClick={handleAdd}
    variant="outline"
    className="h-10 min-w-[180px] justify-center uppercase tracking-[0.18em] text-[10px] border-primary/40 hover:bg-primary/10 hover:border-primary"
  >
    <ShoppingBag size={14} className="mr-1" />
    Add
  </Button>
</div>

    <a
  href={`https://wa.me/918968956553?text=${encodeURIComponent(
    `Hi RK Thukral, I'm interested in "${product.name}" (Size ${size}, Qty ${qty}) from ${categoryTitle}. Please share wholesale rates.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <Button
    variant="ghost"
    className="w-full h-9 uppercase tracking-[0.18em] text-[10px] text-whatsapp hover:text-whatsapp hover:bg-whatsapp/10"
  >
    <MessageCircle size={13} /> WhatsApp Inquiry
  </Button>
</a>
  </div>
</div>
    </article>
  );
};
