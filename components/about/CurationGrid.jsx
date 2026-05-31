"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Leaf, Handshake, Hourglass } from "lucide-react";
import { useRef } from "react";

const standards = [
    {
        id: "eco-material",
        icon: <Leaf className="w-12 h-12 text-[#1A1A1A]" />,
        title: "永續材質",
        desc: "使用有機、回收、或低碳足跡的天然原料。我們拒絕使用對環境造成長遠負擔的合成塑膠與有毒化學染劑。"
    },
    {
        id: "fair-trade",
        icon: <Handshake className="w-12 h-12 text-[#1A1A1A]" />,
        title: "公平貿易與道德生產",
        desc: "確保生產鏈的每個環節都符合倫理。從原物料採集到工廠縫製，所有參與者都應獲得合理報酬與安全的工作環境。"
    },
    {
        id: "timeless",
        icon: <Hourglass className="w-12 h-12 text-[#1A1A1A]" />,
        title: "雋永設計",
        desc: "不盲目追隨短暫的流行趨勢，以經典、實用的設計為主。確保商品在十年後依然美麗且不過時。"
    }
];

function Card3D({ standard }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            className="w-full h-full"
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-3xl shadow-lg hover:shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
                {/* 內部 3D 浮動元素 */}
                <motion.div 
                    style={{ transform: "translateZ(50px)" }}
                    className="mb-6 bg-white/80 p-5 rounded-full shadow-inner"
                >
                    {standard.icon}
                </motion.div>
                
                <motion.h3 
                    style={{ transform: "translateZ(30px)" }}
                    className="font-serif text-2xl text-[#1A1A1A] mb-4"
                >
                    {standard.title}
                </motion.h3>
                
                <motion.p 
                    style={{ transform: "translateZ(20px)" }}
                    className="text-[#666666] leading-relaxed"
                >
                    {standard.desc}
                </motion.p>

                {/* 玻璃反光特效 */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent pointer-events-none" />
            </motion.div>
        </motion.div>
    );
}

export default function CurationGrid() {
    return (
        <section className="py-32 px-4 md:px-20 bg-[#E5E5E5] relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-[0.2em] uppercase text-[#888888] mb-4 block"
                    >
                        The Curation Standard
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl text-[#1A1A1A]"
                    >
                        Heirloom Select 的選物考驗
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {standards.map((standard, index) => (
                        <motion.div
                            key={standard.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="h-[400px]"
                        >
                            <Card3D standard={standard} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
