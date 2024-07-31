import React, {useContext, useEffect, useState} from "react";
import {RiCloseLargeLine} from "react-icons/ri";
import {ShoppingCartContext} from "../../Context/ShoppinCartContext.jsx";
import OrderCart from "./OrderCart/OrderCart.jsx";
import {OrderSum} from "../../Utlis/OrderSum.js";
import "./styles.css";
import {OrderContext} from "../../Context/OrderContext.jsx";
import {useNavigate} from "react-router-dom"

export default function Cart() {
    const navigator = useNavigate();
    const {isCartOpen, setIsCartOpen, cartProducts, setCartProducts, setCounter} = useContext(ShoppingCartContext);
    const {orders, setOrders} = useContext(OrderContext);
    const removeProduct = (selectedProduct) => {
        const newCartProducts = cartProducts;
        const index = newCartProducts.findIndex((product) => {
            return product.id === selectedProduct.id;
        });
        const deleted = newCartProducts.splice(index, 1);
        setCartProducts([...newCartProducts]);
    }
    /**
     * @param {Event} event
     * @param {{}} changedProduct
     */
    const updateProduct = (event, changedProduct) => {
        const newCartProducts = [...cartProducts];
        const index = newCartProducts.findIndex((product) => {
            return product.id === changedProduct.id;
        });
        newCartProducts[index].quantity = event.target.value;
        newCartProducts[index].totalAmount = parseFloat(newCartProducts[index].quantity * newCartProducts[index].price).toFixed(2);
        setCartProducts(newCartProducts);
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const addOrder = () => {
        const newOrder = {
            id: "MLT" + getRandomInt(99999),
            date: Date.now(),
            products: cartProducts,
            price: OrderSum(cartProducts),
            quantity: cartProducts.quantity
        }
        setOrders([...orders, newOrder]);
        setCartProducts([]);
        navigator("/user/my-orders");
    }
    console.log(orders)
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
                            <OrderCart
                                key={index}
                                updateProduct={updateProduct}
                                product={product} removeProduct={removeProduct}
                            ></OrderCart>
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


                <div
                    className={`justify-center items-center mb-20 pt-5 ${cartProducts.length > 0 ? "flex" : "hidden"}`}>
                    <button className={"rounded-xl bg-black text-white p-2 w-4/5 text-md cursor-pointer"}
                            onClick={() => {
                                addOrder()
                            }}>
                        Comprar
                    </button>
                </div>


            </div>

        </aside>
    );
}