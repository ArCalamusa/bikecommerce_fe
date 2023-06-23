import axios from 'axios';

export async function productsData() {
    const products = await axios.get(
        "https://fakestoreapiserver.reactdb.com/products"
    );
    return products;
}