import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/contact";

const buildOrderMessage = (items: ReturnType<typeof useCart>["items"], subtotal: number) => {
  const lines = items.map(
    (i, idx) =>
      `${idx + 1}. ${i.name} (Size: ${i.size}) — Qty ${i.quantity} × ${i.price} = ${
        i.price * i.quantity
      }`
  );
  return [
    "Hi RK Thukral, I'd like to place a wholesale order:",
    "",
    ...lines,
    "",
    `Subtotal: ${subtotal}`,
    "",
    "Please confirm bulk pricing & dispatch details.",
  ].join("\n");
};

const handleCheckout = () => {
  const modal = document.createElement("div");

  modal.innerHTML = `
    <div id="premium-checkout-modal" 
      style="
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      "
    >
      <div
        style="
          width: 420px;
          max-width: 90%;
          background: #0b0b0b;
          border: 1px solid rgba(212,175,55,0.25);
          padding: 32px;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          text-align: center;
          color: white;
        "
      >
        <h2
          style="
            font-size: 22px;
            margin-bottom: 14px;
            color: #d4af37;
            font-weight: 600;
            letter-spacing: 0.04em;
          "
        >
          Checkout Coming Soon
        </h2>

        <p
          style="
            font-size: 14px;
            line-height: 1.7;
            color: rgba(255,255,255,0.75);
            margin-bottom: 24px;
          "
        >
          Our premium checkout experience is currently under construction.
          Our team is working on it and it will be available soon.
        </p>

        <button
          id="close-premium-modal"
          style="
            background: #d4af37;
            color: black;
            border: none;
            height: 44px;
            padding: 0 28px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            cursor: pointer;
          "
        >
          OK
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document
    .getElementById("close-premium-modal")
    ?.addEventListener("click", () => {
      document.getElementById("premium-checkout-modal")?.remove();
    });
};
export const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal, clear } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => (o ? null : closeCart())}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-card border-l border-primary/20 p-0 flex flex-col"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border/60">
          <SheetTitle className="font-display text-2xl flex items-center gap-3">
            <ShoppingBag size={20} className="text-primary" />
            Your Selection
            <span className="ml-auto text-xs uppercase tracking-[0.25em] text-muted-foreground font-sans font-normal">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <ShoppingBag className="text-primary" size={24} />
              </div>
              <p className="font-display text-xl mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Discover our premium wholesale apparel collections and start building your order.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 pb-5 border-b border-border/40 last:border-0"
              >
                <div className="relative w-20 h-24 flex-shrink-0 overflow-hidden rounded-sm bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-base leading-tight mb-1 truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Size {item.size}
                  </p>
                  <div className="space-y-3">
 
                    <div className="flex items-center justify-between">
  <div className="text-sm text-muted-foreground">
    {item.quantity} × {item.price}/set
  </div>

  <div className="font-display text-base text-primary">
    {item.price * item.quantity}
  </div>
</div>

  <div className="flex items-center justify-between">
    <div className="inline-flex items-center border border-border rounded-sm">
      <button
        aria-label="Decrease quantity"
        onClick={() => setQuantity(item.id, item.quantity - 1)}
        className="w-8 h-8 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
      >
        <Minus size={14} />
      </button>

      <span className="w-9 text-center text-sm tabular-nums">
        {item.quantity}
      </span>

      <button
        aria-label="Increase quantity"
        onClick={() => setQuantity(item.id, item.quantity + 1)}
        className="w-8 h-8 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>

    <button
      onClick={() => removeItem(item.id)}
      className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-destructive inline-flex items-center gap-1"
    >
      <Trash2 size={11} /> Remove
    </button>
  </div>
</div>
                  
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border/60 p-6 space-y-4 bg-background/40">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Subtotal
              </span>
              <span className="font-display text-2xl text-gold-gradient">{subtotal}</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Wholesale pricing & shipping confirmed on WhatsApp. Bulk discounts available.
            </p>
            <Button
  onClick={handleCheckout}
  className="w-full h-12 uppercase tracking-[0.18em] text-[11px] font-semibold bg-primary text-primary-foreground hover:opacity-90"
>
  Checkout →
</Button>
           <div className="space-y-3">
  <Button
    variant="outline"
    onClick={closeCart}
    className="w-full h-12 uppercase tracking-[0.18em] text-[11px] border-primary/40 hover:bg-primary/10 hover:border-primary"
  >
    Continue Shopping
  </Button>

  <div className="flex justify-center pt-1">
    <button
      onClick={clear}
      className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition"
    >
      Clear Cart
    </button>
  </div>
</div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
