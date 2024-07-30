import {createContext, useState} from "react";
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const  [counter, setCounter] = useState(0);
    // Stored products in Cart
    const [ cartProducts, setCartProducts ] = useState([]);
    const [ isCartOpen, setIsCartOpen ] = useState(false);

    console.log(counter);
    return (
        <ShoppingCartContext.Provider value={
            {
            counter, setCounter,
            cartProducts, setCartProducts,
            isCartOpen, setIsCartOpen
            }
        }>
          {children}
        </ShoppingCartContext.Provider>
    );
}