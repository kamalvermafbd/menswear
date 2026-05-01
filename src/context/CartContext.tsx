import { createContext, useContext, useEffect, useMemo, useReducer, useState, ReactNode } from "react";

export type CartItem = {
  id: string; // product id + size composite
  productId: string;
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
};

type State = { items: CartItem[] };

type Action =
  | { type: "ADD"; item: Omit<CartItem, "id">; quantity: number }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QTY"; id: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; state: State };

const STORAGE_KEY = "rkt-cart-v1";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "HYDRATE":
      return action.state;
    case "ADD": {
      const compositeId = `${action.item.productId}-${action.item.size}`;
      const existing = state.items.find((i) => i.id === compositeId);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === compositeId ? { ...i, quantity: i.quantity + action.quantity } : i
          ),
        };
      }
      return {
        items: [...state.items, { ...action.item, id: compositeId, quantity: action.quantity }],
      };
    }
    case "SET_QTY":
      return {
        items: state.items
          .map((i) => (i.id === action.id ? { ...i, quantity: Math.max(1, action.quantity) } : i))
          .filter((i) => i.quantity > 0),
      };
    case "REMOVE":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
};

type CartCtx = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "id" | "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartCtx | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", state: JSON.parse(raw) });
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state, hydrated]);

  const value = useMemo<CartCtx>(() => {
    const count = state.items.reduce((s, i) => s + i.quantity, 0);
    const subtotal = state.items.reduce((s, i) => s + i.price * i.quantity, 0);
    return {
      items: state.items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (item, quantity = 1) => {
        dispatch({ type: "ADD", item: { ...item, quantity }, quantity });
        setIsOpen(true);
      },
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      setQuantity: (id, quantity) => dispatch({ type: "SET_QTY", id, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
