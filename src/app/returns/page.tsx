import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description: `${SITE.name} returns policy. 14-day no-questions-asked returns with free return shipping.`,
};

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Returns &amp; Refunds</h1>

          <div className="rounded-2xl bg-green-50 border border-green-200 p-6 mb-10">
            <p className="text-green-800 font-semibold text-lg">14-Day Money-Back Guarantee</p>
            <p className="text-green-700 mt-1">Not happy? We'll refund you, no questions asked. Return shipping is on us.</p>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">Return Conditions</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>You may request a return within 14 days of receiving your order.</li>
                <li>The product must be in its original packaging and unused.</li>
                <li>Return shipping is covered by us — free of charge.</li>
                <li>Refunds are processed within 3–5 business days of receiving the returned item.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">How to Return</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Email us at <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a> with your order number and reason for return.</li>
                <li>We'll send you a prepaid return shipping label.</li>
                <li>Pack the item in its original packaging and drop it off.</li>
                <li>Your refund will be processed once we receive the item.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">Exchanges</h2>
              <p>Want a different color or option? Simply initiate a return and place a new order. No extra charge for exchanges.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">Contact</h2>
              <p>Questions? Reach us at: <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a> | {SITE.phone}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
