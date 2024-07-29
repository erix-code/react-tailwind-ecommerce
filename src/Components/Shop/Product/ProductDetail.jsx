import React from  "react";
import "./produc-detail.css";
import {RiCloseLargeLine} from "react-icons/ri";
export default function ProductDetail() {
    return (
        <aside className={"fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" }>
            <div className={"bg-white rounded-lg border shadow-2xl product-detail"}>
                <div className={"flex justify-between p-5 border border-b-black"}>
                    <div>Detalles</div>
                    <button>
                        <RiCloseLargeLine></RiCloseLargeLine>
                    </button>
                </div>
                <div>

                </div>
            </div>
        </aside>
    );
}