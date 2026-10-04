import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-center bg-cover flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
            <Navbar />
            <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                <h2 className='text-[30px] sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
                <div className='md:space-x-6 space-x-3 mt-16'>
                    <a href="#Projects" className='border border-white md:px-8 px-5 py-3 rounded md:text-[16px] text-[14px]'>Projects</a>
                    <a href="#Contact" className='bg-blue-500 md:px-8 px-5  py-3 rounded md:text-[16px] text-[14px] hover:bg-blue-600 transition'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Header