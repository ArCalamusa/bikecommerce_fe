import axios from 'axios';

export async function productsData() {
    const products = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
    return products.data;
}