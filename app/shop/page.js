import ProductCard3D from "@/components/ProductCard3D";
import { products } from "@/lib/data";

export default function Shop() {
    return (
        <main className="shop-container">
            <header className="shop-header">
                <h1 className="shop-title">Collection</h1>
                <p className="text-sm text-muted tracking-widest uppercase">
                    Spring / Summer 2026
                </p>
            </header>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard3D key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}
