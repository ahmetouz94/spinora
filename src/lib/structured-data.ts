import { PRODUCT, FAQ_ITEMS } from "@/lib/product-data";
import { REVIEWS } from "@/lib/reviews-data";
import type { Review } from "@/types/product";
import { SITE } from "@/lib/constants";

export function getProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT.name,
    description: PRODUCT.description,
    image: PRODUCT.images.map((img) => `${SITE.url}${img.src}`),
    sku: PRODUCT.sku,
    brand: {
      "@type": "Brand",
      name: PRODUCT.brand,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/`,
      priceCurrency: PRODUCT.price.currency,
      price: PRODUCT.price.amount,
      priceValidUntil: "2026-12-31",
      availability: PRODUCT.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "TR",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "TRY",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 4,
            unitCode: "DAY",
          },
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "TR",
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: PRODUCT.rating,
      reviewCount: PRODUCT.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: REVIEWS.slice(0, 5).map((r: Review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewBody: r.body,
      name: r.title,
      datePublished: r.date,
    })),
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      availableLanguage: "Turkish",
    },
    sameAs: [SITE.socialLinks.instagram, SITE.socialLinks.tiktok],
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
  };
}
