import Image from 'next/image'
import React from 'react'

const IndividualForm = ({formData,onChange}) => {
    
  return (
 <>
            {/* First Name */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-white">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={formData?.firstName}
                onChange={(e) => onChange('firstName', e?.target?.value)}
                className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
              />
            </div>
            
            {/* Last Name */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-white">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                value={formData?.lastName}
                onChange={(e) => onChange('lastName', e?.target?.value)}
                className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
              />
            </div>
                        {/* Country */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-white">
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
            {/* Gender and D O B  */}
            <div className="flex flex-col gap-3">
                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <div className="flex-1">
                              <label className="text-[14px] font-medium text-white mb-3 block">
                                Gender
                              </label>
                              <div className="relative">
                                <select
                                  value={formData?.gender}
                                  onChange={(e) => onChange('contactPersonRole', e?.target?.value)}
                                  className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffff66] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b] appearance-none"
                                >
                                  <option value="Manager">Male</option>
                                  <option value="Owner">Female</option>
                                  
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
                                Date Of Birth
                              </label>
                              <input
                                type="date"
                               name='D O B'
                                value={formData?.dob}
                                onChange={(e) => onChange('country', e?.target?.value)}
                                className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffff66] placeholder:text-[#ffffff66] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                              />
                            </div>
                          </div>
                        </div>
            
            {/* Phone Number */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-white">
                Phone Number
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
                  value={formData?.phoneNumber}
                  onChange={(e) => onChange('phoneNumber', e?.target?.value)}
                  className="flex-1 px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffff66] placeholder:text-[#ffffff66] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                />
              </div>
            </div>
            

          </>
)
}

export default IndividualForm