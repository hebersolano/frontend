"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  size: "small" | "normal";
};

function QuantitySelector({ size = "normal", quantity, setQuantity }: Props) {
  function updateQuantityHandler(operator: "+" | "-") {
    setQuantity((qty) => {
      if (operator === "+") return qty + 1;
      if (operator === "-" && qty > 1) return qty - 1;
      return 1;
    });
  }

  const Style = {
    normal: {
      btn: "w-12",
      iconsDimension: 16,
    },
    small: {
      btn: "w-8 h-8",
      iconsDimension: 12,
    },
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() => updateQuantityHandler("-")}
        disabled={false}
        className={
          "rounded-l-full bg-muted text-foreground hover:text-primary-foreground" +
          Style[size].btn
        }
      >
        <Minus height={16} width={14} className="inline" />
      </Button>
      <span className="px-4 py-1.5 text-xl">{quantity}</span>
      <Button
        onClick={() => updateQuantityHandler("+")}
        disabled={false}
        className={
          "rounded-r-full bg-muted text-foreground hover:text-primary-foreground" +
          Style[size].btn
        }
      >
        <Plus height={16} width={16} className="inline" />
      </Button>
    </div>
  );
}

export default QuantitySelector;
