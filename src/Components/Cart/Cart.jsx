import React, {useContext, useState} from "react";
import {RiCloseLargeLine} from "react-icons/ri";
import {ShoppingCartContext} from "../../Context/ShoppinCartContext.jsx";
import "./styles.css";

export default function Cart() {
    const { isCartOpen, setIsCartOpen } = useContext(ShoppingCartContext);

    return (
        <aside className={"fixed top-20 right-0 md:pt-20 xl:pt-0"}
               hidden={!isCartOpen}>
            <div className={"bg-white rounded-lg border shadow-2xl cart-sidebar overflow-y-auto"}>
                <div className={"flex justify-between p-3 border border-b-gray-300"}>
                    <div className={"text-lg"}>Mi orden</div>
                    <button onClick={(event) => setIsCartOpen(!isCartOpen)}>
                        <RiCloseLargeLine></RiCloseLargeLine>
                    </button>
                </div>
                <div className={"body pt-10"}>
                </div>
            </div>
        </aside>
    );
}