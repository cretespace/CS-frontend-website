import Image from 'next/image'
import React from 'react'

const IndividualBenefits = () => {
    return (
        <>

            {/* Benefit 1 */}
            <div className="flex flex-col gap-3">
                <Image
                    src="/images/vector.png"
                    alt="Support icon"
                    width={22}
                    height={22}
                    className="w-[22px] h-[22px]"
                />
                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] sm:text-[18px] font-medium text-white">
                        In-app order tacking
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[280px]">
                        Monitor the progress of your requests in real time from start to finish.                    </p>
                </div>
            </div>
            {/* Benefit 2 */}
            <div className="flex flex-col gap-3">
                <Image
                    src="/images/cloud.png"
                    alt="Tools icon"
                    width={22}
                    height={22}
                    className="w-[22px] h-[22px]"
                />
                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] sm:text-[18px] font-medium text-white max-w-[280px]">
                        Cloud file storage (2GB)
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[260px]">
                        Securely save, retrieve, and manage your documents anytime.                    </p>
                </div>
            </div>
            {/* Benefit 3 */}
            <div className="flex flex-col gap-3">
                <Image
                    src="/images/delivery.png"
                    alt="Admin icon"
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px]"
                />
                <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] sm:text-[18px] font-medium text-white">
                        Pay-per-service, no subscription
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[260px]">
                        Only pay when you place an order, no monthly or annual charges.                    </p>
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
                        Access to CRETESPACE templates
                    </h3>
                    <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[260px]">
                        Use ready-made document and design templates to save time.                    </p>
                </div>
            </div>
        </>
    )
}

export default IndividualBenefits