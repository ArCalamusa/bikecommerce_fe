import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ products }) => {
    //console.log(products)
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='bg-[#f5ac02] rounded-lg py-2 w-80 text-center text-white'>
                    i nostri prodotti
                </h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[700px] text-gray-600 text-center'>
                    Qui potete trovare una vasta gamma di biciclette selezionate per ogni esigenza, dalla strada alla MTB passando per le Gravel e le nuovissime e-Bike che permettono di effettuare anche i percorsi più insidiosi riducendo al minimo gli sforzi.
                </p>
            </div>
            <div className='max-w-6xl mx-auto py-10 grid grid-cols-4 gap-5 max-[900px]:grid-cols-1 px-2'>
                {products.map((item) => (
                        <ProductsCard key={item._id} product={item} />
                    ))}
            </div>
        </div>
    )
}

export default Products;