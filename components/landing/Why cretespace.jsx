import React from "react";
import WhyCreteCard from "./WhyCreteCard";
const data=[

    {
        id:1,
        title:"100% Virtual Convenience",
        imgSrc:"/landing/computerguy.svg",
        description:"Access all business centre services from your phone or computer without stepping into a physical office. Whether you need a quick document conversion, a full project design, or bulk printing, CRETESPACE lets you order, track, and receive your work entirely online , saving you travel time and effort."

    },
    {
        id:2,
        title:"Access to Verified Experts",
        imgSrc:"/landing/letschat.svg",
        description:"No matter the task, you have access to CRETESPACE’s team of professionals. From admin support to creative design, our experts ensure your jobs are completed accurately, efficiently, and to the highest standards. You can chat directly with them, share files, and give feedback in real time.",
    },
    {
        id:3,
        title:"Secure File Handling",
        imgSrc:"/landing/filehandling.svg",
        description:"No matter the task, you have access to CRETESPACE’s team of professionals. From admin support to creative design, our experts ensure your jobs are completed accurately, efficiently, and to the highest standards. You can chat directly with them, share files, and give feedback in real time.",
    },
{
        id:4,
        title:"Scalable for Everyone",
        imgSrc:"/landing/scalable.svg",
        description:"Whether you&aos;re a student working on assignments, a freelancer handling client projects, a business managing admin tasks, or a physical business centre processing orders, CRETESPACE adapts to your needs with tailored features and account types.",
    }
]
export default function Why () {
    return (
        <section className="py-[44px]   gap-[12px] ">
            <h2 className="text-center font-[500] text-[40px] ">Why CreteSpace?</h2>
                {data.map((item,i)=>(
                    <WhyCreteCard key={i} title={item.title} description={item.description} imgSrc={item.imgSrc} />
                ))}

        </section>
    )
}


{/* <div className="gap-[8px] ">
                        <h3 className="font-bold text-xl text-[#0b8606]">100% Virtual Convenience</h3>
                        <p className="font-normal mt-[8px] text-sm  text-[#ffffff9f]">Access all business centre services from your phone or computer without stepping into a physical office. Whether you need a quick document conversion, a full project design, or bulk printing, CRETESPACE lets you order, track, and receive your work entirely online , saving you travel time and effort.</p>
                </div>
                <div className="flex justify-center">
                    <img className="w-[451px] h-[451px]" src="/te 1.png" alt="" />
                </div>
            </div>

          <div className=" mt-[10px] grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <img className="w-[451px] h-[451px]" src="/2440137 2.png" alt="" />
                </div>

                <div className="gap-[8px] ">
                        <h3 className="font-bold text-xl text-[#0b8606]">Access to Verified Experts</h3>
                        <p className="font-normal mt-[8px] text-sm text-[#ffffff9f]">No matter the task, you have access to CRETESPACE’s team of professionals. From admin support to creative design, our experts ensure your jobs are completed accurately, efficiently, and to the highest standards. You can chat directly with them, share files, and give feedback in real time.</p>
                </div>

            </div>
            

            <div className=" mt-[10px] grid md:grid-cols-2 gap-12 items-center">
                <div className="gap-[8px] ">
                        <h3 className="font-bold text-2xl text-[#0b8606]">Secure File Handling</h3>
                        <p className="font-normal mt-[8px] text-sm text-[#ffffff9f]">Your documents and projects are protected with secure cloud storage and controlled access. You can upload, store, and retrieve files at any time without worrying about loss or unauthorized access. Plus, every file is backed up to prevent accidental deletion.</p>
                </div>
                <div className="flex justify-center">
                    <img className="w-[451px] h-[451px]" src="/ertt 1.png" alt="" />
                </div>
            </div>

            <div className=" mt-[10px] grid md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <img className="w-[451px] h-[451px]" src="/freepik__i-need-a-vector-illustration-of-a-different-people__94425 1.png" alt="" />
                </div>

                <div className="gap-[8px] ">
                        <h3 className="font-bold text-2xl text-[#0b8606]">Scalable for Everyone</h3>
                        <p className="font-normal mt-[8px] text-sm text-[#ffffff9f]">Whether you&aos;re a student working on assignments, a freelancer handling client projects, a business managing admin tasks, or a physical business centre processing orders, CRETESPACE adapts to your needs with tailored features and account types.</p>
                </div> */}