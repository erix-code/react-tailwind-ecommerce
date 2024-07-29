import React, {useContext, useState} from "react";
import "./produc-detail.css";
import {RiCloseLargeLine} from "react-icons/ri";
import {ProductDetailContext} from "../../../Context/ProductDetailContext.jsx";
export default function ProductDetail() {
    const { isModalOpen, triggerModal } = useContext(ProductDetailContext);

    return (
        <aside className={"fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" } hidden={isModalOpen}>
            <div className={"bg-white rounded-lg border shadow-2xl product-detail"}>
                <div className={"flex justify-between p-5 border border-b-gray-500"}>
                    <div className={"text-lg"}>Detalles</div>
                    <button onClick={(event) => triggerModal()}>
                        <RiCloseLargeLine></RiCloseLargeLine>
                    </button>
                </div>
                <div>

                </div>
            </div>
        </aside>
    );
}