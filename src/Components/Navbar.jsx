import React from 'react'
import logo from "../assets/Logomark.png"
import navimg from "../assets/Avatar.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='flex justify-between items-start py-5 border-b border-b-[#F2F4F7] px-6 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]'>
            <div className='flex gap-10 items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <img src={logo} alt="logo-image" />
                    <h1 className='text-[#101828] font-semibold text-[16px] sm:text-[18px]'>Untitled UI</h1>
                </div>
                <div className='hidden sm:block'>
                    <div className='flex justify-center items-center gap-9 text-[16px] text-[#475467] font-[600]'>
                        <p>Home</p>
                        <div className='flex items-center gap-3'>
                            <p>Products</p>
                            <div className='text-[#475467]'>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p>Products</p>
                            <div className='text-[#475467]'>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <p>Pricing</p>
                    </div>
                </div>
            </div>
            <div >
                <img className='hidden sm:block' src={navimg} alt="image" />
                <div className='block sm:hidden text-[20px] mt-2'>
                    <IoMdMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar