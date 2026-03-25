import { FAQ_ITEMS } from "@/lib/product-data";
import { Accordion } from "@/components/ui/Accordion";

export function FAQSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-500">
            Everything you need to know before ordering.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}
