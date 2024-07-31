import React, {useEffect, useContext} from "react";
import {ShoppingCartContext} from "../../Context/ShoppinCartContext.jsx";
import {ProductDetailContext} from "../../Context/ProductDetailContext.jsx";
import {GoPlus} from "react-icons/go";

export default function Card({product}) {
    const {
        counter,
        setCounter,
        setCartProducts,
        cartProducts,
        isCartOpen,
        setIsCartOpen
    } = useContext(ShoppingCartContext);
    const {isModalOpen, setIsModalOpen, triggerModal, setSelectedProduct} = useContext(ProductDetailContext);

    const onSelectProduct = (product) => {
        triggerModal();
        setSelectedProduct(product);
    }
    const updateCartProducts = (newProduct) => {
        const newCartProducts = [...cartProducts];
        const productIndex = newCartProducts.findIndex((product) => {
            return product.id === newProduct.id;
        });
        if (productIndex >= 0) {
            newCartProducts[productIndex].quantity += 1;
            newCartProducts[productIndex].totalAmount = newCartProducts[productIndex].quantity * newCartProducts[productIndex].price;
            setCartProducts([...newCartProducts]);

        } else {
            newProduct.quantity = 1;
            newProduct.totalAmount = parseFloat(newProduct.quantity * newProduct.price).toFixed(2);
            setCartProducts([...newCartProducts, newProduct]);
        }
    }
    const addProductsToCart= (event, product) => {
        event.stopPropagation();
        updateCartProducts(product);
        setIsModalOpen(false);
        setIsCartOpen(true);
    }
    const formatTitle = (title) => {
        let newTitle = title;
        if (title.length > 50) {
            newTitle = title.substring(0, 50) + "...";
        }
        return newTitle;
    }
    useEffect(() => {
        setCounter(cartProducts.length);
    }, [cartProducts])

    return (
        <div className={"flex flex-row justify-center items-center  "}>
            <div className={"bg-white cursor-pointer w-44 h-52  md:w-56  md:h-72 rounded-lg text-black"}>
                <figure className={"relative mb-2 w-full h-4/5  hover:scale-110"}>
                    <span
                        className={"absolute bottom-0 left-0 bg-white/60 rounded-lg text-sm m-2 px-2 py-0.5"}>{product.category}</span>
                    <img src={product.image} alt={product.title} onClick={() => onSelectProduct(product)}
                         className={"w-full h-full object-cover rounded-lg"}
                    />
                    <button
                        onClick={(event) => {
                            addProductsToCart(event, product)
                        }}
                        className={"absolute top-0 right-0 flex justify-center items-center rounded-full bg-white w-8 h-8 m-2 p-1 font-bold"}>
                        +
                    </button>
                </figure>
                <p className={"flex justify-between pl-2 cursor-text "}>
                    <span className={"text-xs md:text-sm font-normal "}>{formatTitle(product.title)}</span>
                    <span className={"text-md md:text-lg font-semibold min-w-14"}>{product.price}$</span>
                </p>
            </div>
        </div>
    )
}


