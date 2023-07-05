import React from 'react';
import { logoLight, pay } from '../assets';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-[#f5ac02] py-10 font-titleFont'>
            <div className='max-w-6xl mx-auto grid grid-cols-4 max-[900px]:grid-cols-1 px-2'>
                { }
                <div className='flex flex-col gap-2'>
                    <img className="w-32" src={logoLight} alt='logo' />
                    <p className='text-black text-sm tracking-wide'>® epicBike.com</p>
                    <img className='w-56' src={pay} alt="paymentLogo" />
                    <div className='flex gap-5 text-lg text-grey-400'>
                        <ImGithub className='hover:text-white duration-300 cursor-pointer' />
                        <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
                        <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
                        <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                        <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-white mb-4 max-[900px]:grid-cols-1 mt-3'>contact</h3>
                    <div className='text-base flex flex-col gap-1'>
                        <p>Arcangelo Calamusa</p>
                        <p>ph. 011 6508811</p>
                        <p>mobile +39 328 146041</p>
                        <p>e-mail ar.calamusa@gmail.com</p>

                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-white mb-4 max-[900px]:grid-cols-1 mt-3'>profile</h3>
                    <div className='text-base flex flex-col gap-1'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill /></span>my account</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal /></span>checkout</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome /></span>help & support</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn /></span>find us here</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <input
                        className='bg-transparent border px-4 py-2 max-[900px]:grid-cols-1 mt-3'
                        placeholder='e-mail'
                        type='text' />
                    <button className='text-sm border text-white border-t-0 active:bg-white active:text-black rounded-b-lg'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;