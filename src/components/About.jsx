import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-[20px] sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className='text-gray-500 md:text-[16px] text-[14px] text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="brand_img" className='w-full sm:w/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-[30px] md:text-4xl font-medium text-gray-800' >10+</p>
                            <p className='md:text-[16px] text-[14px]'>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-[30px] md:text-4xl font-medium text-gray-800' >12+</p>
                            <p className='md:text-[16px] text-[14px]'>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-[30px] md:text-4xl font-medium text-gray-800' >20+</p>
                            <p className='md:text-[16px] text-[14px]'>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-[30px] md:text-4xl font-medium text-gray-800' >25+</p>
                            <p className='md:text-[16px] text-[14px]'>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='my-10 max-w-lg text-[14px] md:text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nam incidunt in vitae non aperiam iste, laudantium quibusdam nesciunt quos veniam et maiores deserunt inventore ex aliquam vel, aut facilis?</p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded cursor-pointer text-[14px] md:text-[16px]'>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default About