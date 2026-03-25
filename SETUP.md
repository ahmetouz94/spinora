# Spinora — Google'da 5-6 Günde Satış Alma Kılavuzu

## GÜN 1 — Deploy + Google Search Console

### 1.1 Vercel Deploy
```bash
cd C:\Users\axmet\Desktop\spinora
vercel --prod
```
→ Sana bir URL verir: `spinora.vercel.app` (custom domain sonra bağlanır)

### 1.2 .env.local Oluştur
```
NEXT_PUBLIC_SITE_URL=https://spinora.vercel.app
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=  (boş bırak, aşağıda dolduracaksın)
NEXT_PUBLIC_GA_ID=                     (boş bırak, aşağıda dolduracaksın)
```

### 1.3 Google Search Console (GSC)
1. search.google.com/search-console adresine git
2. "Add property" → URL prefix → `https://spinora.vercel.app`
3. Verification method: "HTML tag" seç
4. Verilen kodu kopyala (örn. `abc123xyz`)
5. `.env.local` dosyasında `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz` yap
6. `vercel env add NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` komutunu çalıştır, kodu gir
7. `vercel --prod` ile tekrar deploy et
8. GSC'de "Verify" butonuna bas

### 1.4 Sitemap Submit
GSC'de: Sitemaps → `https://spinora.vercel.app/sitemap.xml` → Submit

---

## GÜN 1-2 — Google Analytics

1. analytics.google.com → Yeni property oluştur (GA4)
2. Measurement ID kopyala (G-XXXXXXXXXX formatında)
3. `vercel env add NEXT_PUBLIC_GA_ID` → ID'yi gir
4. `vercel --prod` ile deploy et
5. Analytics'te realtime raporları kontrol et

---

## GÜN 2 — Google Merchant Center

### Merchant Center Kurulumu
1. merchants.google.com → Hesap oluştur
2. İşletme bilgilerini gir (Türkiye, TRY)
3. Website verification → GSC üzerinden otomatik doğrula (aynı Google hesabı)

### Ürün Ekleme (Otomatik — Structured Data)
Sitemizde zaten Product JSON-LD var. Merchant Center'ın onu otomatik çekmesi için:
1. Merchant Center → Products → Add products → "From your website"
2. Site URL'yi gir → Crawl başlasın
3. 1-3 gün içinde ürün Shopping'te görünmeye başlar

### Manuel Ürün Girişi (Daha Hızlı)
Merchant Center → Products → Add product → Manuel doldur:
- **Title:** Spinora Gyroscope Fidget Toy 4'lü Set
- **Description:** (product-data.ts'deki description)
- **Price:** 299 TRY
- **Availability:** In stock
- **Condition:** New
- **Image link:** https://spinora.vercel.app/images/product/hero.webp
- **Link:** https://spinora.vercel.app
- **Brand:** Spinora
- **GTIN:** (yoksa MPN: SPR-GYR-4SET)
- **Shipping:** Free, 2-4 business days

---

## GÜN 3 — Google Ads (Opsiyonel ama hız için şart)

Organik SEO 2-3 hafta sürer. İlk satışlar için:

### Shopping Kampanyası
1. ads.google.com → Yeni kampanya → Sales → Shopping
2. Merchant Center'ı bağla
3. Günlük bütçe: 50-100₺ ile başla
4. Smart Shopping seç (Google optimize eder)
5. **Target ROAS:** 200% ile başla

### Search Kampanyası (Aynı zamanda)
Anahtar kelimeler:
- "gyroscope oyuncak satın al"
- "parmak gyroscope fidget"
- "stres oyuncağı"
- "fidget toy türkiye"

---

## GÜN 3-4 — Sosyal Medya + Hızlı Trafik

### TikTok (En hızlı organik)
- Ürünü parmağında döndürdüğün 15-30 saniyelik video
- Caption: "Ofiste stres nasıl geçiyor 😅 #spinora #gyroscope #fidget"
- 3-5 video yükle, sabah 8-10 veya akşam 19-21 arasında

### Instagram Reels
- TikTok videolarını aynı anda Instagram'a at
- Stories: Link sticker ile siteye yönlendir

---

## GÜN 4-5 — Rich Results & Hız Testi

### Rich Results Test
1. search.google.com/test/rich-results adresine git
2. Sitemin URL'ini gir
3. Product, FAQ, Organization schema'larının hepsini görmeli
4. Hata varsa bana bildir, düzeltirim

### Core Web Vitals
1. pagespeed.web.dev → Sitemin URL'ini gir
2. Mobile skoru 90+ olmalı
3. LCP (Largest Contentful Paint) < 2.5s olmalı
4. Görseller WebP formatında olursa çok iyileşir

---

## ÖZET TAKVİM

| Gün | Yapılacak | Beklenen Etki |
|-----|-----------|---------------|
| 1 | Deploy + GSC + sitemap submit | Google indexleme başlar |
| 1-2 | GA4 aktif | Trafik takibi |
| 2 | Merchant Center + ürün ekle | Shopping'e giriş |
| 3 | Google Ads Shopping | Anında trafik + satış |
| 3-4 | TikTok/Instagram videolar | Organik trafik |
| 5-6 | Optimizasyon, yorum toplama | Dönüşüm artışı |

---

## Codex Bittikten Sonra Yapılacaklar

Codex tüm oturumları bitirince terminalde şunu çalıştır:
```bash
npm run build
```
0 hata çıkmalı. Sonra deploy et.

## Acil Sorular

Herhangi bir adımda sorun çıkarsa WhatsApp numarası veya email adresini
lib/constants.ts dosyasında güncelle — tüm sayfalara otomatik yansır.
