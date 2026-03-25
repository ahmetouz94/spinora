import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-brand-500 text-white hover:bg-brand-600 active:scale-95 focus-visible:outline-brand-500 shadow-lg shadow-brand-500/30":
            variant === "primary",
          "bg-white text-brand-600 border-2 border-brand-500 hover:bg-brand-50 active:scale-95":
            variant === "secondary",
          "bg-transparent text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50":
            variant === "outline",
          "px-3 py-1.5 text-sm": size === "sm",
          "px-5 py-2.5 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
          "w-full": fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
