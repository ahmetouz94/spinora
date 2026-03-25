import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${SITE.name} privacy policy and personal data processing terms.`,
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 text-slate-600 leading-relaxed">
          <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Data We Collect</h2>
            <p>During checkout, we collect your name, email address, phone number, and shipping address. This information is used solely to process and deliver your order.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">2. How We Use Your Data</h2>
            <p>Your personal data is used to process orders, arrange delivery, provide customer support, and comply with legal obligations. We do not share your data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Cookies</h2>
            <p>Our site uses cookies for essential functionality and analytics. You can disable cookies in your browser settings at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Data Security</h2>
            <p>All data transfers are protected with 256-bit SSL encryption. Payment information is never stored on our servers — all payments are processed by our certified payment provider.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, delete, or restrict the processing of your personal data at any time. To make a request, email us at <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Contact</h2>
            <p>Questions about this policy? Contact us: <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
