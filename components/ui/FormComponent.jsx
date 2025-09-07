import React from 'react'
import FormInput from './FormInput'
import SelectInput from './SelectInput';
import CustomButton from './CustomButton';
import Icon from './Icon';
import Upload from './Upload';

const FormComponent = ({array,link, signup,accountType,setAccountType, cta,bottomText}) => {
      const accountTypeArray = [
        "Individual",
        "Business",
        "Student",
        "Business Center",
      ];
  return (
    <form className='p-10 rounded-[18.94px] flex flex-col gap-[28px] bg-gradient-to-b from-transparent via-[#2FC22B1A] to-black border-[0.95px] border-[#0C520A80]'>
        {signup &&  
        <div className="flex items-center gap-[16px] rounded-[5px] bg-black/20 w-[351px] px-[8px] py-[4px]">
          {accountTypeArray.map((item, index) => (
            <p key={index} onClick={()=>setAccountType(item)} className={accountType === item ? "rounded-[3px] py-[5px]  px-[9px] bg-[#013500] cursor-pointer" : "text-white/50 cursor-pointer"}>
              {item}
            </p>
          ))}
        </div>}

          { array?.slice(0,3).map((item, index) => (
            <div key={index} >

              <FormInput label={item.label} placeholder={item.placeholder} type={item.type}/>

            </div>
          ))}

          <div className="flex gap-4">
  
    {array?.slice(3,5)
      .map((item, index) => (
        <div className="flex-1" key={index}>
          <SelectInput
            label={item.label}
            placeholder={item.placeholder}
            type={item.type}
          />
        </div>
      ))}
      
  </div>
 { array?.slice(5,6).map((item, index) => (

        <FormInput key={index}  two phone='+234' label={item.label} placeholder={item.placeholder} type={item.type}/>
            
          ))}

{(accountType === 'Student' || accountType === 'Business Center') && <div><Upload accountType={accountType}/></div> }
          

  { array?.slice(6,11).map((item, index) => (

        <FormInput key={index}   phone='+234' label={item.label} placeholder={item.placeholder} type={item.type}/>
            
          ))}

          <CustomButton text={cta}/>

          {signup && <div className='flex gap-[8px] -mt-3'>
            <Icon src={'/signUp/check.svg'} w={20} h={20}/>
            <p>By creating an account, I agree to the Terms & Conditions and Privacy Policy</p>
          </div> }

          <div className='text-center'>

          <span >{bottomText}</span>
          <span className='text-[#2FC22B]'> {link}</span>
 
          </div>


      </form>



  )
}

export default FormComponent