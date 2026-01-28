import React from 'react'
import exchangeIcon from '../assets/exchange.png'
import qualityCheckIcon from '../assets/qualitycheck.png'
import customerSupportIcon from '../assets/customersupport.png'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
    <div>
        <img src={exchangeIcon} className="w-14 h-14 mx-auto"alt="" />
        <p className='font-semibold'>Easy Exchange Policy </p>
        <p className='text-xs sm:text-sm md:text-base'>We offer a hassle-free exchange process for all our products.</p>

    </div>

     <div>
        <img src={qualityCheckIcon} className="w-14 h-14 mx-auto"alt="" />
        <p className='font-semibold'>Easy 7 Days Return Policy </p>
        <p className='text-xs sm:text-sm md:text-base'>We provide 7 days return policy for all our products.</p>

    </div>

     <div>
        <img src={customerSupportIcon} className="w-14 h-14 mx-auto"alt="" />
        <p className='font-semibold'>Customer Support </p>
        <p className='text-xs sm:text-sm md:text-base'>Our dedicated support team is available 24/7 to assist you with any queries. </p>

    </div>

     
    </div>
  )
}

export default OurPolicy
