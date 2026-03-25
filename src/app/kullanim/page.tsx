import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: `${SITE.name} kullanım koşulları ve satış şartları.`,
  robots: { index: false, follow: false },
};

export default function KullanimPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Kullanım Koşulları</h1>
          <p className="text-slate-500 mb-8">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Hizmet Tanımı</h2>
              <p>{SITE.name} ({SITE.url}), gyroscope fidget oyuncağı satan bir e-ticaret sitesidir. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Sipariş ve Ödeme</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Siparişler onaylandıktan sonra işleme alınır.</li>
                <li>Fiyatlar KDV dahildir.</li>
                <li>Stok tükenmesi halinde siparişiniz iptal edilir ve ücret iade edilir.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Teslimat</h2>
              <p>Siparişler 1 iş günü içinde kargoya verilir. Tahmini teslimat 2-4 iş günüdür. Beklenmedik durumlarda gecikmeler yaşanabilir.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Sorumluluk Sınırlaması</h2>
              <p>Ürün 12 yaş altı çocuklar için uygun değildir. Küçük parçalar içermektedir. {SITE.name}, yanlış kullanımdan kaynaklanan hasarlardan sorumlu tutulamaz.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">5. İletişim</h2>
              <p>Sorularınız için: <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
