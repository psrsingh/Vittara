import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Bestseller = () => {

  const { products } = useContext(ShopContext);
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const bestsellerProducts = products.filter(
      (product) => product.bestseller
    );
    setBestsellers(bestsellerProducts.slice(0, 3));
  }, [products]);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">Bestsellers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bestsellers.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
