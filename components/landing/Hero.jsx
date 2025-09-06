"use client";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      className="flex justify-between -mx-[165px] px-[165px] h-[404px]"
      style={{
        backgroundImage: "url('/newhero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-[38px] mt-[51px]">
        <h1 className=" font-mono sm:text-[54px] md:text-[54px] lg:text-[62px]  xl:text-[72px] font-bold  sm:leading-[20px] md:leading-[80px] lg:leading-[80px] tracking-[1px] text-left text-global-3 font-ebrima ">
          Skip the Wait,
          <br />
          Skip the Stress.
        </h1>
        <p className="font-inter text-[18px] text-[#C0C0C0] -mt-5">
          Africa's first Cloud-powered Digital business centre.
        </p>

        <div className="flex  items-center w-full gap-[16px] font-ebrima">
          <button className="bg-[#00A0D4] p-[10px] rounded-[10px] gap-[8px] w-[195px] flex justify-center font-[500] items-center">
            Get started for free
            <CircleArrowRight size={20} />
          </button>
          <p className="font-[500]">Learn more</p>
        </div>
      </div>
      <Image
        src="/GUY2 1.png"
        alt="Hero Image"
        width={416}
        height={404}
        className="object-cover  "
      />
    </section>
  );
}
