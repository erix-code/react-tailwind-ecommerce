import React, {useContext} from "react";
import Layout from "../../../Components/Shop/Layout.jsx";
import Title from "../../../Components/Title/Title.jsx";
import {RiCloseLargeLine} from "react-icons/ri";
import {OrderContext} from "../../../Context/OrderContext.jsx";
import OrderCart from "../../../Components/Cart/OrderCart/OrderCart.jsx";
export default function MyOrders() {
    const { orders, setOrders } = useContext(OrderContext);

    const formatDate = (timeMs) => {
        const date = new Date(timeMs);
        return date.toLocaleDateString();
    }
    return (
        <Layout>
            <Title>Mis Ordenes</Title>

            {orders.map(order => (
                <div>
                    <div>{order.id}</div>
                    <div>{formatDate(order.date)}</div>
                    <div className={"body md:px-20 w-full "}>
                        {order.products.map(((product, index) => (
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

            ))}

        </Layout>
    )
}