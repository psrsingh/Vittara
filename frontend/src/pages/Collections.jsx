import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collections = () => {
  const { products } = useContext(ShopContext)

  const [showFilters, setShowFilters] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortOption, setSortOption] = useState('Relevance')

  const categories = ['Men', 'Women']
  const subCategories = ['Topwear', 'Bottomwear', 'Ethnic Wear', 'Shirts', 'Winterwear']

  const toggleCategory = (e) => {
    const value = e.target.value
    setCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    setSubCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  useEffect(() => {
    let updated = [...products]

    if (category.length > 0) {
      updated = updated.filter(p => category.includes(p.category))
    }

    if (subCategory.length > 0) {
      updated = updated.filter(p => subCategory.includes(p.subCategory))
    }

    if (sortOption === 'Price: Low to High') {
      updated.sort((a, b) => a.price - b.price)
    } else if (sortOption === 'Price: High to Low') {
      updated.sort((a, b) => b.price - a.price)
    }

    setFilterProducts(updated)
  }, [products, category, subCategory, sortOption])

  return (
    <div className='flex flex-col sm:flex-row gap-10 pt-10 border-t border-gray-200'>

      <aside className='w-full sm:w-64'>
        <div
          onClick={() => setShowFilters(!showFilters)}
          className='flex justify-between cursor-pointer uppercase text-sm font-medium'
        >
          Filter
        </div>

        <div className={`${showFilters ? 'block' : 'hidden'} sm:block`}>

          <div className='my-6 h-px bg-gray-200' />

          <p className='text-xs uppercase mb-4 text-gray-500'>Category</p>
          {categories.map(item => (
            <label key={item} className='flex gap-2 text-sm'>
              <input
                type="checkbox"
                value={item}
                checked={category.includes(item)}
                onChange={toggleCategory}
              />
              {item}
            </label>
          ))}

          <div className='my-6 h-px bg-gray-200' />

          <p className='text-xs uppercase mb-4 text-gray-500'>Product Type</p>
          {subCategories.map(item => (
            <label key={item} className='flex gap-2 text-sm'>
              <input
                type="checkbox"
                value={item}
                checked={subCategory.includes(item)}
                onChange={toggleSubCategory}
              />
              {item}
            </label>
          ))}

        </div>
      </aside>

      <main className='flex-1'>
        <div className='flex justify-between mb-6'>
          <Title text1="All" text2="Collections" />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className='border px-4 py-2'
          >
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filterProducts.map(item => (
            <ProductItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Collections
