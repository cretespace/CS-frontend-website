import Image from 'next/image'
import React from 'react'

const BusinessForm = ({formData,onChange}) => {
  return (
 <>
            {/* Business Name */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-white">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Business Name"
                value={formData?.businessName}
                onChange={(e) => onChange('businessName', e?.target?.value)}
                className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
              />
            </div>
            
            {/* Business Address */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-white">
                Business Address
              </label>
              <input
                type="text"
                placeholder="Business Address"
                value={formData?.businessAddress}
                onChange={(e) => onChange('businessAddress', e?.target?.value)}
                className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
              />
            </div>
            
            {/* Contact Person Name */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-white">
                Contact Person Name
              </label>
              <input
                type="text"
                placeholder="Contact Person Name"
                value={formData?.contactPersonName}
                onChange={(e) => onChange('contactPersonName', e?.target?.value)}
                className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
              />
            </div>
            
            {/* Contact Person Role and Country */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <label className="text-[14px] font-medium text-white mb-3 block">
                    Contact Person Role
                  </label>
                  <div className="relative">
                    <select
                      value={formData?.contactPersonRole}
                      onChange={(e) => onChange('contactPersonRole', e?.target?.value)}
                      className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffff66] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b] appearance-none"
                    >
                      <option value="Manager">Manager</option>
                      <option value="Owner">Owner</option>
                      <option value="Director">Director</option>
                    </select>
                    <Image
                      src="/images/img_vector_white_a700.svg"
                      alt="Dropdown arrow"
                      width={6}
                      height={16}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[6px] h-[16px]"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-[14px] font-medium text-white mb-3 block">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="Country"
                    value={formData?.country}
                    onChange={(e) => onChange('country', e?.target?.value)}
                    className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffff66] placeholder:text-[#ffffff66] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                  />
                </div>
              </div>
            </div>
            
            {/* Business Phone Number */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-white">
                Business Phone Number
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2.5 px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] min-w-[80px]">
                  <Image
                    src="/images/flag-nigeria.png"
                    alt="Nigeria flag"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="text-[14px] text-[#ffffff66]">+234</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData?.businessPhoneNumber}
                  onChange={(e) => onChange('businessPhoneNumber', e?.target?.value)}
                  className="flex-1 px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffff66] placeholder:text-[#ffffff66] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                />
              </div>
            </div>
            
            {/* Number of Employees */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-white">
                Number of Employees
              </label>
              <input
                type="text"
                placeholder="Number of Employees"
                value={formData?.numberOfEmployees}
                onChange={(e) => onChange('numberOfEmployees', e?.target?.value)}
                className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
              />
            </div>
          </>
)
}

export default BusinessForm