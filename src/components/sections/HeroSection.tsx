import { ProductCard } from "@/components/product/ProductCard";

export function HeroSection() {
  return (
    <section
      id="urun"
      className="bg-gradient-to-b from-brand-50 to-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ProductCard />
      </div>
    </section>
  );
}
