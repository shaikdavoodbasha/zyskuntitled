import React from 'react'
import icon1 from "../assets/Icon1.png"
import icon2 from "../assets/Icon2.png"
import icon3 from "../assets/Icon3.png"
import icon4 from "../assets/Icon4.png"
import icon5 from "../assets/Icon5.png"
import icon6 from "../assets/Icon6.png"


const Features = () => {
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

        },
        {
            id: 4,
            image: icon4,
            heading: "Connect with customers",
            para: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."

        },
        {
            id: 5,
            image: icon5,
            heading: "Connect the tools you already use",
            para: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."

        },
        {
            id: 6,
            image: icon6,
            heading: "Our people make the difference",
            para: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."

        }
    ]
    return (
        <div className='mt-12 flex flex-col justify-center gap-4  items-center'>
            <p className='text-[#6941C6] text-[14px] sm:text-[16px] font-[600]'>Feature</p>
            <p className=' text-[30px] sm:text-[36px] font-[600] text-[#101828] text-center'>Analytics that feels like it’s from the future</p>
            <p className='max-w-[55vw] text-[18px] sm:text-[20px] text-[#475467] font-[400] text-center'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <div className='grid grid-cols-1 sm:grid-cols-3  gap-6 mt-8  w-full'>
                {
                    data.map((item, id) => {
                        return (
                            <div key={id}  className='px-3 py-3 flex flex-col items-center justify-center gap-4 border rounded sm:border-none sm:rounded-none'>
                                <img className='px-[12px] py-[10px] border rounded-md'  src={item.image} alt="" />
                                <h1 className='text-[18px] sm:text-[20px] font-[600] text-[#101828] text-center'>{item.heading}</h1>
                                <p className='text-[14px] sm:text-[16px] font-[400] text-[#475467] text-center'>{item.para}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Features