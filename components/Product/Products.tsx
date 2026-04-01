import "./Products.css"
import { Product } from "@/types";
import { getProducts } from "@/lib/api";
import ProductCard from "./ProductCard/ProductCard";
import FilterPanel from "./FilterPanel/FilterPanel";
import ProductNav from "./ProductNav/ProductNav";

const Products = async () => {
    const data = await getProducts();

    const products = data.products.map((p: any) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        price: p.price,
        image: p.thumbnail,
        rating: p.rating,
        inStock: p.stock > 0
    }));

    return (
        <div>
            <ProductNav list={products.length} />
            <div className="grid">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products