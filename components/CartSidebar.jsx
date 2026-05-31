"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { X, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "@/lib/data";
import { QuickAddProduct } from "@/components/QuickAddProduct";

export function CartSidebar() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const router = useRouter();
  const [upsellProducts, setUpsellProducts] = useState([]);

  // Shuffle upsell products when cart opens
  useEffect(() => {
    if (isCartOpen) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setUpsellProducts(shuffled.slice(0, 4));
    }
  }, [isCartOpen]);

  const handleCheckout = () => {
    setIsCartOpen(false);
    router.push("/cart");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <h2 className="text-xl font-medium tracking-tight">購物車</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cartItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-4">
                  <p>您的購物車是空的</p>
                  <button 
                    onClick={() => {
                      setIsCartOpen(false);
                      router.push("/shop");
                    }}
                    className="btn-text underline"
                  >
                    繼續購物
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 group">
                        {/* Product Image */}
                        <div className="relative w-20 h-24 bg-muted rounded-md overflow-hidden flex-shrink-0">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-secondary" />
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                              <p className="text-xs text-muted-foreground mt-1">數量: {item.quantity}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <div className="flex justify-between items-center mt-2">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-border rounded-sm overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="px-2 py-1 bg-muted/50 hover:bg-muted transition-colors text-xs"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 text-xs text-center min-w-[32px]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="px-2 py-1 bg-muted/50 hover:bg-muted transition-colors text-xs"
                              >
                                +
                              </button>
                            </div>
                            
                            {/* Price */}
                            <span className="font-medium text-sm">
                              NT${(parseFloat(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Upsell / You might also like */}
                  <div className="mt-8 pt-8 border-t border-border/50 pb-8">
                    <h3 className="text-sm font-medium mb-4">您可能喜歡...</h3>
                    <div className="grid grid-cols-2 gap-4 pb-4">
                      {upsellProducts.map(product => (
                        <QuickAddProduct key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-border/50 bg-background">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">小計</span>
                  <span className="font-medium text-lg">NT${cartTotal.toLocaleString()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-foreground text-background py-4 rounded-md font-medium hover:bg-foreground/90 transition-colors"
                >
                  訂單結帳
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
