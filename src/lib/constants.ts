export const SITE = {
  name: "Spinora",
  tagline: "The Fingertip Experience",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://spinora.com",
  description:
    "Spinora Gyroscope Fidget Toy — Set of 4. Reduce stress, boost focus. Free worldwide shipping.",
  locale: "en_US",
  currency: "EUR",
  email: "support@spinora.com",
  phone: "+30 000 000 0000",
  socialLinks: {
    instagram: "https://instagram.com/spinora",
    tiktok: "https://tiktok.com/@spinora",
  },
} as const;

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
