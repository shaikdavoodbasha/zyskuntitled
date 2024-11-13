import React from 'react'
import greenlogo from "../assets/GreenLogomark.png"
import Testimonialimg from "../assets/Avatar1.png"

const Testimonial = () => {
    return (
        <div className='mt-7 sm:mt-[50px] sm:py-[96px]  flex flex-col justify-center items-center gap-8 bg-[#F9FAFB] px-6 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]'>
            <div className='flex items-center gap-2'>
                <img src={greenlogo} alt="" />
                <h1 className='text-[26px] sm:text-[30px] font-[600] text-[#101828]'>Sisyphus</h1>
            </div>
            <p className='text-[32px] sm:text-[48px] font-[500] text-center text-[#101828] leading-snug'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>
            <img src={Testimonialimg} alt="" />
            <div className='flex flex-col gap-3 justify-center items-center'>
                <p className='text-[16px] font-[600] text-[#101828] sm:text-[18px]'>Candice Wu</p>
                <p className='text-[14px] sm:text-[16px] font-[400] text-[#475467]'>Product Manager, Sisyphus</p>
            </div>
        </div>
    )
}

export default Testimonial