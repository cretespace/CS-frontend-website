import React from "react";
const features=[

  {
    id:1,
    title:"Wide Range of Services",
    icon:"/landing/icons/stack.svg",
    content:"Enjoy everything from printing and design to typing, scanning, and file conversion.",
  },
  {
    id:2,
    title:"Cloud File Storage",
    icon:"/signUp/cloud.svg",
    content:"Upload, store, and retrieve your documents anytime, your files are always safe.",
  },
  {
    id:3,
    title:"Secure Online Ordering",
    icon:"/landing/icons/sheild.svg",
    content:"Place service requests from anywhere with data protection and privacy built in.",
  },
  {
    id:4,
    title:"Real-Time Order Tracking",
    icon:"/signUp/checkbox.svg",
    content:"Follow the progress of your orders from start to finish with instant status updates",
  },
  {
    id:5,
    title:"Flexible Delivery Options",
    icon:"/signUp/pay.svg",
    content:"Pick up your completed work in person or have it delivered to your doorstep.",
  },
  {
    id:6,
    title:"Access to Expert Support",
    icon:"/signUp/headphone.svg",
    content:"Chat with CRETESPACE specialists for quick help and tailored solutions.",
  }
]
export default function One () {
    return (
        <section className=" gap-[10px] h-[568px]">
                
                <h2 className="text-center font-[500] text-[40px] leading-[100%] tracking-[0%] text-[#FFFFFF]">
                        One Platform, Endless Possibilities.
                        <img className="w-[167px] h-[10.71px] ml-[440px]" src="/vector-2.png" alt="" />
                </h2>
                <p className="text-center font-[400]  mt-2 text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFFB2]">
                    From individuals to businesses, <span className="font-[700] text-sm leading-[100%] tracking-[0%] text-[rgba(47,194,43,1)]">CRETESPACE</span> puts all your essential tools and services in one secure platform.
                    </p>
                    <div className=" grid md:grid-cols-3 gap-[12px] mt-[30px]">
                      {
                        features.map((item,i)=>(
                           <div key={i} className="relative p-5 h-[161px] rounded-[10px] m-auto block border-1 border-[rgb(4,59,3)] ">
                                <h3 className=" font-inter font-medium text-[18px] leading-[100%] tracking-[0%] text-white">
                                  {item.title}
                                    </h3>
                                    <p className=" mt-[10px]  font-normal text-[12px] leading-[15px] text-[#ffffff7c] tracking-[0%] pr-12">
                                    {item.content}
                                    </p>
                                    <img className="right-5 absolute bottom-5 object-coner" src= {item.icon} width={26} height={26} alt="" />
                        </div>
                        ))
                      }
                    </div>
                
        </section>
        
    )
}