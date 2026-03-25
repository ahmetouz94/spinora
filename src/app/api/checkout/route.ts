import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { PRODUCT } from "@/lib/product-data";
import { SITE } from "@/lib/constants";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { variantId } = await req.json();

    const variant = PRODUCT.variants.find((v) => v.id === variantId) ?? PRODUCT.variants[0];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: PRODUCT.price.currency.toLowerCase(),
            product_data: {
              name: `${PRODUCT.name} — ${variant.label}`,
              description: PRODUCT.description,
              images: [`${SITE.url}/images/product/hero.jpg`],
            },
            unit_amount: Math.round(PRODUCT.price.amount * 100), // cents
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: [
          "GR", "US", "GB", "DE", "FR", "IT", "ES", "NL", "BE", "AT",
          "SE", "DK", "NO", "FI", "PL", "PT", "CZ", "HU", "RO", "BG",
          "AU", "CA", "JP", "KR", "SG", "AE", "SA",
        ],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: PRODUCT.price.currency.toLowerCase() },
            display_name: "Free Worldwide Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 10 },
            },
          },
        },
      ],
      success_url: `${SITE.url}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE.url}/#urun`,
      metadata: { variantId: variant.id, productId: PRODUCT.id },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
