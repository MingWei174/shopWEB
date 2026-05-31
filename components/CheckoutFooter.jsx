import { Facebook, Instagram } from "lucide-react";

export function CheckoutFooter() {
  return (
    <footer className="mt-20 pt-16 border-t border-border bg-neutral-50/50">
      <div className="container-wide pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          {/* Customer Service */}
          <div className="flex flex-col items-center">
            <h4 className="font-medium mb-6 tracking-widest">客服相關</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="hover:text-foreground cursor-pointer transition-colors">- 退換貨方式 -</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">- PAYMENT / DELIVERY -</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">- NOTICE -</span>
              <span className="hover:text-foreground cursor-pointer transition-colors">- PRIVACY POLICY -</span>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center">
            <h4 className="font-medium mb-6 tracking-widest">聯絡我們</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground items-center">
              <span>官方LINE | @shk8607w</span>
              <span>時間 | 週一至週五 10:00~18:00</span>
              <span>姆特國際有限公司 | 統一編號：96754532</span>
              
              {/* Social Icons */}
              <div className="flex gap-4 mt-4 text-foreground">
                <button className="w-8 h-8 rounded-full bg-[#262626] text-white flex items-center justify-center hover:bg-black transition-colors">
                  <Facebook size={16} />
                </button>
                <button className="w-8 h-8 rounded-full bg-[#262626] text-white flex items-center justify-center hover:bg-black transition-colors">
                  <Instagram size={16} />
                </button>
                <button className="w-8 h-8 rounded-full bg-[#262626] text-white flex items-center justify-center hover:bg-black transition-colors">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.08.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-15.025 2.193h-2.146c-.221 0-.4-.179-.4-.4v-4.195c0-.221.179-.4.4-.4h.874c.221 0 .4.179.4.4v3.32h1.272c.221 0 .4.179.4.4v.475c0 .221-.179.4-.4.4zm2.845-.4v-4.195c0-.221-.179-.4-.4-.4h-.874c-.221 0-.4.179-.4.4v4.195c0 .221.179.4.4.4h.874c.221 0 .4-.179.4-.4zm4.015 0h-.873c-.114 0-.22-.047-.294-.128l-1.996-2.585v2.313c0 .221-.179.4-.4.4h-.874c-.221 0-.4-.179-.4-.4v-4.195c0-.221.179-.4.4-.4h.874c.114 0 .22.047.294.128l1.996 2.585v-2.313c0-.221.179-.4.4-.4h.873c.221 0 .4.179.4.4v4.195c0 .221-.179.4-.4.4zm3.036-3.32h-1.272v.871h1.272c.221 0 .4.179.4.4v.475c0 .221-.179.4-.4.4h-1.272v1.17c0 .221-.179.4-.4.4h-.874c-.221 0-.4-.179-.4-.4v-4.195c0-.221.179-.4.4-.4h2.546c.221 0 .4.179.4.4v.475c0 .221-.179.4-.4.4z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-2">
            
            {/* VISA */}
            <div className="px-4 bg-white border border-border rounded shadow-sm h-10 flex items-center justify-center min-w-[70px]">
                <span className="font-bold text-[#1434CB] italic text-xl tracking-tighter" style={{ fontFamily: 'Arial, sans-serif' }}>VISA</span>
            </div>

            {/* Mastercard */}
            <div className="bg-white border border-border rounded shadow-sm flex items-center justify-center h-10 w-[70px]">
                <div className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90 -mr-2 mix-blend-multiply z-10"></div>
                <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-90 z-0"></div>
            </div>

            {/* JCB */}
            <div className="bg-white border border-border rounded shadow-sm h-10 flex flex-row items-center justify-center w-[70px] gap-[1px]">
                <div className="bg-[#004B99] text-white font-bold text-[10px] rounded-[2px] px-[2px] h-[14px] flex items-center justify-center leading-none">J</div>
                <div className="bg-[#E5002D] text-white font-bold text-[10px] rounded-[2px] px-[2px] h-[14px] flex items-center justify-center leading-none">C</div>
                <div className="bg-[#008A27] text-white font-bold text-[10px] rounded-[2px] px-[2px] h-[14px] flex items-center justify-center leading-none">B</div>
            </div>

            {/* Apple Pay */}
            <div className="px-3 bg-white border border-border rounded shadow-sm font-semibold flex items-center justify-center gap-1 h-10 min-w-[70px] text-[15px]">
                <svg viewBox="0 0 384 512" width="14" height="14" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.1-44.6-35.9-2.8-74.3 22.7-103.3 22.7-28.5 0-68.7-24.5-103.7-24.5-52.8 0-108.3 45.2-136.4 105.7-58.7 127.3-10.4 252 50.3 331 33.1 42.6 72 84 122 84 48 0 71.9-29.2 131.9-29.2 59.5 0 79.5 29.2 131.9 29.2 53.6 0 94.2-44.8 123.6-88.7 36.4-53.7 51.5-103.8 52.4-106.1-1.3-.6-77.9-30-78.5-94zM245.9 83c27.5-33.8 45.8-77.2 39.8-121-39.7 1.6-86.4 26.6-115.5 61.3-25.5 30.5-46.7 75.3-39.1 118 43.8 3.5 86.8-24.6 114.8-58.3z"/></svg>
                <span>Pay</span>
            </div>

            {/* FamilyMart */}
            <div className="bg-white border border-border rounded shadow-sm flex flex-col items-center justify-center h-10 w-[80px]">
                <div className="w-[85%] flex flex-col items-center">
                    <div className="w-full h-1 bg-[#008061] mb-[1px]"></div>
                    <div className="w-full h-1 bg-[#00A1E9] mb-[2px]"></div>
                    <div className="text-[9px] font-bold text-[#00A1E9] leading-none tracking-tighter" style={{ transform: 'scale(0.8)' }}>FamilyMart</div>
                </div>
            </div>

            {/* 7-ELEVEN */}
            <div className="bg-white border border-border rounded shadow-sm flex items-center justify-center h-10 w-[70px] overflow-hidden">
                <div className="font-extrabold flex flex-col items-center justify-center relative w-full h-full pb-1">
                    <span className="text-3xl text-[#008061] leading-none absolute z-0 top-[2px]">7</span>
                    <span className="text-[#E60012] bg-white px-[2px] z-10 leading-none absolute top-[18px] tracking-tight" style={{ fontSize: '7.5px' }}>ELEVEn</span>
                </div>
            </div>

            {/* LINE Pay */}
            <div className="px-2 bg-white border border-border rounded shadow-sm flex items-center justify-center h-10 gap-[2px] min-w-[70px]">
                <span className="text-black font-extrabold text-[15px] tracking-tight">LINE</span>
                <span className="bg-[#00C300] text-white px-[4px] py-[2px] rounded text-[11px] font-extrabold leading-none">Pay</span>
            </div>
            
        </div>

        {/* Warning Note */}
        <div className="mt-12 text-center text-xs text-muted-foreground/60">
          提醒您，我們不會以電話或簡訊方式通知變更付款方式。
        </div>
      </div>
    </footer>
  );
}
