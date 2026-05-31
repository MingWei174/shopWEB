"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage({ src, alt, className }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    // 2. 轉換數值：滾動 0% -> y移 -15%；滾動 100% -> y移 15%
    // 這種「反向移動」或「速度差」就是視差感的來源
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    return (
        <div
            ref={ref}
            className={`relative w-full h-full overflow-hidden ${className}`}
        >
            <motion.div
                style={{ y }}
                className="absolute top-[-15%] left-0 w-full h-[130%] bg-neutral-200"
            >
                {src && (
                    <img
                        src={src}
                        alt={alt || ""}
                        className="w-full h-full object-cover"
                    />
                )}
            </motion.div>
        </div>
    );
}