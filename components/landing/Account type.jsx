"use client";

import { useState } from "react";
import FadeInSection from "./FadeinSection";

const plans = [
  {
    title: "Individual",
    subtitle: "For Personal Use",
    price: "FREE",
    per: "/month",
    button: "Current Plan",
    thing: 'Features:',
    image: <img src="/icons/user.svg" />,
    highlighted: false,
    features: [
      "in-app order tracking",
      "Cloud file storage (2GB)",
      "pay-per service, no subscription",
      "Access to  CRETESPACE templates",
      "Access to typing, design, scanning",
      "Chat support with CRETESPACE agents"
    ],
  },
  {
    title: "Business",
    subtitle: "For SMEs and growing companies",
    price: "₦30,000",
    per: "/month",
    button: "Upgrade to Business",
    thing: 'Features:',
    image: <img src="/icons/buzz.svg" />,
    highlighted: false,
    features: [
      "Virtual meeting booking",
      "Unlimited cloud storage for team",
      "Dedicated CRETESPACE support agent",
      "Monthly report & analytics dashboard",
      "Access to business templates & admin tools",
      " Team collaboration & task management tools",
    ],
  },
  {
    title: "Student",
    subtitle: "For academic work and support",
    price: "₦10,000",
    per: "/month",
    button: "Upgrade to Student",
    thing: 'Features:',
    image: <img src="/icons/cap.svg" />,
    highlighted: false,
    features: [
      "in-app order tracking",
      "Cloud file storage (2GB)",
      "pay-per service, no subscription",
      "Access to  CRETESPACE templates",
      "Access to typing, design, scanning",
      "Chat support with CRETESPACE agents"
    ],
  },
  {
    title: "Business Centre",
    subtitle: "For Business centre",
    price: "₦80,000",
    per: "/month",
    button: "Upgrade to Business Centre",
    thing: 'Features:',
    image: <img src="/icons/comp.svg" />,
    highlighted: false,
    features: [
      "in-app order tracking",
      "Cloud file storage (2GB)",
      "pay-per service, no subscription",
      "Access to  CRETESPACE templates",
      "Access to typing, design, scanning",
      "Chat support with CRETESPACE agents"
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative lit-bg  pt-[71px] pb-[81px] font-ebrima">

      <div className=" rounded-[20px] border-1 border-[rgba(11,128,7,0.7)] ">

        {/* Header */}
        <div className=" relative text-center  
        border-t-2 border-transparent
        before:content-[''] before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2
        before:w-1/2 before:h-[2px]
        before:bg-gradient-to-r before:from-transparent before:via-green-500 before:to-transparent
        ">
          <h2 className="font-[500] text-[40px] text-center mt-8">Choose your Account Type</h2>
          <p className="font-normal text-sm text-center text-[rgba(255,255,255,0.7)]">
            Choose the account that fits your work, study, or business needs.
          </p>
          <div className="flex w-[130px] mx-auto justify-between  bg-[rgba(0,28,5,1)] mt-[18px]  rounded-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-[5px]  px-2 ml-0 text-gray-500  ${billing === "monthly"
                  ? "bg-[rgba(1,53,0,1)] text-white font-medium text-sm "
                  : ""
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`rounded-[5px] px-2 text-gray-500 ${billing === "annual"
                  ? " bg-[rgba(1,53,0,1)] font-normal text-sm text-white "
                  : "text-gray-500 "
                }`}
            >
              Annual
            </button>
          </div>
        </div>
        {/* Pricing cards */}


        <div className="grid grid-cols-1 md:grid-cols-4 mt-[26px] gap-3  p-[55px] ">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col p-3 rounded-[20px] bg-gradient-to-b from black to-[rgba(10,69,18,0.85)] border ${plan.highlighted ? "border-[rgb(15,108,12)]" : "border-[rgba(47,194,43,0.2)]"
                }
                transition-all duration-500 
        hover:bg-[rgba(2,37,20,0.93)]
        hover:shadow-[0_0_2px_rgba(100,255,180,0.8)]
        hover:border-green-500
        hover:scale-105
        group
        `}
            >
              <div className="">
                <div className='mt-1'>{plan.image}</div>
                <h3 className="font-medium text-[20px] text-[rgba(255,255,255,1)] pt-2 tracking-wide">{plan.title}</h3>
                <p className="text-[10px] text-[rgba(255,255,255,0.65)]">{plan.subtitle}</p>
              </div>

              <div className="mt-[10px] text-center">
                <span className="font-bold  text-[30px] text-[rgba(255,255,255,1)] font-sans ">{plan.price} <br /></span>
                <div className="mt-[-10px]  text-center">
                  <span className="font-normal text-[12px] text-[rgba(255,255,255,0.65)]">{plan.per}</span>
                </div>
              </div>




              <button
                className={`text-xs rounded-[7px] border-1 py-[2px] px-[20px]   gap-[10px] mt-[10px] group-hover:bg-[rgba(47,194,43,1)] group-hover:h-[36px] group-hover:border-none group-hover:font-medium group-hover:text-[12px] group-hover:text-white transition-all duration-500 cursor-pointer ${plan.highlighted
                    ? "bg-[rgba(47,194,43,1)] h-[36px] border-none font-medium text-[12px] text-white "
                    : "bg-[rgba(10,69,18,0.2)] font-normal text-xs text-gray-400 h-[36px]  border border-[rgba(47,194,43,0.25)]"




                  }`

                }
              >
                {plan.button}

              </button>



              <ul className="mt-[10px]  text-sm text-gray-300">
                <div className="">
                  <span className="font-medium text-[12px] text-[rgba(255,255,255,1)]">{plan.thing}</span>
                </div>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex  items-center gap-2 font-normal text-[8.5px] mt-[4px] ">
                    <img src="/icons/checkmark.svg" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}


// export default function Pricing () {
//   return (
//     <section className="bg-[rgba(0,0,0,1)] pl-[165px] pr-[165px] pt-[71px] pb-[81px]">
//       <div className=" rounded-[20px] border-1 border-[rgba(12,82,10,0.7)]  ">
//         <h2 className="font-medium text-[40px] text-center">Choose your Account Type</h2>
//         <p className="font-normal text-sm text-center text-[rgba(255,255,255,0.7)]">Choose the account that fits your work, study, or business needs.</p>
//       </div>
//     </section>
//   )
// }