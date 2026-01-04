import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryCharge = 50;

    const value = {
        products: products,
        currency: currency,
        deliveryCharge: deliveryCharge
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
                </ShopContext.Provider> 
            );

};

export default ShopContextProvider;