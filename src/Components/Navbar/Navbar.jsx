import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import Link  from "./Link/Link.jsx";
import { FaFireFlameCurved  } from "react-icons/fa6";
import { BsBag } from "react-icons/bs";
import {ShoppingCartContext} from "../../Context/ShoppinCartContext.jsx";

const leftNavbar = [
    {name: "General", url: "/"},
    {name: "Ropa", url: "/clothes"},
    {name: "Electrodomesticos", url: "/techonology"},
    {name: "Muebles", url: "/furniture"},
    {name: "Juguetes", url: "/toys"}
];
const rightNavbar = [
    {name: "Mis Ordenes", url: "/user/my-orders"},
    {name: "Perfil", url: "/user/profile"},
    {name: "Ingresar", url: "/login"},
];
export default function Navbar() {
    const { counter } = useContext(ShoppingCartContext);
    const activeClass = "underline font-bold underline-offset-8";

    return (
        <header>
            <nav className={"h-20 w-full flex flex-row justify-between items-center fixed top-0 left-0 z-10 px-6 font-Raleway font-light bg-white"}>
                <ul className={"w-1/2 flex flex-row  space-x-5  justify-start items-center"}>
                    <li className={" font-semibold pr-2 "}>
                        <NavLink className={"flex flex-row items-center uppercase justify-between text-gray-500  "} to="/">
                            <FaFireFlameCurved className={"text-3xl"}></FaFireFlameCurved>
                            <div className={"flex flex-col items-center justify-center pl-1"}>
                                <p className={"font-bold text-black text-lg"}>MultiTienda</p>
                                <p className={"text-xs lg:hidden xl:block"}>Los Mejores Precios</p>
                            </div>
                        </NavLink>
                    </li>
                    {leftNavbar.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link url={item.url} title={item.name} baseClass={"hover:underline underline-offset-8 hover:font-bold"} activeClass={activeClass} />
                            </li>
                        )
                    })}

                </ul>
                <ul className={"w-1/2 flex flex-row space-x-5 justify-end items-center"}>
                    {rightNavbar.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link url={item.url} title={item.name} baseClass={"hover:underline underline-offset-8 hover:font-bold"} activeClass={activeClass} />
                            </li>
                        )
                    })}
                    <li className={"text-gray-500 text-2xl flex justify-center gap-2 items-center"}>
                        <BsBag></BsBag>
                        {counter}
                    </li>
                </ul>
            </nav>
        </header>

    )
}