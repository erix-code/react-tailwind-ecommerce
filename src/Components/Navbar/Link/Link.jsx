import React from "react";
import {NavLink }  from "react-router-dom";

export default function Link({url, title, activeClass, baseClass}) {
    return (
        <NavLink to={url} className={({isActive})=>
            isActive ? activeClass : baseClass
        }>
            {title}
        </NavLink>
    )
}