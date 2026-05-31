"use client";

import { useCart } from "@/lib/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ArrowLeft } from "lucide-react";
import { PaymentSection } from "@/components/PaymentSection";
import { CheckoutFooter } from "@/components/CheckoutFooter";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCompleteOrder = () => {
    // In a real app, this would send data to API
    alert("模擬結帳成功！購物車已清空。（此為展示，無真實扣款）");
    clearCart();
    window.location.href = "/";
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 pt-32 pb-16 container-wide">
          <div className="max-w-2xl mx-auto text-center space-y-6 py-20">
            <h1 className="text-3xl font-serif">您的購物車</h1>
            <p className="text-muted-foreground">目前購物車內沒有任何商品</p>
            <Link href="/shop" className="inline-block bg-foreground text-background px-8 py-3 rounded-full hover:bg-foreground/90 transition-colors">
              前往商店選購
            </Link>
          </div>
        </main>
        <CheckoutFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-32 pb-16 container-wide">
        <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} />
          繼續購物
        </Link>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Side: Cart Items */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h1 className="text-3xl font-serif mb-6">購物車 ({cartItems.length} 件)</h1>
              
              {/* Header row */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-border text-xs text-muted-foreground font-medium uppercase tracking-wider">
                <div className="col-span-6">商品資料</div>
                <div className="col-span-2 text-center">單價</div>
                <div className="col-span-2 text-center">數量</div>
                <div className="col-span-2 text-right">小計</div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-border/50">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    
                    {/* Product Info */}
                    <div className="col-span-1 md:col-span-6 flex gap-4">
                      <div className="w-20 h-24 bg-muted rounded-md overflow-hidden relative flex-shrink-0">
                        {item.image ? (
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full bg-secondary" />
                        )}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{item.materials || "Heirloom 選物"}</p>
                      </div>
                    </div>

                    {/* Price (Mobile hidden) */}
                    <div className="hidden md:block col-span-2 text-center text-sm">
                      {item.price}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-center mt-4 md:mt-0">
                      <div className="flex items-center border border-border rounded-sm overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 bg-muted/50 hover:bg-muted transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-sm min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 bg-muted/50 hover:bg-muted transition-colors"
                        >
                          +
                        </button>
                      </div>
                      {/* Trash icon for mobile next to quantity */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="md:hidden text-muted-foreground hover:text-red-500 p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="hidden md:flex col-span-2 items-center justify-end gap-4 text-sm font-medium">
                      NT${(parseFloat(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity).toLocaleString()}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Checkout Summary & Payment */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              
              {/* Delivery Method */}
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-lg font-medium mb-4">付款與送貨方式</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-muted-foreground">送貨方式</label>
                    <select className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20">
                      <option>宅配到府 (NT$100)</option>
                      <option>7-11 取貨 (NT$65)</option>
                      <option>全家 取貨 (NT$65)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Section (Extracted to component) */}
              <PaymentSection />

              {/* Order Summary */}
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-lg font-medium mb-4">訂單資訊</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>小計</span>
                    <span>NT${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>運費 (宅配)</span>
                    <span>NT$100</span>
                  </div>
                  <div className="pt-3 border-t border-border flex justify-between font-medium text-lg">
                    <span>合計</span>
                    <span>NT${(cartTotal + 100).toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCompleteOrder}
                  className="w-full bg-foreground text-background py-4 rounded-md font-medium hover:bg-foreground/90 transition-colors mt-6"
                >
                  前往結帳
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
      <CheckoutFooter />
    </div>
  );
}
