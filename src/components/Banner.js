import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1487803836022-91054ca05fdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1452842290973-d0545e29bd18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
        "https://images.unsplash.com/photo-1497514789819-4190972b5575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };
    //console.log(currentSlide);

    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className="w-screen h-[650px] relative">
                <div
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                    className='w-[400vw] h-full flex transition-transform duration-1000'>
                    <img
                        className='w-screen h-full object-cover'
                        src={data[0]}
                        alt="ImgOne"
                        loading='priority'
                    />
                    <img
                        className='w-screen h-full object-cover'
                        src={data[1]}
                        alt="ImgTwo"
                        loading='priority'
                    />
                    <img
                        className='w-screen h-full object-cover'
                        src={data[2]}
                        alt="ImgThree"
                        loading='priority'
                    />
                    <img
                        className='w-screen h-full object-cover'
                        src={data[3]}
                        alt="ImgFour"
                        loading='priority'
                    />
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-8' >
                    <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300' >
                        <HiArrowLeft />
                    </div>
                    <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300' >
                        <HiArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;