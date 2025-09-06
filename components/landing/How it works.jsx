import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Order from anywhere",
    icon: "/Vector.png",
    content:
      "Place your order online from your phone or computer. Upload your files, choose what you need, and confirm; all without leaving your location.",
  },
  {
    id: 2,
    title: "Order from anywhere",
    icon: "/Vector (1).png",
    content:
      "Get a message when your order is done. Stop by at any of our CRETESPACE stores, and collect it at a time that’s convenient for you.",
  },
  {
    id: 3,
    title: "Order from anywhere",
    icon: "/Vector (7).png",
    content:
      "Prefer not to go out? Select our delivery option and we’ll bring your order straight to your home, school, or office. It’s fast, safe, and saves you time.",
  },
];
export default function How() {
  return (
    <section className=" py-[60px] mb-20 gap-[10px] ">
      <div className="gap-[48px]">
        <h2 className="text-center font-[500] text-[40px] leading-[100%] tracking-[0%] text-[#FFFFFF]">
          How it Works
        </h2>
        <div className="  grid md:grid-cols-3 gap-[30px]  mt-9">
          {data.map((articles, i) => (
            <div key={i} className="h-[72px]">
              <div className="gap-[12px]">
                <Image src={articles.icon} width={24} height={24} alt="icons" />
                <h3 className="font-[500] text-[18px] leading-[28px] tracking-[0px] text-[#2FC22B] mb-2 mt-[-24px] ml-10">
                  {articles.title}
                </h3>
              </div>
              <p className="font-[400] text-[14px] leading-[24px] tracking-[0.1px] text-[#FFFFFF] w-[350px] h-[72px] p-2">
                {articles.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
