import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Order Confirmed!",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center bg-slate-50 py-24">
        <div className="text-center px-4 max-w-md">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Order Confirmed!</h1>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Thank you for your order! You&apos;ll receive a confirmation email shortly.
            Your Spinora gyroscope set will be on its way within 1 business day.
          </p>
          <div className="mt-6 rounded-xl bg-white border border-slate-200 p-4 text-sm text-slate-600">
            <p>📦 Estimated delivery: <strong>5–10 business days</strong></p>
            <p className="mt-1">📧 Check your email for tracking info</p>
          </div>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
