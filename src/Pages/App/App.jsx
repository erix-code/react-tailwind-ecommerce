import {useState} from 'react'
import {useRoutes, BrowserRouter} from "react-router-dom";

import Shop from "../Shop/Shop.jsx";
import Login from "../User/LogIn/Login.jsx"
import MyOrders from "../User/MyOrders/MyOrders.jsx";
import Order from "../User/Order/Order.jsx";
import Profile from "../User/Profile/Profile.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import './App.css'

const AppRoutes = () => {
    const routes = useRoutes([
        {path: "/", element: <Shop></Shop>, },
        {path: "/login", element: <Login></Login>},
        {path: "/user/my-orders", element: <MyOrders></MyOrders>},
        {path: "/user/order/:id", element: <Order></Order>},
        {path: "/user/profile", element: <Profile></Profile>},
        {path: "/*", element: <NotFound></NotFound>},
    ]);
    return routes;
}

function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <div>
                <AppRoutes></AppRoutes>
            </div>

        </BrowserRouter>
    )
}

export default App
