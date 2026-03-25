import { Truck, ShieldCheck, RotateCcw, Star } from "lucide-react";

const BADGES = [
  { icon: Truck, label: "Free Worldwide Shipping", sub: "5–10 business days" },
  { icon: ShieldCheck, label: "Secure Payment", sub: "256-bit SSL" },
  { icon: RotateCcw, label: "14-Day Returns", sub: "No questions asked" },
  { icon: Star, label: "4.8/5 Rating", sub: "312+ reviews" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-slate-100 bg-white py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {BADGES.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 justify-center sm:justify-start"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-100">
                <Icon className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{label}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
