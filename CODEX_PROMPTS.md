# Spinora — Codex İş Bölümü Promptları

Bu dosyada Codex'e vereceğin hazır promptlar var.
Her prompt bağımsız bir oturumda çalıştırılabilir.

---

## OTURUM 6 — Entegrasyon (Tüm Oturumlar Bittikten Sonra Çalıştır)

```
Proje: Next.js 14 App Router + TypeScript + Tailwind CSS v4
Import alias: @/*

Bu oturumda sadece 2 dosyayı güncelle:

### 1. src/app/page.tsx'e şunları ekle:

Mevcut import'ların sonuna ekle:
import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { SocialProofBanner } from "@/components/sections/SocialProofBanner";

<Header />'dan ÖNCE <UrgencyBanner /> ekle.
<ReviewsSection />'dan SONRA <SocialProofBanner /> ekle.

Sonuç sırası:
<UrgencyBanner />      ← YENİ (en üst)
<Header />
<main>
  <HeroSection />
  <TrustBadges />
  <BenefitsSection />
  <HowItWorks />
  <CTABanner />
  <ReviewsSection />
  <SocialProofBanner />  ← YENİ
  <FAQSection />
</main>
<Footer />

### 2. src/app/layout.tsx'e şunları ekle:

Mevcut import'ların sonuna:
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

<body> içinde {children}'dan SONRA, <GoogleAnalytics />'den ÖNCE:
<WhatsAppButton />

Kurallar:
- Başka hiçbir dosyaya dokunma
- Mevcut import'ları silme
- TypeScript strict
```

---

## OTURUM 1 — Ürün Görsellerini Optimize Et

```
Proje: Next.js 14 App Router + TypeScript + Tailwind CSS (v4)

Görev: src/components/product/ProductCard.tsx dosyasını oku.
Görseller şu an placeholder path kullanıyor (/images/product/hero.webp vs.).
Benim yerime şunları yap:

1. public/images/product/ klasörüne placeholder görseller için bir README.md yaz:
   - Gerekli boyutlar: 800x800px
   - Format: WebP tercih edilir, JPG de olur
   - hero.webp, angle-1.webp, angle-2.webp, angle-3.webp, lifestyle.webp gerekli
   - og-image.jpg: 1200x630px

2. src/components/product/ProductCard.tsx içindeki Image componentlarına
   placeholder blur data URL ekle (base64 10x10 turuncu blur).

Kurallar:
- TypeScript strict mod
- Başka hiçbir dosyaya dokunma
- Yeni bağımlılık ekleme
```

---

## OTURUM 2 — Sticky Satın Al Butonu (Mobile)

```
Proje: Next.js 14 App Router + TypeScript + Tailwind CSS (v4)
Import alias: @/*

Mevcut dosyalar:
- src/components/product/AddToCartButton.tsx (Button component'i wrap ediyor)
- src/components/ui/Button.tsx
- src/lib/product-data.ts (PRODUCT.price.amount ve currencySymbol var)
- src/lib/constants.ts

Görev: Yeni bir component oluştur: src/components/layout/StickyBuyBar.tsx

Spec:
- Sadece mobile'da görünür (lg:hidden)
- Ekranın altına fixed konumlanır (bottom-0)
- İçeriği: sol tarafta fiyat, sağ tarafta "Satın Al" butonu
- Kullanıcı #urun section'ına scroll ettiğinde kaybolur (useScrollPosition hook ile)
- Tailwind v4 kullanılıyor, yeni bağımlılık ekleme
- "use client" direktifi gerekli
- Fiyat: PRODUCT.price üzerinden gelecek

Sonunda app/page.tsx'e nasıl ekleneceğini de göster.
```

---

## OTURUM 3 — Google Analytics Entegrasyonu

```
Proje: Next.js 14 App Router + TypeScript
Tailwind CSS v4

Mevcut dosyalar:
- src/lib/constants.ts → GA_ID var (process.env.NEXT_PUBLIC_GA_ID)
- src/app/layout.tsx → buraya eklenecek
- .env.local.example → zaten var

Görev:
1. src/components/analytics/GoogleAnalytics.tsx yaz
   - next/script kullanarak GA4 script'lerini yükle
   - strategy="afterInteractive"
   - GA_ID boşsa hiçbir şey render etme

2. src/app/layout.tsx'e ekle (body içine, children'dan sonra)

Kurallar:
- "use client" kullanma (server component olarak kal)
- Yeni bağımlılık ekleme
- TypeScript strict
```

---

## OTURUM 4 — Instagram/TikTok Social Proof Banner

```
Proje: Next.js 14 App Router + TypeScript + Tailwind CSS v4
Import alias: @/*

Mevcut dosyalar:
- src/lib/constants.ts → SITE.socialLinks.instagram ve tiktok var
- src/components/sections/ klasörü mevcut

Görev: Yeni section yaz: src/components/sections/SocialProofBanner.tsx

Spec:
- "#spinora ile paylaş" temalı kısa bir banner
- Instagram ve TikTok ikonları (lucide-react'ta Instagram/Music yok,
  SVG inline kullan)
- Arka plan: gradient bg-gradient-to-r from-purple-500 to-pink-500
- Beyaz metin
- Ortalanmış, padding py-10
- SITE.socialLinks'ten linkleri al

Sonunda page.tsx'teki ReviewsSection'dan sonra nasıl ekleneceğini söyle.
```

---

## OTURUM 5 — Ürün Verisi Güncelleme

```
Proje: Next.js 14 App Router + TypeScript
Dosya: src/lib/product-data.ts

Görev: Sadece bu dosyayı güncelle.

Yeni ürün bilgileri:
[BURAYA KENDİ ÜRÜN BİLGİLERİNİ YAZ]
- Gerçek fiyat
- Gerçek stok sayısı
- Gerçek ürün görseli yolları
- Gerçek ürün açıklaması
- Gerçek variant isimler

Kurallar:
- Product tipine (src/types/product.ts) uy
- Başka hiçbir dosyaya dokunma
- Tüm string'ler Türkçe
```

---

## GENEL CODEX KURALLARI (Her oturuma ekle)

```
Genel kurallar:
1. TypeScript strict mod — "any" kullanma
2. Tailwind CSS v4 (CSS-based config, tailwind.config.ts YOK)
3. "use client" sadece hook veya event listener gerektiğinde
4. Yeni npm bağımlılığı ekleme (sadece mevcut paketler: clsx, lucide-react, next, react)
5. Import alias @/* kullan (src/ prefix'i yok)
6. Hard-coded Türkçe string yazmak yerine lib/product-data.ts veya lib/constants.ts'den import et
7. Her component tek bir sorumluluk taşır
8. AddToCartButton.tsx'in onClick prop'una dokunma — ödeme için açık bırakılmış
```
