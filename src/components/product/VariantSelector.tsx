"use client";

import { clsx } from "clsx";
import type { ProductVariant } from "@/types/product";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selected: string;
  onChange: (id: string) => void;
}

export function VariantSelector({ variants, selected, onChange }: VariantSelectorProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-slate-700">Option:</p>
      <div className="flex flex-wrap gap-2">
        {variants.map((v) => (
          <button
            key={v.id}
            onClick={() => v.inStock && onChange(v.id)}
            disabled={!v.inStock}
            className={clsx(
              "rounded-lg border-2 px-4 py-2 text-sm font-medium transition-all",
              selected === v.id
                ? "border-brand-500 bg-brand-50 text-brand-700"
                : v.inStock
                  ? "border-slate-200 text-slate-700 hover:border-brand-300"
                  : "border-slate-100 text-slate-300 cursor-not-allowed line-through"
            )}
          >
            {v.label}
            {!v.inStock && (
              <span className="ml-1 text-xs text-slate-400">(Sold out)</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
