"use client";
import FormComponent from "@/components/ui/FormComponent";
import Icon from "@/components/ui/Icon";
import {
  bCenterSignupInfo,
  businessSignupInfo,
  formItems,
  individualSignupInfo,
  studentSignupInfo,
} from "@/constants";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [accountType, setAccountType] = useState(Cookies.get("accountType") || "Individual");

  let signupInfo;
  if (accountType === "Individual") {
    signupInfo = individualSignupInfo;
  } else if (accountType === "Business") {
    signupInfo = businessSignupInfo;
  } else if (accountType === "Student") {
    signupInfo = studentSignupInfo;
  } else if (accountType === "Business Center" ) {
    signupInfo = bCenterSignupInfo;
  }

  return (
    <section
      style={{
        backgroundImage: "url(/bgblur.png)",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
      className="min-h-screen -mx-[162px] px-[162px]"
    >
      <div className="flex gap-[5rem] pt-[80px] ">
        {/* Left Section */}
        <div className="flex-[0.5] max-h-[85vh] overflow-scroll scroll-hide flex-shrink-0 flex-col gap-[54px] sticky top-[80px] h-fit hidden md:flex">
          <div>
            <h1 className="font-[500] text-[36px]">Create your Account</h1>
            <h2 className="text-[#2FC22B] font-[500] text-[24px]">
              {accountType} Account
            </h2>
          </div>

          <div className="flex flex-col gap-[36px]">
            {signupInfo?.map((item, index) => (
              <div key={index} className="flex flex-col gap-[12px]">
                <Icon src={item.icon} />
                <h3 className="font-[500] text-[18px]">{item.text}</h3>
                <h4 className="font-[400] text-[12px] text-white/70 w-[75%] leading-[15px]">
                  {item.subtext}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-[0.9] overflow-scroll scroll-hide mb-10">
          <FormComponent
            accountType={accountType}
            setAccountType={setAccountType}
            signup
            array={formItems[accountType]}
            cta='Sign Up'
            bottomText='Already have an account?'
            link="Login"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
