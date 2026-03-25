import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${SITE.name} gizlilik politikası ve kişisel veri işleme şartları.`,
  robots: { index: false, follow: false },
};

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Gizlilik Politikası</h1>

          <p className="text-slate-600 mb-6">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">1. Toplanan Veriler</h2>
          <p className="text-slate-600 leading-relaxed">Sipariş sürecinde ad, soyad, e-posta adresi, telefon numarası ve teslimat adresi bilgileriniz toplanmaktadır. Bu bilgiler yalnızca sipariş işlemleri ve teslimat için kullanılmaktadır.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">2. Verilerin Kullanımı</h2>
          <p className="text-slate-600 leading-relaxed">Kişisel verileriniz; siparişin işlenmesi, kargo takibi, müşteri hizmetleri ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılmaktadır. Verileriniz üçüncü taraflarla pazarlama amacıyla paylaşılmamaktadır.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">3. Çerezler</h2>
          <p className="text-slate-600 leading-relaxed">Sitemiz, temel işlevsellik ve analitik amaçlarla çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">4. Veri Güvenliği</h2>
          <p className="text-slate-600 leading-relaxed">Tüm veri transferleri 256-bit SSL şifrelemesi ile korunmaktadır. Ödeme bilgileriniz sistemlerimizde saklanmamaktadır.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">5. Haklarınız</h2>
          <p className="text-slate-600 leading-relaxed">KVKK kapsamında kişisel verilerinize erişim, düzeltme, silme veya işlemeyi kısıtlama haklarına sahipsiniz. Talepleriniz için <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a> adresine yazabilirsiniz.</p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">6. İletişim</h2>
          <p className="text-slate-600 leading-relaxed">Gizlilik politikamız hakkında sorularınız için: <a href={`mailto:${SITE.email}`} className="text-brand-600 hover:underline">{SITE.email}</a></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
