import { clsx } from "clsx";
import type { ProductPrice } from "@/types/product";

interface PriceDisplayProps {
  price: ProductPrice;
  size?: "sm" | "md" | "lg";
}

export function PriceDisplay({ price, size = "md" }: PriceDisplayProps) {
  const discount = price.compareAt
    ? Math.round(((price.compareAt - price.amount) / price.compareAt) * 100)
    : null;

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span
        className={clsx("font-bold text-brand-600", {
          "text-xl": size === "sm",
          "text-3xl": size === "md",
          "text-4xl": size === "lg",
        })}
      >
        {price.currencySymbol}
        {price.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
      {price.compareAt && (
        <>
          <span
            className={clsx("text-slate-400 line-through", {
              "text-base": size === "sm",
              "text-xl": size === "md",
              "text-2xl": size === "lg",
            })}
          >
            {price.currencySymbol}
            {price.compareAt.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
          {discount && (
            <span className="rounded-full bg-red-100 px-2 py-0.5 text-sm font-bold text-red-600">
              {discount}% OFF
            </span>
          )}
        </>
      )}
    </div>
  );
}
