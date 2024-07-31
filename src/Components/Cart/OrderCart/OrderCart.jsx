import React from "react";
import {RiCloseLargeLine} from "react-icons/ri";

export default function OrderCart({product}) {
    console.log(product);
    return(
        <div className={"grid grid-cols-12 gap-5 items-center pr-2"}>
            <figure className={"w-16  md:w-24 md:h-24 col-span-2 px-1"}>
                <img className={"w-full h-full rounded-lg object-cover"} src={product.image} alt={product.title}/>
            </figure>
            <h4 className={"md:text-lg font-light col-span-5  pl-2"}>
                {product.title}
            </h4>
            <div className={"col-span-2 md:col-span-2"}>
                <input className={"border-2 border-gray-500 border-solid rounded-lg w-8 md:w-14 text-center"} type={"number"} value={product.quantity} />
            </div>
            <span className={"text-sm md:text-md col-span-2"}>${product.totalAmount }</span>
            <RiCloseLargeLine className={"col-span-1"}></RiCloseLargeLine>
        </div>
    )

}