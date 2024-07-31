import React, {useContext, useEffect, useState} from "react";
import {RiCloseLargeLine} from "react-icons/ri";
import {ShoppingCartContext} from "../../Context/ShoppinCartContext.jsx";
import OrderCart from "./OrderCart/OrderCart.jsx";
import {OrderSum} from "../../Utlis/OrderSum.js";
import "./styles.css";

export default function Cart() {
    const { isCartOpen, setIsCartOpen, cartProducts, setCartProducts, setCounter } = useContext(ShoppingCartContext);

    const removeProduct = (selectedProduct) => {
        const newCartProducts = cartProducts;
        const index = newCartProducts.findIndex((product) => {
            return product.id === selectedProduct.id;
        });
        const deleted = newCartProducts.splice(index, 1);
        setCartProducts([...newCartProducts]);
    }

    return (
        <aside className={"fixed top-20 right-0 md:pt-0 xl:pt-0 "}
               hidden={!isCartOpen}>
            <div
                className={"bg-white rounded-lg border shadow-2xl md:w-[520px] md:h-[100vh] w-screen h-screen overflow-y-auto"}>
                <div className={"flex justify-between p-3 border border-b-gray-300"}>
                    <div className={"text-lg"}>Mi orden</div>
                    <button onClick={(event) => setIsCartOpen(!isCartOpen)}>
                        <RiCloseLargeLine></RiCloseLargeLine>
                    </button>
                </div>
                <div className={"body pt-2"}>
                    {cartProducts.map(((product, index) => (
                            <OrderCart key={index} product={product} removeProduct={(product) => {removeProduct(product)}}></OrderCart>
                        )
                    ))}
                </div>
                <div className={`justify-between items-center p-8 ${cartProducts.length > 0 ? "flex" : "hidden"}`}>
                    <div className={"font-semibold text-xl  "}>
                        Precio total:
                    </div>
                    <div>
                        {OrderSum(cartProducts)}$
                    </div>
                </div>


                <div className={"flex justify-center items-center mb-20 pt-5"}>
                    <button className={"rounded-xl bg-black text-white p-2 w-4/5 text-md"}>
                        Comprar
                    </button>
                </div>


            </div>

        </aside>
    );
}