import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <div className="border-t border-gray-100 pt-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Title text1="My" text2="Orders" />
        </div>

        <div className="space-y-6">
          {products.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-8
                         p-6 rounded-xl border border-gray-100
                         bg-white hover:bg-gray-50/50 transition"
            >
              {/* Left */}
              <div className="flex items-center gap-6 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-lg bg-gray-50 p-3"
                />

                <div className="space-y-1">
                  <p className="text-base font-medium text-gray-800">
                    {item.name}
                  </p>

                  <p className="text-base text-gray-500">
                    {currency}{item.price}
                  </p>

                  <div className="flex gap-6 text-sm text-gray-400">
                    <span>Qty 1</span>
                    <span>Size M</span>
                  </div>
                </div>
              </div>

              {/* Middle – Status */}
              <div className="flex flex-col items-center md:items-end gap-2">
                <span className="text-xs font-medium px-3 py-1 rounded-full
                                 bg-green-50 text-green-600 border border-green-100">
                  Ready to ship
                </span>

                <div className="text-sm text-gray-400 md:text-right">
                  <span className="block">Ordered</span>
                  <span className="text-gray-600 font-medium text-base">
                    2024-01-01
                  </span>
                </div>
              </div>

              {/* Right – Action */}
              <button
                className="text-sm px-5 py-2 rounded-lg
                           border border-gray-200 text-gray-700
                           hover:border-gray-300 hover:bg-gray-50
                           transition whitespace-nowrap"
              >
                Track order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders
