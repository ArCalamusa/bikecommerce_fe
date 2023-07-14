import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import axios from "axios";
import MainLayout from "../layout/MainLayout";


const Home = () => {
    const [products, setProducts] = useState([]);

    const handleGetProducts = async () => {
        await axios.get(process.env.REACT_APP_PRODUCTS_MONGO_URL)
            .then(res => setProducts(res.data))
    }
    useEffect(() => {
        handleGetProducts()
    }, []);
    return (
        <MainLayout>
            <Banner />
            <Products products={products && products} />
        </MainLayout>
    );
};

export default Home;