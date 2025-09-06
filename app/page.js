import React from "react";
import Image from "next/image";
import FadeInSection from "@/components/landing/FadeinSection";

import Faq from "@/components/landing/faq";
import Footer from "@/components/layout/footer";
import Accounttype from "@/components/landing/Account type";
import How from "@/components/landing/How it works";
import Oneplatform from "@/components/landing/One platform";
import Whycretespace from "@/components/landing/Why cretespace";
import Business from "@/components/landing/Business success";
import Individual from "@/components/landing/Individual success";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/layout/Navbar";

// THIS FILE CONTAINS HARD CODING, WARNING ! WARNING ! WARNING !

export default function Page() {
  return (
    <main className="">
      <Navbar />

      <Hero />
      <How />
      <Oneplatform />
      <hr className=" border-[rgb(4,59,3)] -mx-[165px]" />
      <Whycretespace />
      <hr className=" border-[rgb(4,59,3)] -mx-[165px]" />
      <Business />
      <hr className=" border-[rgb(4,59,3)] -mx-[165px]" />
      <Individual />
      <hr className=" border-[rgb(4,59,3)] -mx-[165px]" />
      <Accounttype />
      <hr className=" border-[rgb(4,59,3)] -mx-[165px]" />
      <Faq />
      <hr className=" border-[rgb(4,59,3)] -mx-[165px]" />
      <Footer />
    </main>
  );
}
