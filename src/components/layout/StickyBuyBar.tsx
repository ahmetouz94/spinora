"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { PRODUCT } from "@/lib/product-data";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let isTicking = false;

    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
      isTicking = false;
    };

    const handleScroll = () => {
      if (isTicking) {
        return;
      }

      isTicking = true;
      window.requestAnimationFrame(updateScrollPosition);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

export function StickyBuyBar() {
  useScrollPosition();

  const handleBuyClick = () => {
    document.getElementById("urun")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const formattedPrice = `${PRODUCT.price.currencySymbol}${PRODUCT.price.amount.toFixed(2)}`;
  const isProductSectionVisible =
    typeof document !== "undefined" &&
    (() => {
      const productSection = document.getElementById("urun");

      if (!productSection) {
        return false;
      }

      const { top, bottom } = productSection.getBoundingClientRect();
      return top < window.innerHeight && bottom > 0;
    })();

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur transition-[transform,opacity] duration-300 lg:hidden ${
        isProductSectionVisible
          ? "pointer-events-none translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] sm:px-6">
        <p className="text-xl font-bold text-slate-900">{formattedPrice}</p>
        <Button
          type="button"
          variant="primary"
          size="md"
          disabled={!PRODUCT.inStock}
          onClick={handleBuyClick}
          className="min-w-[140px] px-6 py-3 text-base font-bold"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
