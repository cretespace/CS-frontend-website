import countries from "world-countries"; // lightweight list of countries

import Icon from "./Icon";

function SelectInput({ label, placeholder, type }) {
  if (type === "select-country") {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-sm">{label}</label>
        <select className="p-2 rounded bg-black/30 border border-green-800 text-white">
          <option value="">{placeholder}</option>
          {countries.map((c) => (
            <option key={c.cca2} value={c.name.common}>
              {c.name.common}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-sm">{label}</label>
        <div className="relative">
          <select
            className="appearance-none w-full p-2 h-[45px] rounded-[8px] border border-[#2FC22B1A] text-white/70 pr-10"
          >
            <option value="">{placeholder}</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* Custom dropdown icon */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none">

          <Icon src={'/signUp/select2.svg'} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm">{label}</label>

      <div className="relative p-2 appearance-none rounded h-[45px]  rounded-[8px] border-[#2FC22B1A]  border-[1.22px]   text-white/70">

      <input
        type={type}
        placeholder={placeholder}
        className=""
      />

           <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none">

          <Icon src={'/signUp/select2.svg'} />
          </div>

      </div>
    </div>
  );
}

export default SelectInput