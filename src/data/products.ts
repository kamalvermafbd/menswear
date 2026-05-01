import oversized1 from "@/assets/products/oversized-1.jpg";
import oversized2 from "@/assets/products/oversized-2.jpg";
import oversized3 from "@/assets/products/oversized-3.jpg";
import oversized4 from "@/assets/products/oversized-4.jpg";
import drop1 from "@/assets/products/dropshoulder-1.jpg";
import drop2 from "@/assets/products/dropshoulder-2.jpg";
import drop3 from "@/assets/products/dropshoulder-3.jpg";
import drop4 from "@/assets/products/dropshoulder-4.jpg";
import printed1 from "@/assets/products/printed-1.jpg";
import printed2 from "@/assets/products/printed-2.jpg";
import printed3 from "@/assets/products/printed-3.jpg";
import printed4 from "@/assets/products/printed-4.jpg";
import looney1 from "@/assets/products/looney-1.jpg";
import looney2 from "@/assets/products/looney-2.jpg";
import looney3 from "@/assets/products/looney-3.jpg";
import looney4 from "@/assets/products/looney-4.jpg";
import tom1 from "@/assets/products/tom-1.jpg";
import tom2 from "@/assets/products/tom-2.jpg";
import tom3 from "@/assets/products/tom-3.jpg";
import tom4 from "@/assets/products/tom-4.jpg";
import bal1 from "@/assets/products/balenciaga-1.jpg";
import bal2 from "@/assets/products/balenciaga-2.jpg";
import bal3 from "@/assets/products/balenciaga-3.jpg";
import bal4 from "@/assets/products/balenciaga-4.jpg";
import amiri1 from "@/assets/products/amiri-1.jpg";
import amiri2 from "@/assets/products/amiri-2.jpg";
import amiri3 from "@/assets/products/amiri-3.jpg";
import amiri4 from "@/assets/products/amiri-4.jpg";
import cotton1 from "@/assets/products/cotton-1.jpg";
import cotton2 from "@/assets/products/cotton-2.jpg";
import cotton3 from "@/assets/products/cotton-3.jpg";
import cotton4 from "@/assets/products/cotton-4.jpg";
import polo1 from "@/assets/products/polo-1.jpg";
import polo2 from "@/assets/products/polo-2.jpg";
import polo3 from "@/assets/products/polo-3.jpg";
import polo4 from "@/assets/products/polo-4.jpg";
import full1 from "@/assets/products/fullsleeve-1.jpg";
import full2 from "@/assets/products/fullsleeve-2.jpg";
import full3 from "@/assets/products/fullsleeve-3.jpg";
import full4 from "@/assets/products/fullsleeve-4.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  colors: string[];
  setPrice: number;
  setCount: number;
  badge?: string;
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  cover: string;
  startingFrom: number;
  products: Product[];
};


const COLOR_OPTIONS = [
  ["Black", "White", "Navy"],
  ["Red", "White", "Blue", "Black"],
  ["Olive", "Beige", "Gray", "Black", "Navy"],
  ["Maroon", "White", "Black"],
  ["Cream", "Brown", "Black", "Olive"],
];

const SIZE_OPTIONS = [
  ["S", "M", "L", "XL"],
  ["M", "L", "XL", "XXL"],
  ["S", "M", "L", "XL", "XXL"],
  ["M", "L", "XL", "XXL", "XXXL"],
  ["S", "M", "L", "XL", "XXL", "XXXL"],
];

export const categories: Category[] = [
  {
    slug: "oversized",
    title: "Oversized T-Shirts",
    tagline: "Heavyweight cotton, boxy luxury silhouette",
    cover: oversized2,
    startingFrom: 320,
   products: [
  {
    id: "ov-1",
    name: "Midnight Oversized Tee",
    price: 320,
    image: oversized1,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[2],
    setCount: 30,
    setPrice: 9600,
    badge: "Bestseller",
  },
  {
    id: "ov-2",
    name: "Cream Heavyweight Oversized",
    price: 360,
    image: oversized2,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[1],
    setCount: 20,
    setPrice: 7200,
  },
  {
    id: "ov-3",
    name: "Olive Boxy Fit Tee",
    price: 340,
    image: oversized3,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[4],
    setCount: 25,
    setPrice: 8500,
  },
  {
    id: "ov-4",
    name: "Ivory Drop-Tail Oversized",
    price: 380,
    image: oversized4,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[0],
    setCount: 16,
    setPrice: 6080,
    badge: "New",
  },
]
  },
  {
    slug: "drop-shoulder",
    title: "Drop Shoulder Tees",
    tagline: "Relaxed shoulder line, premium streetwear cut",
    cover: drop1,
    startingFrom: 280,
  products: [
  {
    id: "ds-1",
    name: "Onyx Drop Shoulder",
    price: 280,
    image: drop1,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[1],
    setCount: 20,
    setPrice: 5600,
    badge: "Trending",
  },
  {
    id: "ds-2",
    name: "Sage Relaxed Drop Tee",
    price: 300,
    image: drop2,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[4],
    setCount: 25,
    setPrice: 7500,
  },
  {
    id: "ds-3",
    name: "Navy Premium Drop",
    price: 290,
    image: drop3,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[0],
    setCount: 16,
    setPrice: 4640,
  },
  {
    id: "ds-4",
    name: "Mocha Drop Shoulder",
    price: 310,
    image: drop4,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[2],
    setCount: 30,
    setPrice: 9300,
  },
],
  },
  {
    slug: "printed",
    title: "Premium Printed Tees",
    tagline: "Editorial graphics on luxury cotton",
    cover: printed1,
    startingFrom: 340,
    products: [
  {
    id: "pr-1",
    name: "Gold Foil Statement Tee",
    price: 380,
    image: printed1,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[1],
    setCount: 30,
    setPrice: 11400,
    badge: "Luxury",
  },
  {
    id: "pr-2",
    name: "Monochrome Block Print",
    price: 340,
    image: printed2,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[3],
    setCount: 20,
    setPrice: 6800,
  },
  {
    id: "pr-3",
    name: "Botanical Line Tee",
    price: 360,
    image: printed3,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[4],
    setCount: 25,
    setPrice: 9000,
  },
  {
    id: "pr-4",
    name: "Tiger Roar Heritage Tee",
    price: 400,
    image: printed4,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[2],
    setCount: 16,
    setPrice: 6400,
    badge: "Hot",
  },
],
  },
  {
    slug: "looney-tunes",
    title: "Looney Tunes Collection",
    tagline: "Iconic cartoon energy, premium fabric",
    cover: looney1,
    startingFrom: 360,
   products: [
  {
    id: "lt-1",
    name: "Bunny Classic Black Tee",
    price: 360,
    image: looney1,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[0],
    setCount: 15,
    setPrice: 5400,
  },
  {
    id: "lt-2",
    name: "Daffy White Premium Tee",
    price: 360,
    image: looney2,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[2],
    setCount: 30,
    setPrice: 10800,
  },
  {
    id: "lt-3",
    name: "Coyote Navy Edition",
    price: 380,
    image: looney3,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[1],
    setCount: 20,
    setPrice: 7600,
    badge: "New",
  },
  {
    id: "lt-4",
    name: "Pig Oversized Beige Tee",
    price: 400,
    image: looney4,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[4],
    setCount: 16,
    setPrice: 6400,
  },
],
  },
  {
    slug: "tom-jerry",
    title: "Tom & Jerry Collection",
    tagline: "Timeless duo, modern luxury cut",
    cover: tom1,
    startingFrom: 360,
    products: [
  {
    id: "tj-1",
    name: "Chase Scene Black Tee",
    price: 360,
    image: tom1,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[0],
    setCount: 20,
    setPrice: 7200,
  },
  {
    id: "tj-2",
    name: "Tom Cream Premium Tee",
    price: 360,
    image: tom2,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[2],
    setCount: 30,
    setPrice: 10800,
    badge: "Bestseller",
  },
  {
    id: "tj-3",
    name: "Jerry Run Gray Tee",
    price: 350,
    image: tom3,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[3],
    setCount: 16,
    setPrice: 5600,
  },
  {
    id: "tj-4",
    name: "Duo Back Print Oversized",
    price: 420,
    image: tom4,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[4],
    setCount: 25,
    setPrice: 10500,
    badge: "Hot",
  },
],
  },
  {
    slug: "balenciaga-peace",
    title: "Balenciaga / Peace Collection",
    tagline: "Designer-inspired luxury silhouettes",
    cover: bal1,
    startingFrom: 420,
   products: [
  {
    id: "bp-1",
    name: "Black Designer Logo Tee",
    price: 450,
    image: bal1,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[2],
    setCount: 30,
    setPrice: 13500,
    badge: "Luxury",
  },
  {
    id: "bp-2",
    name: "Heart Oversized White Tee",
    price: 420,
    image: bal2,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[1],
    setCount: 20,
    setPrice: 8400,
  },
  {
    id: "bp-3",
    name: "Peace Symbol Premium Tee",
    price: 440,
    image: bal3,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[4],
    setCount: 25,
    setPrice: 11000,
  },
  {
    id: "bp-4",
    name: "Designer Back Print Tee",
    price: 480,
    image: bal4,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[0],
    setCount: 16,
    setPrice: 7680,
    badge: "Premium",
  },
],
  },
  {
    slug: "amiri",
    title: "Amiri Collection",
    tagline: "Distressed luxury, gothic typography",
    cover: amiri1,
    startingFrom: 460,
    products: [
  {
    id: "am-1",
    name: "Distressed Black Statement Tee",
    price: 460,
    image: amiri1,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[0],
    setCount: 30,
    setPrice: 13800,
    badge: "Luxury",
  },
  {
    id: "am-2",
    name: "Red Gothic Script Tee",
    price: 480,
    image: amiri2,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[1],
    setCount: 20,
    setPrice: 9600,
  },
  {
    id: "am-3",
    name: "Bold Logo Black Tee",
    price: 470,
    image: amiri3,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[4],
    setCount: 25,
    setPrice: 11750,
  },
  {
    id: "am-4",
    name: "Vintage Beige Designer Tee",
    price: 500,
    image: amiri4,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[2],
    setCount: 16,
    setPrice: 8000,
    badge: "Premium",
  },
],
  },
  {
    slug: "cotton-plain",
    title: "Plain Cotton Tees",
    tagline: "Premium essentials, perfect every time",
    cover: cotton1,
    startingFrom: 220,
    products: [
  {
    id: "ct-1",
    name: "Pure White Cotton Tee",
    price: 220,
    image: cotton1,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[0],
    setCount: 15,
    setPrice: 3300,
    badge: "Essential",
  },
  {
    id: "ct-2",
    name: "Onyx Black Cotton Tee",
    price: 220,
    image: cotton2,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[1],
    setCount: 20,
    setPrice: 4400,
  },
  {
    id: "ct-3",
    name: "Heather Gray Cotton Tee",
    price: 230,
    image: cotton3,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[2],
    setCount: 30,
    setPrice: 6900,
  },
  {
    id: "ct-4",
    name: "Navy Premium Cotton Tee",
    price: 240,
    image: cotton4,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[4],
    setCount: 16,
    setPrice: 3840,
  },
],
  },
  {
    slug: "polo",
    title: "Polo T-Shirts",
    tagline: "Refined collars, country-club quality",
    cover: polo1,
    startingFrom: 360,
   products: [
  {
    id: "po-1",
    name: "Royal Navy Tipped Polo",
    price: 360,
    image: polo1,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[0],
    setCount: 15,
    setPrice: 5400,
  },
  {
    id: "po-2",
    name: "Onyx Pique Polo",
    price: 380,
    image: polo2,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[2],
    setCount: 30,
    setPrice: 11400,
    badge: "Bestseller",
  },
  {
    id: "po-3",
    name: "Burgundy Gold Button Polo",
    price: 420,
    image: polo3,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[1],
    setCount: 20,
    setPrice: 8400,
    badge: "Luxury",
  },
  {
    id: "po-4",
    name: "Ivory Contrast Collar Polo",
    price: 400,
    image: polo4,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[4],
    setCount: 16,
    setPrice: 6400,
  },
],
  },
  {
    slug: "full-sleeve",
    title: "Full Sleeve Premium Tees",
    tagline: "Layer-ready luxury, all-season cotton",
    cover: full1,
    startingFrom: 380,
    products: [
  {
    id: "fs-1",
    name: "Midnight Full Sleeve Tee",
    price: 380,
    image: full1,
    sizes: SIZE_OPTIONS[3],
    colors: COLOR_OPTIONS[0],
    setCount: 20,
    setPrice: 7600,
  },
  {
    id: "fs-2",
    name: "Cream Slim Full Sleeve",
    price: 400,
    image: full2,
    sizes: SIZE_OPTIONS[4],
    colors: COLOR_OPTIONS[2],
    setCount: 30,
    setPrice: 12000,
    badge: "New",
  },
  {
    id: "fs-3",
    name: "Charcoal Full Sleeve Tee",
    price: 390,
    image: full3,
    sizes: SIZE_OPTIONS[2],
    colors: COLOR_OPTIONS[1],
    setCount: 16,
    setPrice: 6240,
  },
  {
    id: "fs-4",
    name: "Olive Premium Full Sleeve",
    price: 420,
    image: full4,
    sizes: SIZE_OPTIONS[1],
    colors: COLOR_OPTIONS[4],
    setCount: 25,
    setPrice: 10500,
  },
],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const allProducts = (): Array<Product & { category: string; categorySlug: string }> =>
  categories.flatMap((c) =>
    c.products.map((p) => ({ ...p, category: c.title, categorySlug: c.slug }))
  );

export const findProduct = (id: string) => allProducts().find((p) => p.id === id);
