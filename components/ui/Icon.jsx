import Image from "next/image";
import React from "react";

const Icon = ({ w, h, src }) => {
  return (
    <div>
      <Image
        width={w || 26}
        height={h || 26}
        src={src || "/signUp/checkbox.svg"}
        alt='img'
      />
    </div>
  );
};

export default Icon;
