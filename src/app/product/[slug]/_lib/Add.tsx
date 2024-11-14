"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

function QuantitySelector({ quantity, setQuantity }: Props) {
  function updateQuantityHandler(operator: "+" | "-") {
    setQuantity((qty) => {
      if (operator === "+") return qty + 1;
      if (operator === "-" && qty > 1) return qty - 1;
      return 1;
    });
  }

  return (
    <div className="flex items-center justify-center">
      <Button
        onClick={() => updateQuantityHandler("-")}
        disabled={false}
        className={
          "w-12 rounded-l-full bg-muted text-foreground hover:text-primary-foreground"
        }
      >
        <Minus height={16} width={14} className="inline" />
      </Button>
      <span className="px-4 py-1.5 text-xl">{quantity}</span>
      <Button
        onClick={() => updateQuantityHandler("+")}
        disabled={false}
        className={
          "w-12 rounded-r-full bg-muted text-foreground hover:text-primary-foreground"
        }
      >
        <Plus height={16} width={16} className="inline" />
      </Button>
    </div>
  );
}

export default QuantitySelector;
