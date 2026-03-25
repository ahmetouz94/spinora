import { CheckCircle2 } from "lucide-react";
import { REVIEWS } from "@/lib/reviews-data";
import { PRODUCT } from "@/lib/product-data";
import { StarRating } from "@/components/ui/StarRating";

export function ReviewsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Customer Reviews
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <StarRating rating={PRODUCT.rating} size="lg" showValue />
            <span className="text-slate-500">
              {PRODUCT.reviewCount.toLocaleString("en-US")} reviews
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{review.author}</p>
                  <p className="text-xs text-slate-400">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                {review.verified && (
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified
                  </span>
                )}
              </div>
              <StarRating rating={review.rating} size="sm" />
              <p className="font-semibold text-slate-800">{review.title}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{review.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
