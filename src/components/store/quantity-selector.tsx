"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  size?: "sm" | "default";
  className?: string;
};

function QuantitySelector({
  size = "default",
  quantity,
  setQuantity,
  className,
}: Props) {
  function updateQuantityHandler(operator: "+" | "-") {
    setQuantity((qty) => {
      if (operator === "+") return qty + 1;
      if (operator === "-" && qty > 1) return qty - 1;
      return 1;
    });
  }

  return (
    <div className={cn("ml-auto flex w-fit items-center sm:ml-0", className)}>
      <Button
        onClick={() => updateQuantityHandler("-")}
        disabled={false}
        size={size}
        variant="outline"
        className={"rounded-l-full"}
      >
        <Minus height={16} width={14} className="inline" />
      </Button>
      <span className={`px-4 py-1.5 ${size === "sm" ? "text-lg" : "text-xl"} `}>
        {quantity}
      </span>
      <Button
        onClick={() => updateQuantityHandler("+")}
        disabled={false}
        size={size}
        variant="outline"
        className={"rounded-r-full"}
      >
        <Plus height={16} width={16} className="inline" />
      </Button>
    </div>
  );
}

export default QuantitySelector;
