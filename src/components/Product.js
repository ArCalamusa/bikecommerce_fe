import React, { useEffect, useState } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../redux/bikeSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import MainLayout from "../layout/MainLayout";

const Product = () => {
    const dispatch = useDispatch()
    const [details, setDetails] = useState({})
    let [baseQuantity, setBaseQuantity] = useState(1)
    const location = useLocation()
    useEffect(() => {
        setDetails(location.state.item)
    }, [])
    return (
        <MainLayout>
            <div>
                <div className='min-w-[50%] flex-col max-w-6xl mx-auto my-10 flex gap-10'>
                    <div className=''>
                        <img
                            className='w-full object-cover'
                            src={details.image}
                            alt="productImg"
                        />

                        <div>
                            <Link to="/">
                                <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                                    <span>
                                        <HiOutlineArrowLeft />
                                    </span>
                                    torna ai prodotti
                                </button>
                            </Link>
                        </div>
                        <div className='absolute top-4 right-0'>
                            {details.isNew && (
                                <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>
                                    Sale
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-12 min-w-[50%] mx-5'>
                        <div>
                            <h2 className='text-4xl font-semibold'>{details.title}</h2>
                            <div className='flex items-center gap-4 mt-3'>
                                <p className='line-through font-base text-gray-500'>
                                    {details.oldPrice}
                                </p>
                                <p className='text-2xl font-medium text-gray-900'>
                                    €{details.price}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 text-base'>
                            <div className='flex'>
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                            </div>
                            <p className='text-xs text-gray-500'>(10 Customer review)</p>
                        </div>
                        <p className='text-xs text-gray-500 '>{details.description}</p>
                        <div className='flex gap-4'>
                            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                                <p className='text-sm'>Quantity</p>
                                <div className='flex items-center gap-4 text-sm font-semibold'>
                                    <button onClick={() => setBaseQuantity(baseQuantity === 1 ? (baseQuantity = 1) : baseQuantity - 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                                    <span>{baseQuantity}</span>
                                    <button onClick={() => setBaseQuantity(baseQuantity + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                                </div>
                            </div>
                            <button
                                onClick={() => dispatch(addToCart({
                                    _id: details._id,
                                    title: details.title,
                                    image: details.image,
                                    price: details.price,
                                    quantity: baseQuantity,
                                    description: details.description,
                                })
                                ) & toast.success(`${details.title} aggiunto al carrello`)
                                }
                                className='bg-black text-white py-3 px-6 active:bg-gray-800'>add to cart</button>
                        </div>
                        <p className='text-base text-gray-500'>
                            Category:<span className='font-medium capitalize'>{details.category}</span>
                        </p>
                    </div>
                </div>
                <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </MainLayout>
    );
};

export default Product;