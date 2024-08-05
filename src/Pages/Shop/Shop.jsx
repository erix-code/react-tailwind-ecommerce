import React, {useState, useEffect, useContext} from "react";
import Layout from "../../Components/Shop/Layout.jsx";
import Card from "../../Components/Shop/Card.jsx";
import ProductDetail from "../../Components/Shop/Product/ProductDetail.jsx";
import Title from "../../Components/Title/Title.jsx";
import {ProductListContext} from "../../Context/ProductListContext.jsx";
import {useLocation} from "react-router-dom";
export default function Shop() {
    const { products, searchProducts, getProductsByCategory, getProducts } = useContext(ProductListContext);
    const location = useLocation(); // React Hook

    const renderList = () => {
        if (products?.length > 0){
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

    useEffect(() => {
        console.log("Path name", location.pathname); // returns relative path, without domain name

        const pathname = location.pathname;
        if (pathname !== "/") {
            console.log(pathname);
            getProductsByCategory(pathname.replace("_", " "));
        } else {
            getProducts();
        }
    }, [products]);


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