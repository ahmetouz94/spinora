interface StockBadgeProps {
  inStock: boolean;
  count?: number;
}

export function StockBadge({ inStock, count }: StockBadgeProps) {
  if (!inStock) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-red-600 font-medium">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        Out of stock
      </span>
    );
  }

  if (count !== undefined && count <= 20) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-amber-600 font-medium">
        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
        Only {count} left in stock!
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-green-600 font-medium">
      <span className="h-2 w-2 rounded-full bg-green-500" />
      In stock
    </span>
  );
}
