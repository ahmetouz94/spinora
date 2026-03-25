import { clsx } from "clsx";
import type { ReactNode } from "react";

interface BadgeProps {
  variant?: "brand" | "success" | "warning" | "danger" | "neutral";
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = "brand", children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        {
          "bg-brand-100 text-brand-700": variant === "brand",
          "bg-green-100 text-green-700": variant === "success",
          "bg-yellow-100 text-yellow-700": variant === "warning",
          "bg-red-100 text-red-700": variant === "danger",
          "bg-slate-100 text-slate-700": variant === "neutral",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
