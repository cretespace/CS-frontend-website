'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const TopSection = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <div
        className={`fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-[162px] border-b border-[#2FC22B80] transition-all duration-300 z-50 
          ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}`}
      >
        <Image src="/logo.svg" width={86} height={29} alt="logo" />
        <Link href={'/'} className="text-[#2FC22B] text-[20px] font-[400] cursor-pointer">
          Cancel
        </Link>
      </div>
  )
}

export default TopSection