import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products } from "@/lib/data";
import AnimatedDetailInfo from "@/components/AnimatedDetailInfo";

export default async function ProductPage({ params }) {
    const { id } = await params;

    // Find the product by ID
    const product = products.find(p => p.id.toString() === id.toString()) || products[0];

    return (
        <main className="product-detail-container">
            <section className="detail-image-section">
                <Link href="/shop" className="absolute top-8 left-8 z-10 btn-text flex items-center gap-2">
                    <ArrowLeft size={16} />Back to Shop</Link>

                {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                        <span className="text-neutral-400 text-sm tracking-widest uppercase">Image Placeholder</span>
                    </div>
                )}
            </section>

            <AnimatedDetailInfo product={product} />
        </main>
    );
}