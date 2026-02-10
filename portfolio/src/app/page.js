import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="name" className="mb-125 scroll-mt-[285]">
        <div className=" text-[#AAC4F5] text-8xl font-bold italic ml-25 mt-70">
          Sam Alvarez
        </div>

        <div className=" text-[#AAC4F5] text-xl font-bold ml-25">
          Hello, I'm a full-stack developer based in Houston, TX 
        </div>
      </section>

      <section id="aboutme" className="mb-125 scroll-mt-[180]">
        <div className="text-[#AAC4F5] text-5xl font-bold italic ml-25 mt-25 mb-5">
          About Me
        </div>

        <div className="flex flex-row justify-center items-center">
          <div>
          <img src="/Sam_photo.webp" className="w-50 rounded-lg"></img>
          </div>

          <div className="bg-[#AAC4F5] text-white text-xl font-bold w-175 ml-25 p-[10] rounded-lg ">
            I am a Senior at the University of Houston pursuing a degree in Computer Science with a minor in Data and Society. I am passionate about web developement, however I have experience with tutoring and data science as well.
          </div>
        </div>
      </section>



      <div className="text-[#AAC4F5] text-5xl font-bold ml-25 mt-25">
        Skills
      </div>

      <div className="text-[#AAC4F5] text-5xl font-bold ml-25 mt-25">
        Projects
      </div>
    </>
  );
}
