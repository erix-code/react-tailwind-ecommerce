import React, {useContext, useEffect, useState} from "react";
import Layout from "../../../Components/Shop/Layout.jsx";
import {OrderContext} from "../../../Context/OrderContext.jsx";
import Title from "../../../Components/Title/Title.jsx";
import {Link, useParams} from "react-router-dom";
export default function Order({params}) {
    const { orders, setOrders, findOrderById } = useContext(OrderContext);
    const { orderId } = useParams();
    const [ currentOrder, setCurrentOrder]= useState(null);
    useEffect(() => {
        console.log(orderId);
        setCurrentOrder(findOrderById(orderId));
    }, []);
    console.log(currentOrder);

    const formatDate = (timeMs) => {
        const date = new Date(timeMs);
        return date.toLocaleDateString();
    }
    return (
        <Layout>
            <Title>Order</Title>

            { currentOrder &&
                <div>
                    <div>{formatDate(currentOrder.date)}</div>
                    <div className={"body md:px-20 w-full "}>
                        {currentOrder.products.map(((product, index) => (
                                <div className={"grid grid-cols-12 gap-5 items-center pr-2"}>
                                    <figure className={"w-16  md:w-32 md:h-32 col-span-2 px-1 "}>
                                        <img className={"p-2 w-full h-full rounded-lg object-cover"} src={product.image}
                                             alt={product.title}/>
                                    </figure>
                                    <h4 className={"md:text-xl font-normal col-span-5  pl-1 md:pl-5"}>
                                        {product.title}
                                    </h4>
                                    <div className={"col-span-2 md:col-span-2"}>
                                        <input
                                            className={"border-2 border-gray-500 border-solid rounded-lg w-16 md:w-14 text-center"}
                                            type={"number"} value={product.quantity}
                                            readOnly={true}
                                            min={1}
                                        />
                                    </div>
                                    <span className={"text-sm md:text-md col-span-3"}>${product.totalAmount}</span>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            }

        </Layout>
    )
}