import React from 'react'
import vittaraLogo from '../assets/Vittara.png';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-32">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16
                      grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr]
                      gap-12 text-sm text-gray-600">

        {/* Brand */}
        <div>
          <img src={vittaraLogo} className="w-32 mb-6" alt="Vittara logo" />
          <p className="max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            facilis incidunt doloremque et quos, autem accusantium.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className="text-gray-900 text-sm font-semibold tracking-widest mb-6">
            COMPANY
          </p>
          <ul className="flex flex-col gap-3">
            <li className="hover:text-black cursor-pointer transition">Home</li>
            <li className="hover:text-black cursor-pointer transition">About Us</li>
            <li className="hover:text-black cursor-pointer transition">Delivery</li>
            <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-gray-900 text-sm font-semibold tracking-widest mb-6">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-3">
            <li className="hover:text-black transition cursor-pointer">
              +91 6556511561
            </li>
            <li className="hover:text-black transition cursor-pointer">
              contact@vittara.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <p className="py-6 text-xs text-center text-gray-500 tracking-wide">
          © 2024 VITTARA — All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
