
import React, { useState } from "react";
import logo from "../assets/Logomark.png";

const Footer = () => {
  const sections = [
    {
      title: "Products",
      items: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      items: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"],
    },
    {
      title: "Use cases",
      items: ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"],
    },
    {
      title: "Social",
      items: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"],
    },
    {
      title: "Legal",
      items: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-14">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="one">
            <p className="text-[#667085] text-[12px] sm:text-[14px] font-[600] pb-[10px]">{section.title}</p>
            {section.items.map((item, itemIndex) => (
              <HoverableItem key={itemIndex} item={item} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-start mt-[60px] py-[30px] flex-col sm:flex-row border-t border-t-[#EAECF0]">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Logo" />
          <h1 className="text-[#101828] text-[20px] sm:text-[24px] font-semibold">Untitled UI</h1>
        </div>
        <p className="text-[#667085] text-[14px] sm:text-[16px] font-[400]">© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </div>
  );
};

const HoverableItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 100); // Reappears after 0.5 seconds
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="flex flex-col relative cursor-pointer"
    >
      <p
        className={`transition-opacity  ${
          isHovered ? "opacity-0" : "opacity-100"
        } text-[#475467] text-[14px] sm:text-[16px] font-semibold py-2`}
      >
        {item}
      </p>
      {item === "Solutions" && (
        <button className="px-[8px] py-[2px] text-[#067647] border border-[#ABEFC6] text-[10px] sm:text-[12px] font-[500] absolute left-[80px] sm:left-[80px] mt-2 rounded-[16px]">
          New
        </button>
      )}
    </div>
  );
};

export default Footer;
