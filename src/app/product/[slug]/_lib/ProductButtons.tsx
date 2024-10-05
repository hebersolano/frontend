"use client";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

function ProductButtons() {
  return (
    <>
      <Button className="w-full" onClick={() => console.log("comprar btn")}>
        Comprar
      </Button>
      <Heart
        onClick={() => console.log("add to love")}
        width={30}
        strokeWidth={1}
        className="cursor-pointer transition duration-300 hover:fill-primary"
      />
    </>
  );
}

export default ProductButtons;
