import React from "react";

export default function Title({children}){
    return (
        <h1 className={"text-2xl font-bold mb-20"}>{children}</h1>
    );
}