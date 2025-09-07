import Image from "next/image";
import React from "react";

const SuccessStoryCard = ({ name, role, image, content, icons, social1,social2 }) => {
  return (
    <div className="h-[415.95px] py-[32px] px-[27px] gap-[32px] bg-[rgba(25,25,25,1)] border-1 border-[rgba(0,0,0,1)]">
      <div className="flex space-x-2">
        {icons.map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt={`Icon ${i + 1}`}
            className="w-[20.5px] h-[16.36px] object-cover"
          />
        ))}
      </div>
      <p className="font-[400] text-[16px] text-[#FFFFFF] mt-[32px] font-inter leading-[28px]">
        {content}
      </p>

      <div className="flex flex-col items-start mt-[40px]">
        
          <Image

src={image} 
width={60}
height={60}
alt="image"
           className="" 
           />
          
        
        <div className="w-full flex flex-row items-center justify-between pt-2">

           <div>
            <p className="font-[500] text-[16px] text-[#2FC22B]  tracking-[0.1px]">
              {name}
            </p>
            <p className="font-[300] text-[16px] leading-[20px] text-[#FFFFFFB2]">
              {role}
            </p>
            </div> 
        <div className="flex  gap-2 ">
          <img
            src={social1}
            alt="fb "
            className="w-[16px] h-[16px] object-cover"
          />
          <img
            src={social2}
            alt="fb "
            className="w-[16px] h-[16px] object-cover"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
