import { ShoppingCart } from "lucide-react";
import { PRODUCT } from "@/lib/product-data";

export function CTABanner() {
  return (
    <section className="bg-brand-500 py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Still thinking about it?
        </h2>
        <p className="mt-4 text-brand-100 text-lg max-w-xl mx-auto">
          Only {PRODUCT.stockCount} left in stock. Free worldwide shipping and
          14-day returns — order today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#urun"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-600 shadow-lg transition-all hover:bg-brand-50 hover:scale-105 active:scale-95"
          >
            <ShoppingCart className="h-5 w-5" />
            Buy Now —{" "}
            <span>
              {PRODUCT.price.currencySymbol}
              {PRODUCT.price.amount.toFixed(2)}
            </span>
          </a>
          <p className="text-brand-200 text-sm">
            ✓ Secure payment &nbsp;·&nbsp; ✓ Free shipping
          </p>
        </div>
      </div>
    </section>
  );
}
