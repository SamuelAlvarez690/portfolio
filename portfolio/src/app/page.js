import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-[#16C2F9] w-600 h-600 rounded-full -ml-25 -mt-400">
        <div className="bg-[#007FA8] w-590 h-590 rounded-full ml-5 mt-5">
          <div className="bg-[#16C2F9] w-550 h-550 rounded-full ml-25 mt-25">

          </div>
        </div>
      </div>

      <section id="name" className="mb-125">
        <div className="text-8xl font-bold text-white italic ml-25 -mt-190">
          Samuel Alvarez
        </div>

        <div className="text-xl text-white font-bold ml-25">
          Hello, I'm a full-stack developer based in Houston, TX 
        </div>
      </section>

      <section id="aboutme" className="">
        <div className="text-5xl font-bold text-white ml-25 mt-25 mb-5">
          About Me
        </div>

        <div className="flex flex-row">
          <div>
          <img src="/Sam_photo.webp" className="w-50"></img>
          </div>

          <div className="text-xl text-white font-bold w-175 ml-25">
            I'm a passionate full-stack developer who excels in group settings. I also love experimenting with different languages, such as Java,
            Ruby, Lua, Erlang, Elixir, Kotlin, and Python. When I'm not programming I enjoy drawing, playing Chess, or playing video games.
          </div>
        </div>
      </section>



      <div className="text-5xl font-bold text-white ml-25 mt-25">
        Skills
      </div>

      <div className="text-5xl font-bold text-white ml-25 mt-25">
        Projects
      </div>
    </>
  );
}
