import React from 'react'
import blog1 from "../assets/image1.png"
import blog2 from "../assets/image2.png"
import blog3 from "../assets/image3.png"
import emp1 from "../assets/Avatar2.png"
import emp2 from "../assets/Avatar3.png"
import emp3 from "../assets/Avatar4.png"
import { MdArrowOutward } from "react-icons/md";



const Blog = () => {
    const data = [
        {
            id: 1,
            image: blog1,
            smallheading: "Design",
            heading: "UX review presentations",
            para: "How do you create compelling presentations that wow your colleagues and impress your managers?",
            imgage2: emp1,
            name: "Olivia Rhye",
            date: "20 Jan 2024"

        },
        {
            id: 2,
            image: blog2,
            smallheading: "Product",
            heading: "Migrating to Linear 101",
            para: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            imgage2: emp2,
            name: "Phoenix Baker",
            date: "19 Jan 2024"

        },
        {
            id: 3,
            image: blog3,
            smallheading: "Software Engineering",
            heading: "Building your API stack",
            para: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
            imgage2: emp3,
            name: "Lana Steiner",
            date: "18 Jan 2024"
        }
    ]
    return (
        <div className='w-full mt-20 sm:mt-20 py-[56px] sm:py-[96px]  border-t px-6 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]'>
            <div className='flex justify-between  items-start '>
                <div className='flex flex-col justify-center gap-3'>
                    <h1 className='text-[#6941C6] text-[14px] sm:text-[16px] font-[600]'>Our blog</h1>
                    <h2 className='text-[#101828] text-[28px] sm:text-[36px] font-[600]'>Lastest blog posts</h2>
                    <p className='text-[#475467] text-[18px] sm:text-[20px] font-[400]'>Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <div className='hidden sm:block'>
                    <button className='px-[20px] py-[12px] bg-[#6941C6] text-[#ffffff] rounded-[8px] hover:transition hover:bg-opacity-100  bg-opacity-80 duration-[.5s] '>Veiw all posts</button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6  mt-8 '>
                {
                    data.map((item, id) => {
                        return (
                            <div key={id} className='flex flex-col  justify-center gap-2 '>
                                <img src={item.image} alt="" />
                                <h2 className='text-[#6941C6] text-[12px] sm:text-[14px] font-[600]'>{item.smallheading}</h2>
                                <div className='flex justify-betweenl items-cente gap-4r'>
                                    <div className='flex  flex-col items-start gap-3'>
                                        <h1 className='text-[24px] font-[600] text-[#101828] text-center'>{item.heading}</h1>
                                        <p className='max-w-fit text-[14px] sm:text-[16px] font-[400] text-[#475467]  text-start'>{item.para}</p>
                                    </div>
                                    <div className='text-[#101828] text-[18px]'>
                                        <MdArrowOutward />
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={item.imgage2} alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-[#101828] text-[14px] sm:text-[16px] font-[600]'>{item.name}</p>
                                        <p className='text-[#475467] text-[12px] sm:text-[14px] font-[400]'>{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className='block sm:hidden mt-[40px] w-full  py-[12px] text-[#ffffff] border rounded-[8px] bg-[#6941C6] text-[14px] sm:text-[16px] hover:transition hover:bg-opacity-100  whitespace-nowrap bg-opacity-80 duration-[.5s] mx-auto'>Veiw all posts</button>
            <div className=' w-full rounded-[16px] bg-[#F9FAFB] flex flex-col  justify-center items-center gap-5 py-[96px] mt-[50px]'>
                <p className='text-[#101828] text-[32px] sm:text-[36px] font-[600] text-center'>Start your free trial</p>
                <p className='text-[#475467] text-[18px] sm:text-[20px] font-[400] text-center'>Join over 4,000+ startups already growing with Untitled.</p>
                <div className='flex flex-col-reverse justify-center items-center sm:flex-row gap-3 w-full'>
                    <button className=' w-full sm:w-[129px] sm:h-[48px] sm:px-[20px] py-[12px]  text-[#344054] font-semibold border rounded-[8px] text-[14px] sm:text-[16px] bg-[#ffffff] whitespace-nowrap'>Learn more</button>
                    <button className=' w-full sm:w-[129px] sm:h-[48px] sm:px-[20px] py-[12px]  text-[#ffffff]  font-semibold border rounded-[8px] bg-[#6941C6] text-[14px] sm:text-[16px] hover:transition hover:bg-opacity-100  whitespace-nowrap bg-opacity-80 duration-[.5s]'>Get started</button>
                </div>
            </div>

        </div>
    )
}
export default Blog