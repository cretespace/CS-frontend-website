import Image from 'next/image'
import React from 'react'

const BusinessBenefits = () => {
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
            Dedicated CRETESPACE Agent                        </h3>
          <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[280px]">
            A personal support representative to handle and follow up on all your business requests.          </p>
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
            Extended  cloud file storage (15gb)          </h3>
          <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[260px]">
            Store and manage all your company documents without worrying about storage limits.          </p>
        </div>
      </div>
      {/* Benefit 3 */}
      <div className="flex flex-col gap-3">
        <Image
          src="/images/vector.png"
          alt="Admin icon"
          width={26}
          height={26}
          className="w-[26px] h-[26px]"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] sm:text-[18px] font-medium text-white">
            Order Tracking & Management          </h3>
          <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[260px]">
            Monitor all company service requests, deadlines, and deliveries in real-time.          </p>
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
            Access to premium business templates           </h3>
          <p className="text-[11px] sm:text-[12px] font-normal text-[#ffffffb2] leading-[15px] max-w-[260px]">
            Access ready-made templates for proposals, reports, letters, and other business documents.          </p>
        </div>
      </div>

    </>
  )
}

export default BusinessBenefits