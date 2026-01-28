import { createContext,useState} from "react";
import { products } from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryCharge = 50;
    const [search, setSearch] = useState(""); 
    const [showSearch, setShowSearch] = useState(false);

    const value = {
        products: products,
        currency: currency,
        deliveryCharge: deliveryCharge,
        search: search,
        setSearch: setSearch,
        showSearch: showSearch,
        setShowSearch: setShowSearch 
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
                </ShopContext.Provider> 
            );

};

export default ShopContextProvider;