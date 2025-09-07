"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {

  return (
    <section className="-mx-[165px] h-[66px] border-b-[#2FC22B80] px-[40px] py-[17px] text-[#B8B8B8] border-b justify-between">
      <nav className=" px-[40px] flex justify-between items-center">
        <div>
          <Image src="/logo.svg" alt="crete logo" width={86} height={29} />
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-5 ">
            <a href="#">Our Hubs</a>
            <a href="#">FAQs</a>
            <a href="#">About</a>
            <a href="#">Support</a>
          </div>

          <div className="flex gap-2 items-center">
            <a href="#">Login</a>
            <button
              className="pt-[4px] text-[16px] pr-[6px] pb-[4px] pl-[6px] gap-[10px] rounded-md bg-[#00A0D4] text-base font-medium leading-[24px] tracking-[0.1px] text-[#C0C0C0]"
            >
              <Link href="/account-types" >Sign up</Link>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}
