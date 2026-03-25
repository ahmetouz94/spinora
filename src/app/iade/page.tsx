import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "İade Politikası",
  description: `${SITE.name} iade ve değişim koşulları. 14 gün koşulsuz iade.`,
};

export default function IadePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">İade &amp; Değişim Politikası</h1>

          <div className="rounded-2xl bg-green-50 border border-green-200 p-6 mb-10">
            <p className="text-green-800 font-semibold text-lg">14 Gün Koşulsuz İade Garantisi</p>
            <p className="text-green-700 mt-1">Memnun kalmadıysanız, sebebini sormadan iade alıyoruz. Kargo ücreti bize ait.</p>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">İade Koşulları</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Teslim tarihinden itibaren 14 gün içinde iade talebinde bulunabilirsiniz.</li>
                <li>Ürün orijinal ambalajında ve kullanılmamış halde olmalıdır.</li>
                <li>İade kargo ücreti tarafımızca karşılanmaktadır.</li>
                <li>Ödeme iadesi, ürün tarafımıza ulaştıktan sonra 3-5 iş günü içinde yapılır.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">İade Süreci</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li><a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a> adresine sipariş numaranızla iade talebinizi gönderin.</li>
                <li>Size ücretsiz iade kargo kodu iletilir.</li>
                <li>Ürünü orijinal ambalajında kargolayın.</li>
                <li>Ürün bize ulaştıktan sonra ödemeniz iade edilir.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">Değişim</h2>
              <p>Farklı bir renk veya seçenek istiyorsanız, iade sürecini başlatıp yeni sipariş oluşturabilirsiniz. Değişim için ayrıca ücret alınmaz.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-3">İletişim</h2>
              <p>Sorularınız için: <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a> | {SITE.phone}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
