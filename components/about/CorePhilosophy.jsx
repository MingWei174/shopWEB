"use client";

import { motion } from "framer-motion";

export default function CorePhilosophy() {
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="py-32 px-4 md:px-20 bg-[#1A1A1A] text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
                
                {/* Left Column: Sticky Title */}
                <div className="md:col-span-5 relative">
                    <div className="sticky top-40">
                        <motion.span 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={textVariants}
                            className="text-xs font-bold tracking-[0.2em] uppercase text-[#888888] mb-6 block"
                        >
                            Core Philosophy
                        </motion.span>
                        <motion.h2 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={textVariants}
                            className="font-serif text-5xl md:text-6xl leading-[1.1]"
                        >
                            Redefining<br />
                            <span className="text-[#888888] italic">Subtractive</span><br />
                            Consumption.
                        </motion.h2>
                    </div>
                </div>

                {/* Right Column: Scroll Content */}
                <div className="md:col-span-7 flex flex-col gap-24 pt-8 md:pt-40 pb-20">
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textVariants}
                    >
                        <h3 className="text-2xl font-serif mb-6 text-[#FAFAFA]">什麼是減法消費？</h3>
                        <p className="text-[#A0A0A0] text-lg leading-relaxed mb-6">
                            我們所強調的「減法消費」，並不是要求大家進入極簡主義、什麼都不買的苦行僧生活。相反地，它代表的是一種**「買得更精準、更好」**的智慧。
                        </p>
                        <p className="text-[#A0A0A0] text-lg leading-relaxed">
                            我們相信，與其擁有十件廉價卻沒有靈魂的物品，不如擁有一件能夠經受時間考驗、且背後有著動人故事的好物。每一次的消費，都是在為你理想中的世界投票。
                        </p>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textVariants}
                    >
                        <h3 className="text-2xl font-serif mb-6 text-[#FAFAFA]">對抗快時尚與過度消費</h3>
                        <p className="text-[#A0A0A0] text-lg leading-relaxed mb-6">
                            在當代社會，快節奏的消費模式帶來了巨大的浪費與碳排放。快時尚的本質是鼓勵拋棄，而這與 SDG 12 的理念背道而馳。
                        </p>
                        <p className="text-[#A0A0A0] text-lg leading-relaxed">
                            Heirloom 提供了一個放慢腳步的選擇。我們精心挑選那些在設計、材質與生產過程中皆不妥協的品牌。我們希望讓購物不再是一種無意識的消耗，而是一種對自我與環境負責的表態。
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
