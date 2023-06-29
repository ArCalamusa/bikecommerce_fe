import axios from 'axios';

export async function productsData() {
    const products = await axios.get(
        ""
    );
    return products;
}