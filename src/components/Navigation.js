import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logo, cart } from '../assets/index';
import { nanoid } from 'nanoid';

const Navigation = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "PERCORSI", link: "/" },
    { name: "ABOUT US", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  const userInfo = useSelector((state) => state.bike.userInfo);
  const productData = useSelector((state) => state.bike.productData);

  return (
    <div className='shadow-md w-full sticky top-0 z-50 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <span><img className='w-14' src={logo} alt="logoBike" /></span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {
            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        {/* linke items */}
        <ul className={`md:flex gap-7 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li className='md:my-0 my-7 font-semibold'>
                <a href={link.link} className='text-gray-800 hover:text-[#fb923c] duration-500'>{link.name}</a>
              </li>))
          }
          <li className='md:flex flex gap-5'>
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;