import React, {useState, useEffect} from "react";
import Layout from "../../Components/Shop/Layout.jsx";
import Card from "../../Components/Shop/Card.jsx";
import axios from "axios";
import ProductDetail from "../../Components/Shop/Product/ProductDetail.jsx";
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
            <h1 className={"text-2xl font-bold mb-20"}>Home</h1>
            <div className={"grid grid-cols-5 px-10 space-y-8"}>
                {products?.map((item, index) =>
                    (<Card key={index} product={item}></Card>)
                )}
            </div>
            <ProductDetail/>
        </Layout>
    )
}