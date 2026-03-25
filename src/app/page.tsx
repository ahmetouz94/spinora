import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTABanner } from "@/components/sections/CTABanner";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { SocialProofBanner } from "@/components/sections/SocialProofBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getProductSchema,
  getOrganizationSchema,
  getFAQSchema,
  getWebsiteSchema,
} from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd schema={getWebsiteSchema()} />
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={getProductSchema()} />
      <JsonLd schema={getFAQSchema()} />

      <UrgencyBanner />
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <BenefitsSection />
        <HowItWorks />
        <CTABanner />
        <ReviewsSection />
        <SocialProofBanner />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
