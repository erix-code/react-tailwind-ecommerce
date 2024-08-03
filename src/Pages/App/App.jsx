import React, {useState} from 'react'
import {useRoutes, BrowserRouter} from "react-router-dom";
import {ShoppingCartProvider} from "../../Context/ShoppinCartContext.jsx";
import Shop from "../Shop/Shop.jsx";
import Login from "../User/LogIn/Login.jsx"
import MyOrders from "../User/MyOrders/MyOrders.jsx";
import Order from "../User/Order/Order.jsx";
import Profile from "../User/Profile/Profile.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import './App.css';
import ProductDetailProvider, {ProductDetailContext} from "../../Context/ProductDetailContext.jsx";
import Cart from "../../Components/Cart/Cart.jsx";
import {OrderProvider} from "../../Context/OrderContext.jsx";
import {ProductListProvider} from "../../Context/ProductListContext.jsx";

const AppRoutes = () => {
    const routes = useRoutes([
        {path: "/", element: <Shop></Shop>,},
        {path: "/login", element: <Login></Login>},
        {path: "/user/my-orders", element: <MyOrders></MyOrders>},
        {path: "/user/order/:orderId", element: <Order></Order>},
        {path: "/user/profile", element: <Profile></Profile>},
        {path: "/*", element: <NotFound></NotFound>},
    ]);
    return routes;
}

function App() {
    return (
        <ProductListProvider>
            <OrderProvider>
                <ProductDetailProvider>
                    <ShoppingCartProvider>
                        <BrowserRouter>
                            <Navbar></Navbar>
                            <div>
                                <AppRoutes></AppRoutes>
                            </div>
                            <Cart></Cart>

                        </BrowserRouter>
                    </ShoppingCartProvider>
                </ProductDetailProvider>
            </OrderProvider>
        </ProductListProvider>
    )
}

export default App
