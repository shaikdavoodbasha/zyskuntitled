import React from 'react'
import heroimg1 from "../assets/size.png"
import iphone from "../assets/iPhone.png"
import iphone2 from "../assets/iphone2.png"
import icon1 from "../assets/Icon1.png"
import icon2 from "../assets/Icon2.png"
import icon3 from "../assets/Icon3.png"
import { FaArrowRight } from "react-icons/fa6";


const Seconfeature = () => {
    const data = [
        {
            id: 1,
            image: icon1,
            heading: "Share team inboxes",
            para: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."

        },
        {
            id: 2,
            image: icon2,
            heading: "Deliver instant answers",
            para: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."

        },
        {
            id: 3,
            image: icon3,
            heading: "Manage your team with reports",
            para: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."

        }
    ]
    return (
        <div className='mt-24 sm:mt-32 py-6 flex flex-col justify-center items-center gap-6 w-full '>
            <p className='text-[12px] sm:text-[14px] font-[500] text-[#6941C6] border border-[#E9D7FE] px-[12px] py-[4px]  rounded-[16px]'>Feature</p>
            <h1 className='text-[#101828] text-[30px] sm:text-[36px] font-[600] text-center'>Cutting-edge features for advanced analytics</h1>
            <p className='text-[#475467] text-[18px] sm:text-[20px] font-[400] text-center max-w-[90vw] sm:max-w-[60vw]'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <img className='relative hidden sm:block left-[100px] border-[4px] border-[#101828] rounded-[16px] ' src={heroimg1} alt="" />
            <img className='absolute left-[270px] mb-[110px] hidden sm:block' src={iphone} alt="" />
            <img className='mt-4 block sm:hidden' src={iphone2} alt="" />
            <div className='grid grid-cols-1 sm:grid-cols-3  gap-6 mt-20 border-b pb-[100px]'>
                {
                    data.map((item, id) => {
                        return (
                            <div key={id} className='px-3 py-3 flex flex-col items-center justify-center gap-4 border rounded sm:border-none sm:rounded-none'>
                                <img className='px-[12px] py-[10px] border rounded-md' src={item.image} alt="" />
                                <h1 className='text-[18px] sm:text-[20px] font-[600] text-[#101828] text-center'>{item.heading}</h1>
                                <p className='text-[14px] sm:text-[16px] font-[400] text-[#475467] text-center'>{item.para}</p>
                                <div className='flex items-center gap-4'>
                                    <p className='text-[#6941C6] text-[14px] sm:text-[16px] font-[600]'>Learn more</p>
                                    <div className='text-[#6941C6] text-[15px]'>
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default Seconfeature