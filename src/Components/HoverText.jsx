import React, { useState } from "react";

const HoverText = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setTimeout(() => setIsHovered(false), 500); 
    };

    return (
        <div className="text-center mt-10">
            <span
                onMouseEnter={handleMouseEnter}
                className={`transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
            >
                Hover over this text
            </span>
        </div>
    );
};

export default HoverText;
