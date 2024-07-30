import React, {useEffect, useContext} from "react";
import {ShoppingCartContext} from "../../Context/ShoppinCartContext.jsx";
import {ProductDetailContext} from "../../Context/ProductDetailContext.jsx";
import { GoPlus } from "react-icons/go";

export default function Card({product}) {
    const { counter, setCounter, setCartProducts, cartProducts  } = useContext(ShoppingCartContext);
    const { isModalOpen, triggerModal, setSelectedProduct } = useContext(ProductDetailContext);

    const onSelectProduct = (product) => {
        triggerModal();
        setSelectedProduct(product);
    }

    const addProductsToCart= (product) => {
        setCounter(counter + 1);
        setCartProducts([...cartProducts, product]);
    }

    return(
        <div className={"flex flex-row justify-center items-center"} >
            <div className={"bg-white cursor-pointer w-56 h-72 rounded-lg text-black"}>
                <figure className={"relative mb-2 w-full h-4/5  hover:scale-110"}>
                    <span
                        className={"absolute bottom-0 left-0 bg-white/60 rounded-lg text-sm m-2 px-2 py-0.5"}>{product.category}</span>
                    <img src={product.image} alt={product.title} onClick={() => onSelectProduct(product)}
                         className={"w-full h-full object-cover rounded-lg"}
                    />
                    <button
                        onClick={() => {addProductsToCart(product)}}
                        className={"absolute top-0 right-0 flex justify-center items-center rounded-full bg-white w-8 h-8 m-2 p-1 font-bold"}>
                        +
                    </button>
                </figure>
                <p className={"flex justify-between pl-2 cursor-text"}>
                    <span className={"text-sm font-normal"}>{product.title}</span>
                    <span className={"text-lg font-semibold min-w-14"}>{product.price} $</span>
                </p>
            </div>
        </div>
    )
}


