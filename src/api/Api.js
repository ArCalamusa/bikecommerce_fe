import axios from 'axios';

export async function productsData() {
    const products = await axios.get(process.env.REACT_APP_PRODUCTS_MONGO_URL);
    return products.data;
}