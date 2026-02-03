import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


const CartTotal = () => {
  const {
    cartItems,
    products,
    currency,
    deliveryCharge,
    navigate
  } = useContext(ShopContext);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return product
      ? total + product.price * item.quantity
      : total;
  }, 0);

  const total = subtotal > 0 ? subtotal + deliveryCharge : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
      <h2 className="text-lg font-medium text-gray-900">
        Order Summary
      </h2>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Subtotal</span>
        <span>{currency}{subtotal}</span>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Delivery</span>
        <span>
          {subtotal > 0 ? `${currency}${deliveryCharge}` : `${currency}0`}
        </span>
      </div>

      <hr />

      <div className="flex justify-between text-base font-semibold text-gray-900">
        <span>Total</span>
        <span>{currency}{total}</span>
      </div>

      <button
        disabled={subtotal === 0}
        onClick={()=>navigate('/PlaceOrder')}
        className="w-full mt-4 py-3 bg-black text-white rounded-lg
                   hover:bg-gray-900 transition
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
