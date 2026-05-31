"use client";
import { useTheme } from "next-themes";
import { Leaf, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function EcoToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    const isEcoMode = theme === "dark";
    return (
        <button onClick={() => setTheme(isEcoMode ? "light" : "dark")}
            className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted hover:text-foreground transition-colors" title="Toggle Eco Mode">
            {isEcoMode ? (
                <>
                    <Sun size={16} />
                    <span className="hidden md:inline">Standard Mode</span>
                </>
            ) : (
                <>
                    <Leaf size={16} className="text-green-600" />
                    <span className="hidden md:inline text-green-700">Eco Mode</span>
                </>
            )}
        </button>
    );
}