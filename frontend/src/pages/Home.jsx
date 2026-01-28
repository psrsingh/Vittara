import React from 'react'
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import Bestseller from '../components/Bestseller';
import OurPolicy from '../components/OurPolicy';
import NewsLettterBox from '../components/NewsLettterBox';

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <OurPolicy/>
      <NewsLettterBox/>
    </div>
  )
}

export default Home
