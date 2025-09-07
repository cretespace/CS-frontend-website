"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {

  return (
    <section className="-mx-[165px] h-[66px] border-b-[#2FC22B80] px-[40px] py-[17px] text-[#B8B8B8] border-b-[1px] justify-between">
      <nav className=" px-[40px] flex justify-between items-center">
          <Image src="/logo.svg" alt="crete logo" width={86} height={29} />
        <div className="flex gap-[32px] items-center text-[16px]">
          <div className="flex gap-5 ">
            <a href="#">Our Hubs</a>
            <a href="#">FAQs</a>
            <a href="#">About</a>
            <a href="#">Support</a>
          </div>

          <div className="flex gap-[12px] items-center">
            <a href="#">Login</a>
            <button
              className="pt-[4px] w-[70px] h-[32px] text-[16px] py-[4px] px=[6px] gap-[10px] rounded-[6px] bg-[#00A0D4] text-base font-medium "
            >
              <Link href="/account-types" >Sign up</Link>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}
