
import React,{ createContext} from "react";

import all_product from "../Components/Assets/all_product";
export const shopContext = createContext("");
const ShopContextProvider =(props) =>{
    const contextvalue ={all_product};
    return(
        <shopContext.Provider value ={contextvalue}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;