import { useState } from 'react'

import  Shop from "../Shop/Shop.jsx";
import Login from "../User/LogIn/Login.jsx"
import MyOrders from "../User/MyOrders/MyOrders.jsx";
import Order from "../User/Order/Order.jsx";
import Profile from "../User/Profile/Profile.jsx";
import NotFound from "../NotFound/NotFound.jsx";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={"w-full bg-red-50"}>
        <Shop></Shop>
        <MyOrders></MyOrders>
        <Order></Order>
        <Profile></Profile>
        <Login></Login>
        <NotFound></NotFound>
    </div>
  )
}

export default App
