"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export function QuickAddProduct({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col gap-2">
      {/* Image Container with Hover Effect */}
      <div className="relative w-full aspect-[3/4] bg-muted rounded-md overflow-hidden cursor-pointer">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-secondary" />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent linking if wrapped in Link
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full bg-white text-black font-medium py-3 rounded-md shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100"
          >
            加入購物車
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col mt-1">
        <Link href={`/shop/${product.id}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors line-clamp-1">
          {product.name}
        </Link>
        <span className="text-sm font-medium mt-1">{product.price}</span>
      </div>
    </div>
  );
}
