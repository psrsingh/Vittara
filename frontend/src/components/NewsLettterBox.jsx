import React from 'react'

const NewsLettterBox = () => {

 const OnSubmitHandler = (e) => {
            e.preventDefault();
            // Add your form submission logic here
        } 

  return (  


    <div className="text-center px-4 py-12 bg-gray-50">
      
      <p className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Subscribe now for exclusive updates and offers!
      </p>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        Join our newsletter to stay updated with the latest trends and special offers.
      </p>

      <form
        onSubmit={OnSubmitHandler}
        className="mt-8 max-w-xl mx-auto flex items-center gap-2 bg-white border border-gray-200 rounded-full shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-black"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 px-5 py-4 text-sm outline-none placeholder-gray-400"
        />

        <button
          className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-all duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLettterBox
