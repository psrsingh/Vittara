import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();

      let filteredProducts = productCopy.filter(
        (item) =>
          item.category === category &&
          item.subCategory === subCategory
      );

      setRelatedProducts(filteredProducts.slice(0, 4));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      {/* Title */}
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={"Products"} />
      </div>

      {/* Products Grid (unchanged) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="group p-4 rounded-lg border border-gray-100
                       hover:border-gray-200 transition"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-md">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-48 object-cover
                           group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <h3 className="mt-3 text-sm text-gray-800 truncate">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              ${product.price.toFixed(2)}
            </p>

            {/* Button */}
            <button
              className="mt-3 w-full text-xs py-2 rounded-md
                         border border-gray-200 text-gray-600
                         hover:bg-gray-900 hover:text-white
                         transition"
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
