import { SITE } from "@/lib/constants";
import { PRODUCT } from "@/lib/product-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="text-2xl font-black text-brand-600 tracking-tight">
          {SITE.name}
        </a>
        <a
          href="#urun"
          className="rounded-full bg-brand-500 px-5 py-2 text-sm font-bold text-white shadow-md shadow-brand-500/30 transition-all hover:bg-brand-600 active:scale-95"
        >
          Buy Now — {PRODUCT.price.currencySymbol}{PRODUCT.price.amount.toFixed(2)}
        </a>
      </div>
    </header>
  );
}
