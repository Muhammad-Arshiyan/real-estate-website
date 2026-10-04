import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 py-5 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col justify-between md:flex-row'>
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img src={assets.logo_dark} alt="" />
                    <p className='max-w-[400px] text-[14px] md:text-[16px] text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad culpa qui esse corrupti cum provident id, iure odit quia?</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400 text-[14px] md:text-[16px]'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About Us</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                        <a href="#About" className='hover:text-white'>Privacy policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div>
                        <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                        <button className='bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white text-[14px] md:text-[16px] cursor-pointer'>Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer