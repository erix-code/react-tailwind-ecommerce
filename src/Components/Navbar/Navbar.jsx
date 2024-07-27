import React from "react";
import { NavLink } from "react-router-dom";
import Link  from "./Link/Link.jsx";
import { FaFireFlameCurved  } from "react-icons/fa6";
import { BsBag } from "react-icons/bs";

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
    const activeClass = "underline font-bold underline-offset-8";

    return (
        <header>
            <nav className={"h-20 w-full flex flex-row justify-between items-center fixed top-0 left-0 z-10 px-8 font-Raleway font-light"}>
                <ul className={"w-1/2 flex flex-row  space-x-5  justify-start"}>
                    <li className={"text-lg font-semibold pr-2 "}>
                        <NavLink className={"flex flex-row items-center uppercase justify-start text-gray-500  "} to="/">
                            <FaFireFlameCurved ></FaFireFlameCurved>
                            <p className={"pl-2"}>MultiTienda</p>

                        </NavLink>
                    </li>
                    {leftNavbar.map(item => {
                        return (
                            <li>
                                <Link url={item.url} title={item.name} baseClass={"hover:underline underline-offset-8 hover:font-bold"} activeClass={activeClass} />
                            </li>
                        )
                    })}

                </ul>
                <ul className={"w-1/2 flex flex-row space-x-5 justify-end "}>
                    <li className={"text-gray-500 font-semibold"}>
                        ermateze@gmail.com
                    </li>
                    {rightNavbar.map(item => {
                        return (
                            <li>
                                <Link url={item.url} title={item.name} baseClass={"hover:underline underline-offset-8 hover:font-bold"} activeClass={activeClass} />
                            </li>
                        )
                    })}
                    <li>
                        <BsBag></BsBag>
                    </li>
                </ul>
            </nav>
        </header>

    )
}