import React from "react";

export default function Navbar({ navColor}) {
  return (
    <nav style={{ background: navColor }} className="text-[white] text-4xl font-bold w-full h-14 fixed top-0 left-0 flex flex-row justify-between items-center px-10">
      <div>
        <a href="#name" className="">
          Sam Alvarez
        </a>
      </div>

      <div>
        <ul className=" font-bold flex flex-row gap-5">
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="/Samuel_Alvarez.pdf" target="_blank">Resume</a>
          </li>
        </ul> 
      </div>
    </nav>
  );
};

