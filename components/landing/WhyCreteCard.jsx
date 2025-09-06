import React from 'react'

const WhyCreteCard = ({title, description, imgSrc}) => {
  return (


    <div className=" mt-[30px] flex  gap-[85px] items-center odd:flex-row-reverse">
                <div className="gap-[8px] flex-[0.5]">
                        <h3 className="font-bold text-[24px] text-[#2FC22B]">{title}</h3>
                        <p className="font-normal mt-[8px] text-[16px]  text-[#ffffff]">{description}</p>
                </div>
                    <img className="w-[451px] h-[451px] flex-[0.5]" src={imgSrc} alt="why creteSpace image" />
            </div>
  )
}

export default WhyCreteCard