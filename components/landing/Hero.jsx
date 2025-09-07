"use client";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      className="flex justify-between -mx-[162px] px-[162px] h-[404px]"
      style={{
        backgroundImage: "url('/herobg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-[38px] mt-[51px]">
        <h1 className="font-ebrima text-[72px] font-[700]  leading-[80px] tracking-[1px]  ">
          Skip the Wait,
          <br />
          Skip the Stress.
        </h1>
        <p className="font-[400] text-[18px] text-[#C0C0C0] leading-[28px] -mt-5">
          Africa's first Cloud-powered Digital business centre.
        </p>

        <div className="flex  items-center w-full gap-[16px] ">
         <Link href={'/signUp'} className="bg-[#00A0D4] p-[10px] text-[16px] rounded-[10px] gap-[8px] w-[195px] h-[44px] flex justify-center font-[500] items-center">
            Get started for free
            <CircleArrowRight size={20} />
          </Link>
          <p className="font-[500] text-[16px]">Learn more</p>
        </div>
      </div>
      <img
        src="/landing/guy.svg"
        alt="Hero Image"
       
        className="object-cover  "
      />
    </section>
  );
}
