import React from 'react'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Cart from './pages/Cart';  
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Collections from './pages/Collections';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';



import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      {/* Main content */}
      <main className="flex-grow px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productsId" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
};


export default App
