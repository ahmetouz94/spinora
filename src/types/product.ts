export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductVariant {
  id: string;
  label: string;
  color?: string;
  inStock: boolean;
}

export interface ProductPrice {
  amount: number;
  compareAt?: number;
  currency: string;
  currencySymbol: string;
}

export interface ProductShipping {
  isFree: boolean;
  estimatedDays: string;
  freeThreshold?: number;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductStep {
  step: number;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: ProductPrice;
  images: ProductImage[];
  variants: ProductVariant[];
  features: ProductFeature[];
  steps: ProductStep[];
  badge?: string;
  sku: string;
  brand: string;
  inStock: boolean;
  stockCount: number;
  shipping: ProductShipping;
  rating: number;
  reviewCount: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
