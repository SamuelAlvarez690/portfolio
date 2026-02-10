import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#AAC4F5] text-[white] font-[Caslon] text-2xl font-bold w-full h-15 fixed top-0 left-0 flex flex-row justify-between items-center px-20">
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
            <a href="/Resume_Samuel_Alvarez_2025.pdf" target="_blank">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;