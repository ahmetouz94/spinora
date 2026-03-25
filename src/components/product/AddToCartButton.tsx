"use client";

import { useState } from "react";
import { ShoppingCart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AddToCartButtonProps {
  disabled?: boolean;
  variantId?: string;
}

export function AddToCartButton({ disabled, variantId }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (loading || disabled) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="primary"
      size="lg"
      fullWidth
      disabled={disabled || loading}
      onClick={handleClick}
      className="text-lg font-bold tracking-wide"
    >
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <ShoppingCart className="h-5 w-5" />
      )}
      {loading ? "Redirecting..." : "Buy Now"}
    </Button>
  );
}
