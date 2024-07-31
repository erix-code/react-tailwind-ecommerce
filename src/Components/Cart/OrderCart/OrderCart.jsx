import React from "react";
import {RiCloseLargeLine} from "react-icons/ri";

export default function OrderCart({product}) {
    console.log(product);
    return(
        <div className={"grid grid-cols-10 gap-5 items-center"}>
            <figure className={"w-24 h-24 col-span-2 px-1"}>
                <img className={"w-full h-full rounded-lg object-cover"} src={product.image} alt={product.title}/>
            </figure>
            <h4 className={"text-lg font-light col-span-3 pl-4"}>
                {product.title}
            </h4>
            <div className={"col-span-2"}>
                <input className={"border-2 border-gray-500 border-solid rounded-lg w-14 text-center"} type={"number"} value={product.quantity} />
            </div>
            <span className={"col-span-2"}>${product.totalAmount }</span>
            <RiCloseLargeLine className={"col-span-1"}></RiCloseLargeLine>
        </div>
    )

}