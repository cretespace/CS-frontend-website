import Image from 'next/image'
import React from 'react'

const BizCentersBenefits = () => {
    return (
        <>

            {/* Benefit 1 */}
            <div className="flex flex-col gap-3">
                <Image
                    src="/ic_baseline-headset.png"
                    alt="Support icon"
                    width={22}
                    height={22}
                    className="w-[22px] h-[22px]"
                />
                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] sm:text-[18px] font-medium text-white">
                        Customized Support from the Team
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[280px]">
                        Receive dedicated assistance, training, and priority help tailored for franchise partners.
                    </p>
                </div>
            </div>
            {/* Benefit 2 */}
            <div className="flex flex-col gap-3">
                <Image
                    src="/images/case.png"
                    alt="Tools icon"
                    width={22}
                    height={22}
                    className="w-[22px] h-[22px]"
                />
                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] sm:text-[18px] font-medium text-white max-w-[280px]">
                        Free Business Tools & Discounted Services
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[260px]">
                        Use premium tools at no extra cost and enjoy discounts on CRETESPACE services to boost profitability.
                    </p>
                </div>
            </div>
            {/* Benefit 3 */}
            <div className="flex flex-col gap-3">
                <Image
                    src="/vector.png"
                    alt="Admin icon"
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                />
                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] sm:text-[18px] font-medium text-white">
                        Admin Tools for Managing Orders
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[260px]">
                        Get a full dashboard to organize, track, and complete client requests with ease.
                    </p>
                </div>
            </div>
            {/* Benefit 4 */}
            <div className="flex flex-col gap-3">
                <Image
                    src="/images/fileText.png"
                    alt="Marketing icon"
                    width={20}
                    height={24}
                    className="w-[20px] h-[24px]"
                />
                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] sm:text-[18px] font-medium text-white max-w-[290px]">
                        Free Expert-Designed Marketing Templates
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[260px]">
                        Access ready-made flyers, posters, and digital assets to promote your business centre.
                    </p>
                </div>
            </div>
        </>
    )
}

export default BizCentersBenefits