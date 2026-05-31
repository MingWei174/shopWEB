"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ParallaxImage from "@/components/ParallaxImage";

export default function ProductCard3D({ product }) {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Get mouse position relative to the center of the card (-0.5 to 0.5)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Apply smooth spring physics to the motion values
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Rotate card based on mouse position (max 12 degrees)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
    
    // Dynamic shadow positioning to enhance the 3D feel
    const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], ["-20px", "20px"]);
    const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], ["-20px", "20px"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: "1200px",
                transformStyle: "preserve-3d"
            }}
            className="w-full relative z-10"
        >
            <motion.div
                style={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    transformStyle: "preserve-3d"
                }}
                animate={{
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -15 : 0,
                    boxShadow: isHovered 
                        ? "0px 30px 50px -15px rgba(0,0,0,0.2)" 
                        : "0px 10px 30px -10px rgba(0,0,0,0.05)"
                }}
                transition={{ 
                    duration: 0.4, 
                    ease: "easeOut" 
                }}
                className="w-full bg-white rounded-3xl p-5 cursor-pointer will-change-transform"
            >
                <Link href={`/shop/${product.id}`} className="block w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
                    
                    {/* Image Area - Floats higher on Z axis */}
                    <motion.div 
                        animate={{ translateZ: isHovered ? 60 : 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative shadow-inner"
                    >
                        <ParallaxImage src={product.image} alt={product.name} />
                        
                        {/* Soft overlay gradient on hover for gloss effect */}
                        <motion.div 
                            animate={{ opacity: isHovered ? 0.2 : 0 }}
                            className="absolute inset-0 bg-gradient-to-tr from-white to-transparent pointer-events-none mix-blend-overlay"
                        />
                    </motion.div>

                    {/* Text Area - Floats slightly */}
                    <motion.div 
                        animate={{ translateZ: isHovered ? 30 : 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col mt-5 px-2"
                    >
                        <span className="font-serif italic text-xl text-[#1A1A1A] mb-1">{product.name}</span>
                        <span className="font-sans text-[#888888] text-sm tracking-wider uppercase font-medium">{product.price}</span>
                    </motion.div>
                </Link>
            </motion.div>
        </motion.div>
    );
}
