import {createContext, useState} from "react";

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([]);
    const findOrderById = (id) => {
        const foundOrder = orders.find((order) => {
           return order.id === id;
        });
        return foundOrder;
    }

    return (
        <OrderContext.Provider value={{orders, setOrders, findOrderById}} >
            {children}
        </OrderContext.Provider>
    );
}

