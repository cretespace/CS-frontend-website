import React from "react";
import SuccessStoryCard from "./SuccessStoryCard";

const successStory = [
  {
    id: 1,
    name: "Ebube Okonkwo",
    role: "Product Designer",
    image: "/Ellipse 9 (5).png",
    content:
      "“From assignments to final year projects, CRETESPACE handles it all. I love the cloud library — I can store and print my work anytime, even right before a deadline.”",
    icons: [
      "/vector-6.png",
      "/vector-6.png",
      "/vector-6.png",
      "/vector-6.png",
      "/vector-6.png",
    ],
     social1: "/icon.png",
    social2: "/svg/icon.svg",
    },
  
  {
    id: 2,
    social1: "/icon.png",
    social2: "/svg/icon.svg",  
    name: "Laura Nnaji",
    role: "Fashion Designer",
    image: "/Ellipse 9 (3).png",
    content:
      "“Managing admin tasks used to eatup mytime. With CRETESPACE, I have a dedicated support agent, cloud tools, and quick printing all in one place. My business runs smoother than ever.”",
    icons: [
      "/vector-6.png",
      "/vector-6.png",
      "/vector-6.png",
      "/vector-6.png",
      "/vector-6.png",
    ],
  },
  {
    id: 3,
    name: "Laura Nnaji",
    role: "Fashion Designer",
    image: "/Ellipse 9 (3).png",
    content:
      "CRETESPACE has been a lifesaver for my freelance work. I can typeset, print, and get documents delivered without leaving my desk. It’s fast, reliable, and stress-free.",
    icons: [
      "/vector-6.png",
      "/vector-6.png",
      "/vector-6.png",
      "/vector-6.png",
      "/vector-6.png",
    ],
 social1: "/icon.png",
    social2: "/svg/icon.svg",  },
];

export default function Individual() {
  return (
    <section className="py-[58px]   gap-[10px] bg-[rgba(0,0,0,1)]">
      <h2 className="text-center font-[500] text-[40px] leading-[100%] text-[#FFFFFF]">
        <span className="text-[#2FC22B]">Individual</span> Success Stories
      </h2>
      <div className="gap-[30px] p-[2px] grid md:grid-cols-3 mt-[30px] ">
        {successStory.map((story) => (
          <SuccessStoryCard
            key={story.id}
            name={story.name}
            role={story.role}
            image={story.image}
            content={story.content}
            icons={story.icons}
            social1={story.social1}
            social2={story.social2}
          />
        ))}
      </div>
    </section>
  );
}
