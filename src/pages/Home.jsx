import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            <Banner />
            <Products />
        </div>
    )
}

export default Home