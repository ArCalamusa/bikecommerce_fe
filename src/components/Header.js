import React from 'react';
import { logo, cart } from '../assets/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const productData = useSelector((state) => state.bike.productData);
    const userInfo = useSelector((state) => state.bike.userInfo);
    //console.log(userInfo)

    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
            <nav className='max-w-6xl h-full mx-auto flex items-center justify-between'>
                <Link to='/'>
                    <div>
                        <img className='w-20' src={logo} alt="logoBike" />
                    </div>
                </Link>

                <span className='text-3xl cursor-pointer mx-2 md:hidden block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </span>

                <div className='md:flex items-center gap-8'>
                    <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7'>
                        <Link to='/'>
                            <li className='text-base text-black font-bold hover:text-[#fb923c] decoration-[1px] cursor-pointer duration-300 mx-4 my-6 md:my-0'>Home</li>
                        </Link>
                        <li className='text-base text-black font-bold hover:text-[#fb923c] decoration-[1px] cursor-pointer duration-300 mx-4 my-6 md:my-0'>Pages</li>
                        <li className='text-base text-black font-bold hover:text-[#fb923c] decoration-[1px] cursor-pointer duration-300 mx-4 my-6 md:my-0'>Shop</li>
                        <li className='text-base text-black font-bold hover:text-[#fb923c] decoration-[1px] cursor-pointer duration-300 mx-4 my-6 md:my-0'>Element</li>
                        <li className='text-base text-black font-bold hover:text-[#fb923c] decoration-[1px] cursor-pointer duration-300 mx-4 my-6 md:my-0'>Blog</li>
                    </ul>
                    <div className='flex items-center gap-8 md:pl-0 pl-7'>
                        <Link to='/cart'>
                            <div className='relative'>
                                <img className='w-8' src={cart} alt="cartImg" />
                                <span className='absolute w-8 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
                            </div>
                        </Link>
                        <Link to='/login'>
                            <img className='w-8 h-8 rounded-full'
                                src={userInfo ? userInfo.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs867oiFI9uKZePrJlp5ccrk_PJOu1ABWO8hnIutySxpbwLIHe2VAHDTV6PFb7yua7UbA&usqp=CAU'}
                                alt='userLogo' />
                        </Link>
                        {
                            userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>
                                {userInfo.name}
                            </p>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;