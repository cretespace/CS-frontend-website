"use client"

import Image from "next/image"

const StudentForm = ({ formData, onChange, uploadedFile, handleFileUpload }) => {



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

            {/* School Name */}
            <div className="flex flex-col gap-3">
                <label className="text-[14px] font-medium text-white">
                    Name Of School / Institution
                </label>
                <input
                    type="text"
                    placeholder="School Name"
                    value={formData?.schoolName}
                    onChange={(e) => onChange('schoolName', e?.target?.value)}
                    className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                />
            </div>

            {/* Registration and Country */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="flex-1">
                        <label className="text-[14px] font-medium text-white mb-3 block">
                            Registration No.
                        </label>
                        <input
                            type="text"
                            placeholder="Registration No."
                            value={formData?.studentId}
                            onChange={(e) => onChange('registrationNo', e?.target?.value)}
                            className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffff66] placeholder:text-[#ffffff66] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-[14px] font-medium text-white mb-3 block">
                            Country
                        </label>
                        <input
                            type="text"
                            placeholder="Country"
                            value={formData?.course}
                            onChange={(e) => onChange('country', e?.target?.value)}
                            className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffff66] placeholder:text-[#ffffff66] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                        />
                    </div>
                </div>
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
                                onChange={(e) => onChange('gender', e?.target?.value)}
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
                            al8t="Nigeria flag"
                            width={20}
                            height={20}
                            alt="Nigeria flag"
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
            <div className="flex flex-col gap-3">
                <label className="text-[14px] font-medium text-white">
                    Upload School ID
                </label>
                {!uploadedFile ? (
                    <div className="relative">
                        <input
                            type="file"
                            accept=".jpeg,.jpg,.png"
                            onChange={handleFileUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center justify-center py-10 px-10 bg-[#062d0866] border border-[#2fc22b19] rounded-[10px] text-center">
                            <Image
                                src="/images/fileUpload.png"
                                alt="Upload icon"
                                width={46}
                                height={46}
                                className="w-[46px] h-[46px] mb-4"
                            />
                            <p className="text-[14px] font-semibold text-[#ffffffb2] mb-1.5">
                                <span>Drag files here or </span>
                                <span className="text-[#2fc22b]">Browse</span>
                            </p>
                            <p className="text-[11px] font-medium text-[#ffffffb2]">
                                (Selected Format: JPEG, PNG, Max 5MB)
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-5 p-2 bg-[#062d0866] border border-[#2fc22b19] rounded-[12px]">
                        <div className="flex-shrink-0 p-1.5 bg-[#2fc22b] rounded-[12px]">
                            <Image
                                src="/images/img_frame_246.svg"
                                alt="File icon"
                                width={24}
                                height={24}
                                className="w-[24px] h-[24px]"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="text-[12px] font-medium text-[#ffffffb2] mb-1.5">
                                School ID
                            </p>
                            <div className="w-full h-[3px] bg-[#34c759] rounded-[1px] mb-2"></div>
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] text-[#ffffffb2]">{uploadedFile?.size}</span>
                                <span className="text-[10px] text-[#ffffffb2]">100%</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default StudentForm