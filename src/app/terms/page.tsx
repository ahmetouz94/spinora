import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `${SITE.name} terms of use and sales conditions.`,
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 text-slate-600 leading-relaxed">
          <h1 className="text-3xl font-bold text-slate-900">Terms of Use</h1>
          <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Service Description</h2>
            <p>{SITE.name} ({SITE.url}) is an e-commerce website selling gyroscope fidget toys. By using this site, you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Orders & Payment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Orders are processed once confirmed and payment is received.</li>
              <li>All prices are inclusive of applicable taxes.</li>
              <li>If an item goes out of stock after your order, you will be fully refunded.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Delivery</h2>
            <p>Orders are dispatched within 1 business day. Estimated delivery is 5–10 business days worldwide. Delays may occur due to customs or carrier issues beyond our control.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Limitation of Liability</h2>
            <p>The product is not suitable for children under 12 years old. It contains small parts. {SITE.name} cannot be held liable for damages resulting from misuse.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Contact</h2>
            <p>Questions? Email us: <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
