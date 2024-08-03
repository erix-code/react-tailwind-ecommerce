import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const ProductListContext = createContext();

export const ProductListProvider = ({children}) => {
    const [ products, setProducts ] = useState(null);
    const [ searchValue, setSearchValue ] = useState("");

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products").then(response => {
            setProducts(response.data);
        });
    }

    const searchProducts = (value) => {
        if (value.length > 0) {
            const filteredProducts = products.filter((product) => {
                return product.title.toLowerCase().includes(value.toLowerCase());
            });
            setProducts(filteredProducts);
        } else {

            getProducts();
        }
    }

    return(
        <ProductListContext.Provider value={{products, setProducts, searchProducts, searchValue, setSearchValue , getProducts}}>
            {children}
        </ProductListContext.Provider>
    )
}


