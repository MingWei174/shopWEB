"use client";

import { motion } from "framer-motion";
import CarbonFootprintTimeline from "@/components/CarbonFootprintTimeline";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

export default function AnimatedDetailInfo({ product }) {
    return (
        <motion.section 
            className="detail-info-section w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.span variants={itemVariants} className="text-sm font-bold tracking-[0.2em] uppercase text-[#1A1A1A] mb-4 inline-block bg-neutral-100 px-3 py-1 rounded-full">
                Sustainable Choice
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="detail-title">
                {product.name}
            </motion.h1>
            
            <motion.span variants={itemVariants} className="detail-price font-semibold">
                {product.price}
            </motion.span>
            
            <motion.p variants={itemVariants} className="detail-description text-[#333]">
                {product.description}
            </motion.p>

            <motion.div variants={itemVariants} className="detail-meta">
                <div>
                    <span className="meta-item-label font-bold">Material</span>
                    <span className="meta-item-value text-xl">{product.materials}</span>
                </div>
            </motion.div>

            {/* 動態計算碳足跡的 API 元件 */}
            {product.calcParams && (
                <motion.div variants={itemVariants}>
                    <CarbonFootprintTimeline calcParams={product.calcParams} />
                </motion.div>
            )}

            <motion.button 
                variants={itemVariants} 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-solid w-full mt-8 shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-[#1A1A1A] to-[#333333] text-white font-bold tracking-widest text-lg py-5"
            >
                Add to Cart
            </motion.button>
        </motion.section>
    );
}
