
import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])
    return (
        <nav className="absolute top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">


                <img
                    src={assets.logo}
                    alt="Logo"
                    className="md:w-32 w-20 cursor-pointer"
                />


                <ul className="hidden md:flex items-center gap-7 text-white">
                    <li>
                        <a href="#home" className="cursor-pointer hover:text-gray-400 transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#About" className="cursor-pointer hover:text-gray-400 transition">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#Projects" className="cursor-pointer hover:text-gray-400 transition">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#Testimonials" className="cursor-pointer hover:text-gray-400 transition">
                            Testimonials
                        </a>
                    </li>
                </ul>


                <button className="hidden md:block bg-white px-8 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
                    Sign up
                </button>
                <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-5' alt="menu_icon" />
            </div>
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-5' alt="cross_icon" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-[16px] font-medium'>
                    <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar