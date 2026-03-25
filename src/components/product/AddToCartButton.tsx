"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AddToCartButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export function AddToCartButton({ disabled, onClick }: AddToCartButtonProps) {
  return (
    <Button
      variant="primary"
      size="lg"
      fullWidth
      disabled={disabled}
      onClick={onClick}
      className="text-lg font-bold tracking-wide"
    >
      <ShoppingCart className="h-5 w-5" />
      Buy Now
    </Button>
  );
}
