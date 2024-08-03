import React, {useState, useEffect, useContext} from "react";
import Layout from "../../Components/Shop/Layout.jsx";
import Card from "../../Components/Shop/Card.jsx";
import axios from "axios";
import ProductDetail from "../../Components/Shop/Product/ProductDetail.jsx";
import Title from "../../Components/Title/Title.jsx";
import {ProductListContext} from "../../Context/ProductListContext.jsx";
export default function Shop() {

    const { products, searchProducts } = useContext(ProductListContext);

    const renderList = () => {
        if (products.length > 0){
            return (
                products?.map((item, index) =>
                    (<Card key={index} product={item}></Card>)
                )
            )
        } else {
            return (
                <div>No existen esos productos</div>
            )
        }


    }

    return (
        <Layout>
            <Title>
                General
            </Title>
            <div>
                <input type="text" className={"p-2 mb-10 margin border border-gray-500 w-4/6 rounded-lg"}
                       onChange={(event) => searchProducts(event.target.value)}/>
            </div>
            <div
                className={"grid lg:grid-cols-5 grid-cols-2  px-1 md:px-10 auto-rows-auto md:gap-y-10 gap-y-24 gap-x-1"}>
                {renderList()}
            </div>
            <ProductDetail/>
        </Layout>
    )
}