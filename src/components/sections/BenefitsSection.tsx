import { Zap, Target, Shield, Gift } from "lucide-react";
import { PRODUCT } from "@/lib/product-data";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = { Zap, Target, Shield, Gift };

export function BenefitsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Spinora?
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Not just a toy — a tool that improves your everyday life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT.features.map((feature) => {
            const Icon = ICON_MAP[feature.icon] ?? Zap;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-100">
                  <Icon className="h-7 w-7 text-brand-600" />
                </div>
                <h3 className="mb-2 font-bold text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
