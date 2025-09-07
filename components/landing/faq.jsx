"use client";
import { useState } from "react";
import FadeInSection from "./FadeinSection";
import { CircleMinus, CirclePlus } from "lucide-react";

const faqs = [
  {
    question: "What services can I request on CRETESPACE?",
    answer:
      "You can request a wide range of business centre services including typing, graphic design, printing, scanning, file conversion, and custom project work. The platform also offers self-service tools, cloud storage, and access to professional templates for both personal and business use.",
  },
  {
    question: "Do I need a subscription to use the platform?",
    answer: "No subscription is required to get started. You can use the platform with a free account, but premium features may require a paid plan.",
  },
  {
    question: "How long does it take to complete an order?",
    answer: "Completion times vary depending on the service requested. Simple tasks may be completed within hours, while larger projects may take several days.",
  },
  {
    question: "Can I get my documents delivered?",
    answer: "Yes, you can opt for digital delivery via cloud storage or request physical delivery depending on your location.",
  },
  {
    question: "How secure are my files on CRETESPACE?",
    answer: "Your files are encrypted and stored securely. We prioritize data privacy and follow industry best practices.",
  },
  {
    question: "Can other business centres join the platform as partners?",
    answer: "Yes, business centres can join as partners to provide their services through the platform.",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-[56px]  pb-[56px]  gap-[52px] bg-[rgba(0,0,0,1)]">
      
      <div className="">
        <h1 className="text-4xl mt-[-25px]  font-bold text-center mb-2">
          Frequently asked questions
        </h1>
        <p className="text-center text-sm text-gray-400 mb-10">
          Everything you need to know about <span className="font-semibold">CRETESPACE</span>
        </p>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium hover:text-green-600 transition"
              >
                {faq.question}
                <span className="text-[#2FC22B] text-2xl">
                  {openIndex === index ? <CircleMinus size={20}/> : <CirclePlus size={20}/>}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      

        {/* Still have questions */}
      
        <div className="rounded-[10px] border-1 py-[10px] px-[8px] gap-[10px] mt-[52px] bg-[rgba(25,25,25,1)] border-[rgba(47,194,43,0.3)] text-center ">
          <div className="flex justify-center mb-4">
            <img
              src="/images/persone.svg"
              alt="avatar1"
              className="w-10 h-10 rounded-full border-2 border-gray-700 -ml-2 first:ml-0"
            />
            <img
               src="/images/perstwo.svg"
              alt="avatar2"
              className="w-10 h-10 rounded-full border-2 border-gray-700 -ml-2"
            />
            <img
             src="/images/persthree.svg"
              alt="avatar3"
              className="w-10 h-10 rounded-full border-2 border-gray-700 -ml-2 first:ml-0"
            />
          </div>
          <h2 className="text-xl font-semibold mb-1">Still have questions?</h2>
          <p className="text-gray-400 mb-4 text-sm">
            Didn’t find the answer you were looking for? Our support team is here to assist you.
          </p>
          <button className="mb-2 bg-transparent border border-[rgb(33,88,32)] text-[rgb(47,194,43)] font-normal font-ebrima px-3 py-1 rounded-lg hover:bg-green-600 hover:text-white transition">
              Get in touch
          </button>
        </div>
       
      </div>
      
    </div>

  );
}
