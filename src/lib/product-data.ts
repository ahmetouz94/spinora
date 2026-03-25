import type { Product, FAQItem } from "@/types/product";

export const PRODUCT: Product = {
  id: "spinora-gyroscope-4set",
  name: "Spinora Gyroscope Fidget Toy — Set of 4",
  slug: "spinora-gyroscope-fidget-toy",
  tagline: "Manage stress. Stay focused. Have fun.",
  description:
    "The Spinora fingertip gyroscope toy lets you release stress instantly. Comes in a set of 4 vibrant colors — perfect for office, school, or home use. High-speed steel bearing for silent, smooth spinning.",
  price: {
    amount: 14.99,
    compareAt: 24.99,
    currency: "EUR",
    currencySymbol: "€",
  },
  images: [
    {
      src: "/images/product/hero.jpg",
      alt: "Spinora Gyroscope Fidget Toy set of 4 — orange, blue, green, pink",
      width: 800,
      height: 800,
    },
    {
      src: "/images/product/angle-1.jpg",
      alt: "Spinora gyroscope spinning on fingertip",
      width: 800,
      height: 800,
    },
    {
      src: "/images/product/angle-2.jpg",
      alt: "Spinora gyroscope steel bearing close-up",
      width: 800,
      height: 800,
    },
    {
      src: "/images/product/angle-3.jpg",
      alt: "Spinora gyroscope set of 4 in gift box",
      width: 800,
      height: 800,
    },
  ],
  variants: [
    { id: "4set-mixed", label: "4-Pack Mixed Colors", inStock: true },
    { id: "4set-blue", label: "4-Pack Blue", inStock: true },
    { id: "4set-orange", label: "4-Pack Orange", inStock: false },
  ],
  features: [
    {
      icon: "Zap",
      title: "Reduces Stress",
      description:
        "Scientifically proven: repetitive motion lowers anxiety and stress levels instantly.",
    },
    {
      icon: "Target",
      title: "Boosts Focus",
      description:
        "Therapeutic fidget motion designed for ADHD and concentration improvement.",
    },
    {
      icon: "Shield",
      title: "Durable & Silent",
      description:
        "High-speed steel bearing — no noise, no vibration. Use it anywhere without disruption.",
    },
    {
      icon: "Gift",
      title: "Perfect Gift",
      description:
        "Set of 4 in a colorful gift box. Ideal for birthdays, Christmas, or Father's Day.",
    },
  ],
  steps: [
    {
      step: 1,
      title: "Place on Fingertip",
      description: "Rest the gyroscope on the tip of your index finger.",
    },
    {
      step: 2,
      title: "Give It a Spin",
      description: "Use your other hand to gently flick it into motion.",
    },
    {
      step: 3,
      title: "Feel the Balance",
      description: "Let the gyroscope spin freely and feel the gyroscopic force.",
    },
  ],
  badge: "Best Seller",
  sku: "SPR-GYR-4SET",
  brand: "Spinora",
  inStock: true,
  stockCount: 47,
  shipping: {
    isFree: true,
    estimatedDays: "5-10 business days",
    freeThreshold: 0,
  },
  rating: 4.8,
  reviewCount: 312,
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What age is this suitable for?",
    answer:
      "Suitable for ages 12 and up. Contains small parts — not recommended for children under 12.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "We ship worldwide. Standard delivery takes 5–10 business days. Shipping is always free.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 14-day no-questions-asked return policy from the date of delivery. Return shipping is covered by us.",
  },
  {
    question: "Do all 4 colors ship together?",
    answer:
      "Yes, the 4-pack ships together in one box. You can choose mixed colors or a single color set.",
  },
  {
    question: "How does a gyroscope work?",
    answer:
      "Once you place it on your fingertip and give it a spin, the high-speed steel bearing keeps it spinning for minutes. Gyroscopic physics creates a fascinating balancing effect.",
  },
  {
    question: "Do you provide an invoice?",
    answer:
      "Yes, an invoice is automatically emailed to you after every order.",
  },
];
