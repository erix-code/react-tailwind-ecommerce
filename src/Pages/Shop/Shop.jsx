import React, {useState, useEffect} from "react";
import Layout from "../../Components/Shop/Layout.jsx";
import Card from "../../Components/Shop/Card.jsx";
import axios from "axios";
import ProductDetail from "../../Components/Shop/Product/ProductDetail.jsx";
import Title from "../../Components/Title/Title.jsx";
export default function Shop() {
    const [ products, setProducts ] = useState(null);

    useEffect(() => {
        getProducts()
    }, [products]);

    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products").then(response => {
            setProducts(response.data)
        });
    }
    return (
        <Layout>
            <Title>General</Title>
            <div className={"grid lg:grid-cols-5 grid-cols-2  px-1 md:px-10 auto-rows-auto md:gap-y-10 gap-y-24 gap-x-1"}>
                {products?.map((item, index) =>
                    (<Card key={index} product={item}></Card>)
                )}
            </div>
            <ProductDetail/>
        </Layout>
    )
}