import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom';
import searchIcon from "../assets/search.png";
import profileIcon from "../assets/profile.png";
import cartIcon from "../assets/cart.png";
import menuIcon from "../assets/menu.png";
import dropdownIcon from "../assets/dropdown.png";

import vittaraLogo from '../assets/Vittara.png';
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium items-center py-4'>

      <img src={vittaraLogo} alt="VITTARA" className='w-32 md:w-40'/>




    <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

     <NavLink to={'/'} className='flex flex-col items-center gap-1'>
         <p>HOME</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden a' />
    </NavLink>


    <NavLink to={'/about'} className='flex flex-col items-center gap-1'>
         <p>ABOUT</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden a' />
    </NavLink>

    <NavLink to={'/collections'} className='flex flex-col items-center gap-1'>
         <p>COLLECTIONS</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden a' />
    </NavLink>

    <NavLink to={'/contacts'} className='flex flex-col items-center gap-1'>
         <p>CONTACTS</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden a' />
    </NavLink>


    </ul>

   
   <div className='flex items-center gap-6'>
<img src={searchIcon} className='w-6 cursor-pointer' alt="" />

<div className='relative group '>
  <img src={profileIcon} className='w-7 cursor-pointer' alt="" />

    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
      <div className='flex flex-col gap-3 bg-slate-100 shadow-lg p-4 rounded-md w-32'>
      <p className='cursor-pointer hover:text-black'>My profile</p>
      <p className='cursor-pointer hover:text-black'>Orders</p>
      <p className='cursor-pointer hover:text-black'>Logout</p>
      </div>
    </div>


</div>

<Link to={'/Cart'} className='relative'>
     <img src={cartIcon} className='w-7 min-w-7' alt="" />
        <p className='absolute top-0 right-0 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs '>10</p>
</Link>

<img onClick={() => setVisible(!visible)} src={menuIcon} className='w-5 cursor-pointer sm:hidden ' alt="" />
</div>

{/* Menu for sidebar */}
<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-2/3 p-4 h-full shadow-lg' : 'w-0 h-0 p-0' }  sm:hidden flex flex-col gap-6 z-50`}>
     <div className='flex flex-col text-gray-600'>
    <div onClick={()=>setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer w-fit'>
      <img src={dropdownIcon} alt="VITTARA" className='h-5 rotate-90'/>
      <p>Back</p>
    </div>

    <NavLink onClick={()=>setVisible(false)} to={'/'} className='p-3 border-b border-gray-300 w-full'>HOME</NavLink>
    <NavLink onClick={()=>setVisible(false)} to={'/about'} className='p-3 border-b border-gray-300 w-full'>ABOUT</NavLink>
    <NavLink onClick={()=>setVisible(false)} to={'/collections'} className='p-3 border-b border-gray-300 w-full'>COLLECTIONS</NavLink>
    <NavLink onClick={()=>setVisible(false)} to={'/contacts'} className='p-3 border-b border-gray-300 w-full'>CONTACTS</NavLink>
     </div>
</div>
  </div>
  )
}

export default Navbar
