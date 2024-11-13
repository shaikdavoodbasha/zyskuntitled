import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FiPlayCircle } from "react-icons/fi";
import heroimg from "../assets/Heroimg.png"
import heroimg1 from "../assets/Heroimg1.png"

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-14 gap-3 '>
            <div className='flex gap-3 items-center border border-[#E9D7FE] rounded-full  pl-[4px] pr-[10px] py-[4px]'>
                <p className='text-[#6941C6] text-[12px] sm:text-[14px] font-[500] border border-[#E9D7FE] rounded-2xl px-[10px] py-[2px] whitespace-nowrap'>New feature</p>
                <div className='flex gap-3 items-center'>
                    <p className='text-[#6941C6] text-[12px] sm:text-[14px] font-[500] whitespace-nowrap'>Check out the team dashboard</p>
                    <div className='text-[#6941C6]'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <p className=' text-[36px] sm:text-[60px] text-[#101828] font-semibold text-center'>Beautiful analytics to grow smarter</p>
            <p className='max-w-[80vw] sm:max-w-[55vw] text-[#475467] text-[18px] sm:text-[20px] font-[400] text-center leading-7 sm:leading-8'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <div className='flex flex-col sm:flex sm:flex-row justify-center items-center gap-2 mt-8'>
                <div className='text-16px flex justify-center items-center border gap-2 border-[#D0D5DD] text-[#344054] rounded-[8px] sm:text-[18px] font-[600] sm:px-[28px] sm:py-[16px] px-[192px] py-[12px]'>
                    <div>
                        <FiPlayCircle />
                    </div>
                    <p>Demo</p>
                </div>
                <p className=' text-[16px]  bg-[#6941C6] sm:text-[18px] font-[600] text-[#ffffff] rounded-[8px] sm:px-[28px] sm:py-[16px]  px-[200px] py-[12px] hover:transition hover:bg-opacity-100  bg-opacity-80 duration-[.5s]'>Sign up</p>
            </div>
            <div className='mt-4'>
                <div>
                    <img className='w-full hidden sm:block mt-12 border-[6px] border-b-0  sm:border-t-[#101828] sm:border-l-[#101828] sm:border-r-[#101828]  rounded-tl-xl rounded-tr-xl' src={heroimg} alt="hero-img" />
                </div>
                <img className='w-[90vw] block sm:hidden border-[6px] border-[#101828] rounded-[16px]' src={heroimg1} alt="hero-img" />
            </div>
        </div>
    )
}

export default Hero