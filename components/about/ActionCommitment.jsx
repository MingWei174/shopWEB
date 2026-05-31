"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Package, Recycle } from "lucide-react";

const commitments = [
    {
        id: "transparent",
        icon: <Search className="w-8 h-8 mb-6 text-[#1A1A1A]" />,
        title: "透明的生產履歷",
        desc: "我們確保合作的品牌或生產者，在製造過程中皆能減少資源浪費，並提供安全、合理的勞工待遇。你可以追溯每件商品的產地與製程。",
        color: "from-blue-500/10 to-transparent"
    },
    {
        id: "packaging",
        icon: <Package className="w-8 h-8 mb-6 text-[#1A1A1A]" />,
        title: "環保包裝承諾",
        desc: "出貨包裝拒絕使用一次性塑膠。我們全面採用 100% 回收紙材、FSC 認證紙箱，以及可自然分解的環保緩衝物。",
        color: "from-green-500/10 to-transparent"
    },
    {
        id: "circular",
        icon: <Recycle className="w-8 h-8 mb-6 text-[#1A1A1A]" />,
        title: "循環經濟推廣",
        desc: "嚴選單一材質或易於拆解的商品，大幅提高回收率。我們亦提供部分產品的維修指南與二手回收計畫，讓資源生生不息。",
        color: "from-amber-500/10 to-transparent"
    }
];

export default function ActionCommitment() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="py-32 px-4 md:px-20 bg-[#FAFAFA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-[0.2em] uppercase text-[#888888] mb-4 block"
                    >
                        Action & Commitment
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl text-[#1A1A1A]"
                    >
                        我們如何實踐 SDG 12
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {commitments.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            onHoverStart={() => setHoveredId(item.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            className="relative bg-white p-10 rounded-3xl shadow-sm border border-[#E5E5E5] transition-all duration-500 hover:shadow-xl cursor-pointer group overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div 
                                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                            />
                            
                            <div className="relative z-10">
                                <motion.div
                                    animate={{ scale: hoveredId === item.id ? 1.1 : 1, y: hoveredId === item.id ? -5 : 0 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4">{item.title}</h3>
                                <p className="text-[#666666] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
