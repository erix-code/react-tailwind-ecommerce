import React from "react";

export default function Layout({children}) {
    return (
        <div className={"flex flex-col mt-20 text-center"}>
            {children}
        </div>
    )
}