import React from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2x1 bg-black text-white py-2 w-80 text-center'>
                    shopping everyday
                </h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[700px] text-gray-600 text-center'>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                    animcupidatat excepteur officia.
                </p>
            </div>
        <div className='max-w-6xl mx-auto'>
            <ProductsCard />
        </div>
        </div>
    )
}

export default Products