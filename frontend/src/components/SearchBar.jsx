import React, { useContext,useEffect } from 'react'
import searchIcon from '../assets/search.png'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = React.useState(false); 
  const location = useLocation(); 
useEffect(() => {  
    if (location.pathname.includes('collections') ) {
        setVisible(true);
    }else {
        setVisible(false);
        setShowSearch(false);
    } 
  }, [location, setShowSearch]);

  

  return showSearch&&visible ? (
    <div className="bg-white px-4 py-3 text-center">
      
      <div className="mx-auto flex items-center gap-3 
                      border border-gray-300 rounded-full 
                      px-5 py-2 w-full sm:w-1/2">
        
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent outline-none text-sm 
                     text-gray-700 placeholder-gray-400"
        />

        <img
          src={searchIcon}
          alt="Search"
          className="w-4 opacity-50"
        />
      </div>

      <button
        onClick={() => setShowSearch(false)}
        className="mt-2 text-xs text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>

    </div>
  ):null;
}

export default SearchBar
