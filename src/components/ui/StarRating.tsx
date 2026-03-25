import { clsx } from "clsx";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  count?: number;
}

export function StarRating({
  rating,
  max = 5,
  size = "md",
  showValue = false,
  count,
}: StarRatingProps) {
  const stars = Array.from({ length: max }, (_, i) => {
    const filled = i + 1 <= Math.floor(rating);
    const partial = !filled && i < rating;
    const pct = partial ? Math.round((rating - Math.floor(rating)) * 100) : 0;

    return { filled, partial, pct, id: `star-${i}` };
  });

  return (
    <div className="inline-flex items-center gap-1">
      <div className="flex items-center">
        {stars.map(({ filled, partial, pct, id }) => (
          <svg
            key={id}
            className={clsx("flex-shrink-0", {
              "w-3.5 h-3.5": size === "sm",
              "w-5 h-5": size === "md",
              "w-6 h-6": size === "lg",
            })}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {partial && (
              <defs>
                <linearGradient id={`grad-${id}`} x1="0" x2="1" y1="0" y2="0">
                  <stop offset={`${pct}%`} stopColor="#f97316" />
                  <stop offset={`${pct}%`} stopColor="#d1d5db" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={
                filled
                  ? "#f97316"
                  : partial
                    ? `url(#grad-${id})`
                    : "#d1d5db"
              }
            />
          </svg>
        ))}
      </div>
      {showValue && (
        <span
          className={clsx("font-semibold text-slate-700", {
            "text-xs": size === "sm",
            "text-sm": size === "md",
            "text-base": size === "lg",
          })}
        >
          {rating.toFixed(1)}
        </span>
      )}
      {count !== undefined && (
        <span
          className={clsx("text-slate-500", {
            "text-xs": size === "sm",
            "text-sm": size === "md",
            "text-base": size === "lg",
          })}
        >
          ({count.toLocaleString("tr-TR")})
        </span>
      )}
    </div>
  );
}
