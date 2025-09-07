import React from 'react'
import Icon from './Icon'

const Upload = ({accountType}) => {
  return (
    <div>

        <p className='mb-2'>Upload {accountType} Id</p>

        <div className='h-[186px]  bg-[#062D0866] border-[1px] border-[#2FC22B1A] rounded-[8px] flex justify-center items-center flex-col gap-[10px]s'>
        <Icon src={'/signUp/upload.svg'} w={46} h={46}/>
        <div>

        <span className='font-semi-bold'>Drag files here or   </span>
        <span className='font-semi-bold text-[#2FC22B]' > Browse </span>
        </div>
        <p className='text-[11px] text-white/70'>(Selected Format: (JPEG, PNG, Max 5MB)</p>
    </div>

    <div className='h-[67px] mt-3 py-[12px] items-center px-[15px] bg-[#062D0866] border-[1px] border-[#2FC22B1A] rounded-[8px] flex gap-[21px]'>
        <Icon/>
        <div>

        <p className='font-semi-bold'>{accountType} Photo  </p>
        <p className='text-[11px] text-white/70'>(Selected Format: (JPEG, PNG, Max 5MB)</p>
        <p className='font-semi-bold text-[#2FC22B]' > 09000 </p>
        </div>
    </div>

    </div>
    
  )
}

export default Upload