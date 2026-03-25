import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center bg-slate-50 py-24">
        <div className="text-center px-4">
          <p className="text-8xl font-black text-brand-200 select-none">404</p>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Sayfa bulunamadı</h1>
          <p className="mt-3 text-slate-500 max-w-sm mx-auto">
            Aradığın sayfa taşınmış veya silinmiş olabilir.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 active:scale-95"
          >
            Ana sayfaya dön
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
