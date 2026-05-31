"use client";

import { useState } from "react";
import { CreditCard, Smartphone, CheckCircle2 } from "lucide-react";

export function PaymentSection() {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  return (
    <div className="bg-background rounded-xl p-6 border border-border mt-6">
      <h3 className="text-lg font-medium mb-4">付款方式</h3>
      
      {/* Payment Method Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <button
          onClick={() => setPaymentMethod("credit_card")}
          className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
            paymentMethod === "credit_card" ? "border-foreground bg-foreground/5 text-foreground" : "border-border text-muted-foreground hover:border-foreground/30"
          }`}
        >
          <CreditCard className="mb-2" size={24} />
          <span className="text-xs font-medium">信用卡</span>
        </button>
        <button
          onClick={() => setPaymentMethod("line_pay")}
          className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
            paymentMethod === "line_pay" ? "border-green-500 bg-green-50 text-green-700" : "border-border text-muted-foreground hover:border-foreground/30"
          }`}
        >
          <Smartphone className="mb-2" size={24} />
          <span className="text-xs font-medium">LINE Pay</span>
        </button>
        <button
          onClick={() => setPaymentMethod("apple_pay")}
          className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
            paymentMethod === "apple_pay" ? "border-foreground bg-foreground/5 text-foreground" : "border-border text-muted-foreground hover:border-foreground/30"
          }`}
        >
          <Smartphone className="mb-2" size={24} />
          <span className="text-xs font-medium">Apple Pay</span>
        </button>
        <button
          onClick={() => setPaymentMethod("atm")}
          className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
            paymentMethod === "atm" ? "border-foreground bg-foreground/5 text-foreground" : "border-border text-muted-foreground hover:border-foreground/30"
          }`}
        >
          <CreditCard className="mb-2" size={24} />
          <span className="text-xs font-medium">ATM 轉帳</span>
        </button>
      </div>

      {/* Dynamic Payment Form */}
      {paymentMethod === "credit_card" && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex gap-2 items-center mb-4 text-xs text-muted-foreground bg-muted/50 p-2 rounded-md">
            <CheckCircle2 size={16} className="text-green-500" />
            您的卡號資訊透過安全的第三方金流傳輸，本網站不會儲存任何明碼卡號。
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">信用卡卡號</label>
            {/* Input is controlled to only show numbers and spaces, mock mask */}
            <input 
              type="text" 
              placeholder="0000 0000 0000 0000" 
              className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 font-mono tracking-widest"
              maxLength={19}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">有效期限</label>
              <input 
                type="text" 
                placeholder="MM/YY" 
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 font-mono tracking-widest"
                maxLength={5}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">安全碼 (CVC)</label>
              <input 
                type="password" 
                placeholder="123" 
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 font-mono tracking-widest"
                maxLength={3}
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === "line_pay" && (
        <div className="flex flex-col items-center justify-center p-6 border border-border border-dashed rounded-lg animate-in fade-in duration-300">
          <p className="text-sm text-center text-muted-foreground mb-4">
            點擊結帳後，將為您跳轉至 LINE Pay 付款頁面，請在手機上完成授權。
          </p>
          <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            LINE Pay
          </div>
        </div>
      )}
      
      {paymentMethod === "apple_pay" && (
        <div className="flex flex-col items-center justify-center p-6 border border-border border-dashed rounded-lg animate-in fade-in duration-300">
          <p className="text-sm text-center text-muted-foreground mb-4">
            點擊結帳後，將喚起 Apple Pay 進行指紋或 Face ID 驗證付款。
          </p>
          <div className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
            Apple Pay
          </div>
        </div>
      )}

      {paymentMethod === "atm" && (
        <div className="flex flex-col items-center justify-center p-6 border border-border border-dashed rounded-lg animate-in fade-in duration-300">
          <p className="text-sm text-center text-muted-foreground">
            訂單成立後，將提供虛擬帳號，請於 3 天內完成匯款。
          </p>
        </div>
      )}
    </div>
  );
}
