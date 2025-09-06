"use client";
import FormInput from "@/components/ui/FormInput";
import Icon from "@/components/ui/Icon";
import {
  bCenterSignupInfo,
  businessSignupInfo,
  formItems,
  individualSignupInfo,
  studentSignupInfo,
} from "@/constants";
import React, { useState } from "react";

const page = () => {
  const accountTypeArray = [
    "Individual",
    "Business",
    "Student",
    "Business Center",
  ];

  const [accountType, setAccountType] = useState("Individual");

  let signupInfo;

  if (accountType === "Individual") {
    signupInfo = individualSignupInfo;
  } else if (accountType === "Business") {
    signupInfo = businessSignupInfo;
  } else if (accountType === "Student") {
    signupInfo = studentSignupInfo;
  } else if (accountType === "Business Center") {
    signupInfo = bCenterSignupInfo;
  }

  return (
    <div className="flex gap-10">
      {/* left sectioon */}
      <div>
        <h1>Create your Account</h1>
        <h2>{accountType} Account</h2>

        <div>
          {signupInfo.map((item, index) => (
            <div key={index}>
              <Icon src={item.icon} />
              <h3>{item.text}</h3>
              <h4>{item.subtext}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* right section */}
      <div className="">
        {/* account sellection toggle */}
        <div className="flex">
          {accountTypeArray.map((item, index) => (
            <p key={index} className={accountType === item ? "" : ""}>
              {item}
            </p>
          ))}
        </div>

        {/* form */}
        <form>
          {formItems[accountType]?.map((item, index) => (
            <FormInput key={index} label={item} placeholder={item} />
          ))}
        </form>
      </div>
    </div>
  );
};

export default page;
