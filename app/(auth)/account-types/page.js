'use client'
import Icon from '@/components/ui/Icon'
import Cookies from 'js-cookie'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    const accountTypes = [
        {
            type:"Individual",
            image:"/images/man.png",
            use:"For Personal Use",
        }, {
            type:"Business",
            image:"/images/people.png",
            use:" For SMEs and growing companies",
        },{
            type:"Student",
            image:"/images/boy.svg",
            use:"For academic work and support",
        }, {
            type:"Business Center",
            image:"/images/woman2.png",
            use:"For Business Centres",
        },
        
    ]
  return (
    <section className='flex flex-col items-center gap-10 h-[100vh] -mx-[162px] px-[162px]'>
    
         <Image className='w-[300] h-[100]' src={'/bgblur2.png'} width={465} height={98} alt='img'/>
    <div className='flex flex-col items-center justify-center gap-10 h-[100vh] -mt-[6rem]'>
        
        <div >
            <p className='text-[40px] font-[500] font-helvetica'>Select your Account Type</p>
            <p className='text-center text-white/70 font-helvetica font-[400]'>Choose the account that fits your work, study, or business needs.</p>
        </div>

<div className='flex gap-[19px] mt-[35px]'>
    {accountTypes.map((item,index)=>(
        <div onClick={()=>(Cookies.set("accountType",item.type), router.push('/signUp'))} key={index} className={`border-[1.03px] relative ${ item.type === 'Business' && "bg-[#093E0F73]"} cursor-pointer w-[270px] h-[314.31px] border-[#2FC22B40] rounded-[15px] px-[30px] py-[46px] gap-[34px] flex flex-col justify-center items-center`}>
            <div className='absolute top-0 right-0 '>
             <Icon src={index === 1 ?'icons/check-active.svg': 'svg/check.svg'} w={26} h={25}/> 
             </div>
        <p key={index} className='font-[500] text-[16px] font-inter'>{item.type}</p>
        <Icon src={item.image} h={160} w={160}/>
        <p className='text-center text-white/65 text-[12px] font-helvetica'>{item.use}</p>
    </div>))}
</div>
        </div>  

    </section>
  )
}

export default page
