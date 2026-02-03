import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";

const Cart = () => {
  const { cartItems, products, currency, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    cartItems.forEach(cartItem => {
      const product = products.find(
        prod => prod.id === cartItem.id
      );

      if (product) {
        tempData.push({
          ...product,
          size: cartItem.size,
          quantity: cartItem.quantity,
        });
      }
    });

    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className="border-t pt-16 px-4 sm:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-10">
          <Title text1="YOUR" text2="CART" />
        </div>

        {/* Empty State */}
        {cartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-gray-500">
            <span className="text-6xl mb-4">🛒</span>
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-sm text-gray-400">
              Add items to start shopping
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">
              {cartData.map(item => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="bg-white rounded-xl shadow-sm p-5 flex gap-6 items-center"
                >
                  {/* Image */}
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Size: {item.size}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, "dec")
                        }
                        className="w-8 h-8 rounded-full border flex items-center justify-center
                                   hover:bg-gray-100 transition"
                      >
                        −
                      </button>

                      <span className="text-sm font-medium w-5 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, "inc")
                        }
                        className="w-8 h-8 rounded-full border flex items-center justify-center
                                   hover:bg-gray-100 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right min-w-[90px]">
                    <p className="text-lg font-semibold text-gray-900">
                      {currency}
                      {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CART TOTAL */}
            <div className="lg:sticky lg:top-24 h-fit">
              <CartTotal />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
