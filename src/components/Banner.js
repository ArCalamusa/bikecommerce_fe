import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://res.cloudinary.com/docqqlwen/image/upload/v1688302714/Gravel_lh8hdz.jpg",
        "https://res.cloudinary.com/docqqlwen/image/upload/v1688302714/Rancing_ywgyin.jpg",
        "https://res.cloudinary.com/docqqlwen/image/upload/v1688403684/MTB_ctk5pp.jpg",
        "https://res.cloudinary.com/docqqlwen/image/upload/v1688302714/Gravel_lh8hdz.jpg"
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
            <div className="w-screen h-[450px] relative">
                <div
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                    className='w-[400vw] h-full flex transition-transform duration-1000'>
                    <img
                        className='w-screen h-full object-contain'
                        src={data[0]}
                        alt="ImgOne"
                        loading='priority'
                    />
                    <img
                        className='w-screen h-full object-contain'
                        src={data[1]}
                        alt="ImgTwo"
                        loading='priority'
                    />
                    <img
                        className='w-screen h-full object-contain'
                        src={data[2]}
                        alt="ImgThree"
                        loading='priority'
                    />
                    <img
                        className='w-screen h-full object-contain'
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