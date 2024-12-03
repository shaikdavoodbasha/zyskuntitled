
import React, { useState } from "react";
import { GrSubtractCircle } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import avatargroup from "../assets/Avatar group.png";

const FAQ = () => {
    const faqData = [
        {
            question: "Is there a free trial available?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "Can I change my plan later?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "What is your cancellation policy?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "Can other info be added to an invoice?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "How does billing work?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "How do I change my account email?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
    ];

    return (
        <div className='flex flex-col justify-center items-center mt-10 px-4 sm:px-0'>
            <div className='flex flex-col justify-center items-center gap-3 text-center'>
                <p className='text-[#101828] text-[24px] sm:text-[32px] md:text-[36px] font-[600]'>Frequently asked questions</p>
                <p className='text-[#475467] text-[16px] sm:text-[18px] md:text-[20px] font-[400]'>Everything you need to know about the product and billing.</p>
            </div>
            <div className="max-w-full sm:max-w-[80vw] lg:max-w-[60vw] mx-auto p-4 mt-8">
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isInitiallyOpen={index === 0}
                    />
                ))}
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-4 mt-12 bg-[#F9FAFB] rounded-[16px] p-6 sm:p-8 md:p-[32px]">
                <img src={avatargroup} alt="Avatar group" className="w-[120px] h-[56px]" />
                <h1 className="text-[#101828] text-[16px] sm:text-[18px] md:text-[20px] font-[600]">Still have questions?</h1>
                <p className="text-[#475467] text-[14px] sm:text-[16px] md:text-[18px] font-[400] text-center">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <button className="bg-[#7F56D9] rounded-[8px] px-[20px]  py-[12px]  text-[#ffffff] text-[14px] sm:text-[16px] font-[400] hover:transition hover:bg-opacity-100 bg-opacity-80 duration-[.5s]">Get in touch</button>
            </div>
        </div>
    );
};

const FAQItem = ({ question, answer, isInitiallyOpen }) => {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-300 py-6 sm:py-5">
            <button
                onClick={toggleAnswer}
                className="flex justify-between items-center w-full text-left"
            >
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-[500] text-[#101828]">{question}</h3>
                <span className="ml-2">
                    {isOpen ? (
                        <span className="text-[#98A2B3]"><GrSubtractCircle /></span>
                    ) : (
                        <span className="text-[#98A2B3]"><GrAddCircle /></span>
                    )}
                </span>
            </button>
            {isOpen && (
                <p className="mt-2 text-[14px] sm:text-[16px] text-[#475467] font-[400]">{answer}</p>
            )}
        </div>
    );
};

export default FAQ;

