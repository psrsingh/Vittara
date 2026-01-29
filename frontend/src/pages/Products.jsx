import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Products = () => {
  const { productsId } = useParams();
  const { products } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [imgSrc, setImgSrc] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find(
        (item) => item.id === productsId || item.id === Number(productsId),
      );
      if (product) {
        setProductData(product);
        setImgSrc(product.image[0]);
      }
    }
  }, [productsId, products]);

  if (!productData) return null;

  return (
    <div className="border-t border-slate-100 pt-16">
      <div className="max-w-6xl mx-auto px-5 flex flex-col lg:flex-row gap-20">
        {/* Images */}
        <div className="lg:w-1/2 flex gap-8">
          <div className="flex lg:flex-col gap-4">
            {productData.image.map((img, index) => (
              <button
                key={index}
                onClick={() => setImgSrc(img)}
                className={`w-20 h-20 border transition
                  ${imgSrc === img ? "border-slate-300" : "border-slate-100"}
                `}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="flex-1 border border-slate-100">
            <img
              src={imgSrc}
              alt={productData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 flex flex-col gap-9">
          {/* Title + Price */}
          <div className="space-y-2">
            <h1 className="text-3xl font-normal text-slate-900">
              {productData.name}
            </h1>
            <p className="text-xl text-slate-700">${productData.price}</p>
          </div>

          {/* Description */}
          <p className="text-base text-slate-600 leading-relaxed max-w-lg">
            {productData.description}
          </p>

          {/* Sizes */}
          <div className="space-y-3">
            <span className="text-sm uppercase tracking-wide text-slate-500">
              Size
            </span>

            <div className="flex gap-4">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 text-base border transition
                    ${
                      selectedSize === size
                        ? "border-slate-300 bg-slate-100"
                        : "border-slate-100 hover:border-slate-200"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>

            {!selectedSize && (
              <p className="text-sm text-slate-400">
                Select a size to continue
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-6 pt-6">
            <button
              disabled={!selectedSize}
              className="px-10 py-3 text-base border border-slate-200 text-slate-800
               hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Add to Cart
            </button>

            <button
              disabled={!selectedSize}
              className="px-10 py-3 text-base border border-slate-200 text-slate-800
               hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Buy Now
            </button>
          </div>

          {/* Divider + Info */}
          <div className="pt-10 space-y-4">
            <hr className="border-slate-100 w-4/5" />
            <div className="text-sm text-slate-500 space-y-1">
              <p>100% Original products</p>
              <p>Free delivery on orders over $50</p>
              <p>30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
