import React, {createContext, useState} from "react";

export const ProductDetailContext = createContext();
export default function ProductDetailProvider({children}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const triggerModal = () => setIsModalOpen(!isModalOpen);

    return (
        <ProductDetailContext.Provider value={{isModalOpen, triggerModal}}>
            {children}
        </ProductDetailContext.Provider>
    )
}