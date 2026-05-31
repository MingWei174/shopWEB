import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="hero-section">

      {/* 品牌創立年份 (Meta) */}
      <FadeIn delay={0.1}>
        <p className="hero-meta">
          Est. 2026 — Workshop inspired by SDG12.
        </p>
      </FadeIn>

      {/* 品牌主標題 (Title) */}
      <FadeIn delay={0.2}>
        <h1 className="hero-title">
          Heirloom.<br />
          <span className="hero-highlight">Select.</span>
        </h1>
      </FadeIn>

      {/* 品牌宣言 (Subtitle) */}
      <FadeIn delay={0.4}>
        <p className="hero-subtitle">
          A curated selection for sustainable living.
          <br />Designed to disappear, built to last.
        </p>
      </FadeIn>

      {/* 行動呼籲 (Actions) */}
      <FadeIn delay={0.6}>
        <div className="hero-actions">
          <Link href="/shop" className="btn-solid">
            Discover Collection
          </Link>
        </div>
      </FadeIn>

    </main>
  );
}