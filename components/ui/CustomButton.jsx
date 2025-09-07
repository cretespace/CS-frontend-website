import React from 'react'

const CustomButton = ({text}) => {
  return (
    <button className='h-[45px] bg-[#2FC22B] flex items-center justify-center py-[15px] px-[10px] rounded-[10px]'>
        <p className='weight-[500] text[16px] '>{text}</p>
    </button>
  )
}

export default CustomButton