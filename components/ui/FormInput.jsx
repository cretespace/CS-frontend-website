import React from "react";

const FormInput = (label, placeholder, index) => {
  return (
    <div>
      <label>{label}</label>

      <div className="border-[1px]">
        <input className="outline-none" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormInput;
