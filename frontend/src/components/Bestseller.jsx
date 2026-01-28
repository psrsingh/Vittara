import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';
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
     <div className='text-center text-3xl py-8'>
        <Title text1={"Best"} text2={"sellers"} />
        <p className=" w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 " > 
            Our top-selling products that customers love the most.
        </p>
        
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

            {bestsellers.map((item,index) => (
                <ProductItem key={index} id={item.id} name={item.name} image={item.image} price={item.price} />
            ))}
                 
        </div>




        </div>
  );
};

export default Bestseller;
