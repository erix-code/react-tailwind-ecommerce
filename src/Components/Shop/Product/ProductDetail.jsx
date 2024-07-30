import React, {useContext, useState} from "react";
import {RiCloseLargeLine} from "react-icons/ri";
import {ProductDetailContext} from "../../../Context/ProductDetailContext.jsx";
import "./styles.css";

export default function ProductDetail() {
    const { isModalOpen, triggerModal, selectedProduct } = useContext(ProductDetailContext);


    return (
        <aside className={"fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:pt-20 xl:pt-0" } hidden={!isModalOpen}>
            <div className={"bg-white rounded-lg border shadow-2xl product-detail overflow-y-auto"}>
                <div className={"flex justify-between p-3 border border-b-gray-300"}>
                    <div className={"text-lg"}>Detalles</div>
                    <button onClick={(event) => triggerModal()}>
                        <RiCloseLargeLine></RiCloseLargeLine>
                    </button>
                </div>
                <div className={"body pt-10"}>
                    {selectedProduct && (
                        <div>
                            <figure className={"flex items-center justify-center w-full h-full relative"}>
                                <img className={"w-3/6 h-72 "} src={selectedProduct.image} alt=""/>
                                <span className={"absolute bottom-0 left-5  bg-gray-200/70 shadow-sm rounded-full px-3 py-1"}>{selectedProduct.category}</span>
                            </figure>
                            <div className={"flex flex-col justify-start p-4"}>
                                <h3 className={"text-lg font-bold"}>{selectedProduct.title}</h3>
                                <p className={"text-lg font-bold"}>{selectedProduct.price} $</p>
                                <p className={"text-lg font-bold pb-5"}>Categoria: {selectedProduct.category}</p>
                                <p className={"text-justify"}>{selectedProduct.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}