'use client'

import "./ProductCard.css"
import Image from "next/image"
import { Product } from "@/types"
import { Like } from "@/assets/Icons";
import { useState } from "react";

const ProductCard = ({ product }: { product: Product }) => {
    const [liked, setLiked] = useState(false);

    const limitWords = (text: string, count: number) => {
        return text.split(" ").slice(0, count).join(" ") + "...";
    };

    return (
        <div className="product">
            <div className="product_image_wrapper">
                <Image
                    className="product_image"
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 250px"
                />
            </div>
            <div className="product_info">
                <div>
                    <h2 className="product_title">{limitWords(product.title, 2)}</h2>
                    <p className="product_desc">{limitWords(product.description, 3)}</p>
                </div>
                <Like
                    className={`product_like ${liked ? "liked" : ""}`}
                    onClick={() => setLiked(prev => !prev)}
                />
            </div>
        </div>
    )
}

export default ProductCard