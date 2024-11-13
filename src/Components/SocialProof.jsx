import React from 'react'
import logos from "../assets/Logos.png"
import logoswrap from "../assets/Logos wrap.png"

const SocialProof = () => {
  return (
    <div className='mt-[2px] py-[46px] sm:py-[96px] flex flex-col justify-center items-center gap-9 bg-[#fffff] border-t border-b '>
      <p className='text-[#475467] text-[14px] sm:text-[16px]'>Join 4,000+ companies already growing</p>
      <img className='hidden sm:block' src={logos} alt="" />
      <img className='w-full  block sm:hidden' src={logoswrap} alt="" />
    </div>
  )
}

export default SocialProof