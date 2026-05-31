"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroManifesto() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section 
            ref={containerRef} 
            className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-20"
        >
            <motion.div 
                style={{ y, opacity, scale }}
                className="text-center w-full max-w-7xl mx-auto"
            >
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#888888] mb-8"
                >
                    Brand Manifesto
                </motion.span>
                
                <motion.h1 
                    initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[1.1] tracking-tight mb-12 text-[#1A1A1A]"
                >
                    Designed to <span className="italic text-[#888888]">disappear</span>,<br />
                    built to <span className="bg-gradient-to-r from-[#1A1A1A] to-[#666666] text-transparent bg-clip-text">last.</span>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left mt-20 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <h3 className="font-serif text-2xl mb-4 border-l-2 border-[#1A1A1A] pl-4">Built to last</h3>
                        <p className="text-[#666666] leading-relaxed pl-4">
                            經久耐用：說明 Heirloom 嚴選的每一件物品都具備極高的品質與耐用度，旨在陪伴使用者長長久久，減少汰換率。
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <h3 className="font-serif text-2xl mb-4 border-l-2 border-[#1A1A1A] pl-4">Designed to disappear</h3>
                        <p className="text-[#666666] leading-relaxed pl-4">
                            零廢棄設計：當產品最終走到生命週期盡頭時，它的材質能夠自然分解或完全回收，不給地球留下負擔，實踐 SDG 12 的核心精神。
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-[#888888]">Scroll to discover</span>
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-[1px] h-[40px] bg-[#1A1A1A] opacity-30"
                />
            </motion.div>
        </section>
    );
}
