import React, { useEffect } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
const LatestCollection = () => {

    const {products,currency} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = React.useState([]);

   useEffect(() => {
    setLatestProducts(products.slice(0,10));
   }, []);

  return (
    <div className= "my-10">
      <div className='text-center py-8 text-3xl'>
        <Title text1="Latest Collection" text2="New Arrivals"/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        this is a sample description for the latest collection.
        </p>
      </div>

    {/* Rendering Products */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    
      {latestProducts.map((item,index) =>(
        <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={`${currency}${item.price}`}/>
      ))}

    </div>

    </div>
  )
}

export default LatestCollection
