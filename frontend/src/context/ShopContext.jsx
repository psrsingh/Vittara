import { createContext,useEffect,useState} from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryCharge = 50;
    const [search, setSearch] = useState(""); 
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems ] = useState([]);
    const navigate = useNavigate();
    
    const addToCart = (itemId, size) => {
    setCartItems(prevCart => {
        const cartData = [...prevCart];

        const index = cartData.findIndex(
            item => item.id === itemId && item.size === size
        );

        if (index >= 0) {
            cartData[index] = {
                ...cartData[index],
                quantity: cartData[index].quantity + 1
            };
        } else {
            cartData.push({ id: itemId, size, quantity: 1 });
        }

        return cartData;
    });
};

    useEffect(() => {
  if (search.trim() !== "") {
    navigate("/collections");
  }
}, [search, navigate]);



    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems]);


    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    const removeFromCart = (itemId, size) => {
  setCartItems(prev =>
    prev.filter(
      item => !(item.id === itemId && item.size === size)
    )
  );
};

const updateQuantity = (itemId, size, action) => {
  setCartItems(prev =>
    prev
      .map(item => {
        if (item.id === itemId && item.size === size) {
          return {
            ...item,
            quantity:
              action === "inc"
                ? item.quantity + 1
                : item.quantity - 1,
          };
        }
        return item;
      })
      .filter(item => item.quantity > 0) // 👈 auto remove
  );
};


    const value = {
        products: products,
        currency: currency,
        deliveryCharge: deliveryCharge,
        search: search,
        setSearch: setSearch,
        showSearch: showSearch,
        setShowSearch: setShowSearch,
        cartItems: cartItems,
        setCartItems: setCartItems,
        addToCart: addToCart,
        getCartCount: getCartCount,
        removeFromCart: removeFromCart,
        updateQuantity: updateQuantity,
        navigate: navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
                </ShopContext.Provider> 
            );

};

export default ShopContextProvider;