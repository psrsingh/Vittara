import React, { useState, useContext } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import Orders from "./Orders"; 

const PlaceOrder = () => {
  const { cartItems } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();
 
  return (
    <div className="flex flex-col lg:flex-row gap-12 pt-10 lg:pt-20 min-h-[80vh]
                    border-t bg-gradient-to-b from-gray-50 to-white
                    px-4 sm:px-8">

      {/* ---------------- LEFT : DELIVERY INFO ---------------- */}
      <div className="flex flex-col gap-6 w-full lg:max-w-[520px]
                      bg-white p-7 rounded-3xl
                      border border-gray-200 shadow-sm">

        <Title text1="Delivery" text2="Information" />

        {/* Name */}
        <div className="flex gap-3">
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
        </div>

        {/* Contact */}
        <input type="email" placeholder="Email Address" className="input" />
        <input type="text" placeholder="Phone Number" className="input" />

        {/* Address */}
        <input type="text" placeholder="Street Address" className="input" />

        <div className="flex gap-3">
          <input type="text" placeholder="City" className="input" />
          <input type="text" placeholder="State" className="input" />
        </div>

        <input type="text" placeholder="Zip Code" className="input" />

        {/* ---------------- PAYMENT METHOD ---------------- */}
        <div className="mt-6">
          <div className="flex items-center gap-4 mb-5">
            <p className="text-xs font-semibold tracking-[0.25em] text-gray-500">
              PAYMENT METHOD
            </p>
            <span className="flex-1 h-[1px] bg-gray-300"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* STRIPE */}
            <label
              className={`payment-card ${
                paymentMethod === "stripe" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "stripe"}
                onChange={() => setPaymentMethod("stripe")}
                hidden
              />
              <span className="payment-text text-indigo-600">
                STRIPE
              </span>
            </label>

            {/* RAZORPAY */}
            <label
              className={`payment-card ${
                paymentMethod === "razorpay" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "razorpay"}
                onChange={() => setPaymentMethod("razorpay")}
                hidden
              />
              <span className="payment-text text-gray-800">
                RAZORPAY
              </span>
            </label>

            {/* CASH ON DELIVERY */}
            <label
              className={`payment-card ${
                paymentMethod === "cod" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                hidden
              />
              <span className="payment-text text-gray-700">
                CASH ON DELIVERY
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* ---------------- RIGHT : ORDER SUMMARY ---------------- */}
      <div className="w-full lg:max-w-[420px]">
        <CartTotal />

        <button
          disabled={cartItems.length === 0}
          onClick={()=>navigate('/Orders')} 
          className="w-full mt-4 py-3 rounded-2xl
                     bg-green-600 text-white text-sm font-semibold
                     hover:bg-green-700 active:scale-[0.97]
                     transition-all duration-200
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
