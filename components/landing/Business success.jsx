import Image from "next/image";
import React from "react";
const businessSuccessStories = [
  {
    title:"Smooth collaboration with experts",  
    quote: "Our team works closely with CRETESPACE support agents who handle tasks quickly and professionally. It feels like we’ve added skilled staff without increasing payroll",
    name: "Amaka Bello",
    position: "HR Lead",
    image: "/images/persone.svg",
    tag: "/images/bizCardTag.png",
    star: [
      "/icons/star.svg",
      "/icons/star.svg",
      "/icons/star.svg",
      "/icons/star.svg",
      "/icons/star.svg",
    ],
  },
  {
    title:"Saves time and reduces costs",
    quote: "From cloud storage to virtual meetings, CRETESPACE has streamlinedour admin processes. We’ve cut down on overhead costs while gettingmore done in less time",
    name: "Samuel Ofor",
    position: "Business Director",
    image: "/images/perstwo.svg",
    tag: "/images/bizCardTag.png",
   star: [
      "/icons/star.svg",
      "/icons/star.svg",
      "/icons/star.svg",
      "/icons/star.svg",
      "/icons/star.svg",
    ],
  },
  {
    title:"Our new virtual operations team",
    quote: "CRETESPACE has completely changed how we handle admin work. From document formatting to team collaboration and cloud storage, and welove it!",
    name: "Tunde Adeboye",
    position: "Operations Manager",
    image: "/images/persthree.svg",
    tag: "/images/bizCardTag.png",
    star: [
      "/icons/star.svg",
      "/icons/star.svg",
      "/icons/star.svg",
      "/icons/star.svg",
      "/icons/star.svg",
    ],
  }
];
export default function Business() {
{/* <img key={i} src={star} alt={`Star ${i + 1}`} className="w-[20px] h-[20px] mr-[4px]" /> */}
  return (
    <section className="pt-[30px]  pb-[58px]  gap-[46px] bg-[rgba(0,0,0,1)] ">
      <h3 className="text-center font-[500] text-[40px]">
        <span className="text-[rgba(47,194,43,1)]">Business</span> Success
        Stories
      </h3>
      <div className="p-[2px] gap-[30px] grid md:grid-cols-3 mt-[48px]">
        

        {
            businessSuccessStories.map((story,i)=>(
<div key={i} className="flex flex-col gap-[8px]  px-[17px] py-[27px]  h-[414.95px] rounded-[15.84px] border-1 border-[rgba(255,255,255,0.3)] bg-[rgba(23,23,23,1)]">
          
        <Image
          width={28}
          height={28}
          alt="tag"
          src='/icons/quotemark.svg'
          className="my-3"
        />

          <h3 className="font-medium text-[24px] font-[500] text-[#FFFFFF] ">
            {story.title}
          </h3>

          <p className="font-normal text-[14px] font-[400] text-white/80 mt-[14px] leading-[29.57px]">
            {story.quote}
          </p>

          <hr className="border-1 border-[rgba(255,255,255,0.3)] mt-[25px]" />

          <div className="flex items-center justify-between mt-[21px] ml-[6px] ">
            <div className="flex items-center ">
              <Image
              width={43}
              height={43}
              alt="profile image"
              src={story.image} />
              <div className="ml-[10px]">
                <p className="font-medium text-[16px] text-[rgba(255,255,255,1)]">
                  {story.name}
                </p>
                <p className="font-light text-sm text-[rgba(255,255,255,0.7)]">
                  {story.position}
                </p>
              </div>
            </div>
            <div className="flex space-x-1 mt-[16px] ">
              {
                story.star.map((star, i) => (
                  <Image
                    key={i}
                    width={17}
                    height={17}
                    src={star}
                    alt={`Star ${i + 1}`}
                    className="object-cover"
                  />
                ))}
            </div>
          </div>
        </div>
            ))
        }
      </div>
    </section>
  );
}
