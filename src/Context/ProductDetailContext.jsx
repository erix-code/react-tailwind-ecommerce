import React, {createContext, useState} from "react";

export const ProductDetailContext = createContext();
export default function ProductDetailProvider({children}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const triggerModal = () => setIsModalOpen(!isModalOpen);

    return (
        <ProductDetailContext.Provider value={{isModalOpen, triggerModal, selectedProduct, setSelectedProduct, setIsModalOpen}}>
            {children}
        </ProductDetailContext.Provider>
    )
}