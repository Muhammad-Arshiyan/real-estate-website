import React from 'react'

const Contact = () => {
    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-center text-[20px] sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span></h1>
            <p className='text-gray-500 md:text-[16px] text-[14px] text-center mb-8'>Ready to Make a Move? Let's Build Your Future Together</p>

            <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name="Name" placeholder='Your Name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name="Email" placeholder='Your Email' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message

                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer text-[14px] md:text-[16px] hover:bg-blue-700 transition'>Send Message</button>
            </form>

        </div>
    )
}

export default Contact