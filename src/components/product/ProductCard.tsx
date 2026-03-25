"use client";

import { useState } from "react";
import Image from "next/image";
import { Truck, RotateCcw } from "lucide-react";
import { PRODUCT } from "@/lib/product-data";
import { PriceDisplay } from "./PriceDisplay";
import { VariantSelector } from "./VariantSelector";
import { StockBadge } from "./StockBadge";
import { AddToCartButton } from "./AddToCartButton";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";

const PRODUCT_IMAGE_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIiBmaWxsPSJub25lIj48ZGVmcz48ZmlsdGVyIGlkPSJiIiB4PSItNDAlIiB5PSItNDAlIiB3aWR0aD0iMTgwJSIgaGVpZ2h0PSIxODAlIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjgiIC8+PC9maWx0ZXI+PHJhZGlhbEdyYWRpZW50IGlkPSJnIiBjeD0iNTAlIiBjeT0iNDUlIiByPSI3MCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmYmJmMjQiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2Y5NzMxNiIgc3RvcC1vcGFjaXR5PSIwLjg1Ii8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiByeD0iMiIgZmlsbD0iI2ZlZDdhYSIvPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSIzLjIiIGZpbGw9InVybCgjZykiIGZpbHRlcj0idXJsKCNiKSIvPjwvc3ZnPg==";

export function ProductCard() {
  const [selectedVariant, setSelectedVariant] = useState(PRODUCT.variants[0].id);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Image Gallery */}
      <div className="space-y-3">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={PRODUCT.images[activeImage].src}
            alt={PRODUCT.images[activeImage].alt}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={PRODUCT_IMAGE_BLUR_DATA_URL}
            priority={activeImage === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {PRODUCT.badge && (
            <div className="absolute left-3 top-3">
              <Badge variant="brand">{PRODUCT.badge}</Badge>
            </div>
          )}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {PRODUCT.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                activeImage === i ? "border-brand-500" : "border-transparent"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={PRODUCT_IMAGE_BLUR_DATA_URL}
                sizes="64px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center space-y-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <StarRating
              rating={PRODUCT.rating}
              showValue
              count={PRODUCT.reviewCount}
              size="sm"
            />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {PRODUCT.name}
          </h1>
          <p className="mt-2 text-slate-500">{PRODUCT.tagline}</p>
        </div>

        <PriceDisplay price={PRODUCT.price} size="md" />

        <StockBadge inStock={PRODUCT.inStock} count={PRODUCT.stockCount} />

        <VariantSelector
          variants={PRODUCT.variants}
          selected={selectedVariant}
          onChange={setSelectedVariant}
        />

        <AddToCartButton disabled={!PRODUCT.inStock} />

        <div className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-brand-500 flex-shrink-0" />
            <span>
              <strong>Free shipping</strong> — {PRODUCT.shipping.estimatedDays}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4 text-brand-500 flex-shrink-0" />
            <span>
              <strong>14-day free returns</strong> — we cover return shipping
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
