'use client'
import React from "react";
import { useEffect, useState } from 'react'
import Navbar from "./components/Navbar.jsx";
import ColorWheel from "./components/ColorWheel.jsx"

const themes = [
  { fg: '#fc8c86', bg: '#fce7e6'},
  { fg: '#ffc067', bg: '#fae6ca'},
  { fg: '#f0e084', bg: '#fcefde'},
  { fg: '#8dfca5', bg: '#ebf7ee'},
  { fg: '#aac4f5', bg: '#e3edff'},
  { fg: '#a589d1', bg: '#c3b1e1'},
  { fg: '#f7b7ce', bg: '#ffe5ee'},
  { fg: '#000000', bg: '#FFFFFF'} 
]

export default function Home() {
  const [index, setIndex] = useState(4)
  const [randomFg, setRandomFg] = useState(null)
  const [randomBg, setRandomBg] = useState(null)
  const [fgInput, setFgInput] = useState(themes[4].fg)
  const [bgInput, setBgInput] = useState(themes[4].bg)
  const [error, setError] = useState('')

  const lighten = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const lr = Math.floor(r + (255 - r) * 0.6)
    const lg = Math.floor(g + (255 - g) * 0.6)
    const lb = Math.floor(b + (255 - b) * 0.6)
    return `#${lr.toString(16).padStart(2, '0')}${lg.toString(16).padStart(2, '0')}${lb.toString(16).padStart(2, '0')}`
  }

  const handleRandom = () => {
    // Full RGB Range Random Color Logic
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const fg = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    const bg = lighten(fg)
    setRandomFg(fg)
    setRandomBg(bg)
  }

  const activeFg = randomFg ?? themes[index].fg
  const activeBg = randomBg ?? themes[index].bg

  useEffect(() => {
    const savedIndex = parseInt(localStorage.getItem('index')) || 4
    const savedFg = localStorage.getItem('randomFg') || null
    const savedBg = localStorage.getItem('randomBg') || null
    setIndex(savedIndex)
    setRandomFg(savedFg)
    setRandomBg(savedBg)
    setFgInput(savedFg ?? themes[savedIndex].fg)
    setBgInput(savedBg ?? themes[savedIndex].bg)
    setError('')
  }, [])
 

  useEffect(() => {
    document.body.style.backgroundColor = activeBg;
  }, [activeBg]);

  useEffect(() => {
    localStorage.setItem('index', index)
  }, [index])

  useEffect(() => {
    if (randomFg) localStorage.setItem('randomFg', randomFg)
    else localStorage.removeItem('randomFg')
    if (randomBg) localStorage.setItem('randomBg', randomBg)
    else localStorage.removeItem('randomBg')
  }, [randomFg, randomBg])

  const isValidHex = (hex) => /^#[0-9A-Fa-f]{6}/.test(hex)

  const handleSubmit = () => {
    let secret = ["kotone", "makoto", "darkhour", "yu", "joker", "ren", "raichu"]

    if ((!secret.includes(fgInput.toLocaleLowerCase())) && (!isValidHex(fgInput) || !isValidHex(bgInput))){
      setError('Please enter a valid hex code (e.g. #ff0000)')
      return
    }

    if (fgInput.toLocaleLowerCase() == "kotone") {
      setRandomFg("#6a020d")
      setRandomBg("#ff7599")
    }
    else if (fgInput.toLocaleLowerCase() == "makoto") {
      setRandomFg("#0c2a46")
      setRandomBg("#2494ff")
    }
    else if (fgInput.toLocaleLowerCase() == "darkhour") {
      setRandomFg("#27b454")
      setRandomBg("#9af0b5")
    }
    else if (fgInput.toLocaleLowerCase() == "yu") {
      setRandomFg("#fcac1f")
      setRandomBg("#fdc401")
    }
    else if (fgInput.toLocaleLowerCase() == "joker" || fgInput.toLocaleLowerCase() == "ren") {
      setRandomFg("#FF0000")
      setRandomBg("#000000")
    } 
    else if (fgInput.toLocaleLowerCase() == "raichu") {
      setRandomFg("#f4ad39")
      setRandomBg("#f5db2c")
    }
    else {
      setRandomFg(fgInput)
      setRandomBg(bgInput)
    }

      setError('')
      setFgInput(activeFg)
      setBgInput(activeBg)
  }

  return (
    <>
      {/* Credit to https://www.flaticon.com/free-icons/web for the icon */}
      {/* Gets icons for Skills section */}
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <Navbar navColor={activeFg}/>

      <section id="name" style={{ color: activeFg }} className=" flex flex-row justify-between mx-25 scroll-mt-299 h-screen">
        <div className="mt-[60]">
          <div className="text-[175px] leading-[0.6] font-bold mt-60 ">
            Sam Alvarez
          </div>

          <div className="text-4xl font-bold">
            Hello, I'm a full-stack developer based in Houston, TX 
          </div>

          <div className="text-5xl flex gap-[14px] mt-3">
            <a href="https://github.com/SamuelAlvarez690" target="_blank"><i className="devicon-github-original"></i></a>
            <a href="https://www.linkedin.com/in/samuel-alvarez-4a9606240/" target="_blank"><i className="devicon-linkedin-plain"></i></a>
            <a href="mailto:samuelralvarez2004@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg></a>
          </div>
        </div>
        <div style={{ background: activeFg }} className="flex flex-col items-center mt-[150] mr-25 w-110 h-120 px-[20px] rounded-lg shadow-xl">
          <div className="text-white text-5xl font-bold mt-[30px] flex justify-center">Pick a Color!</div>  
          <div className="flex flex-row items-center gap-[16px]">
            <div className="flex flex-col items-left">
              <div className="flex flex-row items-center gap-[8px]">
                <label htmlFor="foreground" className="text-white text-3xl font-bold">Foreground: </label>
                <input id="foreground" className="text-white text-3xl w-[80px] h-[25px]" value={fgInput} onChange={(e) => setFgInput(e.target.value)}></input>
              </div>
              <div className="flex flex-row items-center gap-[8px]">
                <label className="text-white text-3xl font-bold">Background: </label>
                <input id="background" className="text-white text-3xl w-[80px] h-[25px]" value={bgInput} onChange={(e) => setBgInput(e.target.value)}></input>
              </div>
            </div>
            <button style={{ background: activeBg }} className="text-white text-3xl w-[100px] h-[40px] rounded-lg hover:opacity-80" onClick={handleSubmit} >Apply</button>
          </div>
          {error && <p className="text-white text-3xl px-[6px] mt-1 rounded-lg">{error}</p>}
          <ColorWheel themes={themes} setIndex={(i) => {
            setIndex(i)
            setRandomFg(null)
            setRandomBg(null)
          }} handleRandom={ handleRandom } />
        </div>
      </section>

      <section id="aboutme" className="scroll-mt-35 h-screen">
        <div style = {{ color: activeFg }}className=" text-5xl font-bold ml-25 mt-25 mb-5">
          About Me
        </div>

        <div className="flex flex-row justify-center items-center">
          <div>
          <img src="/Graduation.jpg" className="w-100 rounded-lg shadow-xl"></img>
          </div>

          <div style={{ background: activeFg }} className="text-white text-3xl font-bold w-175 ml-25 p-[10] rounded-lg shadow-xl ">
            I am a University of Houston graduate with a degree in Computer Science and a minor in Data and Society. I am passionate about web developement, however I have experience with tutoring and data science as well.
          </div>
        </div>
      </section>


      <section id="skills" className="scroll-mt-35 h-screen">
        <div style={{ color: activeFg}} className="text-5xl font-bold ml-25 mt-25 mb-5">
        Skills
        </div>

        <div className="text-[#F0F8FF] text-3xl font-bold flex justify-center gap-10">
          <div style = {{ background: activeFg }} className=" w-90 h-90 rounded-lg shadow-xl">
            <div className="text-4xl flex flex-row justify-center mt-[40px] mb-[60px]">Languages</div>
            <div className="flex flex-row flex-wrap justify-center">
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-cplusplus-plain"></i>C++</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-python-plain"></i>Python</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-html5-plain"></i>HTML</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-css3-plain"></i>CSS</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-javascript-plain"></i>JavaScript</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-ruby-plain"></i>Ruby</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-r-plain"></i>R</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-mysql-original"></i>SQL</div>
            </div>
          </div>

          <div style = {{ background: activeFg }} className="w-90 h-90 rounded-lg shadow-xl scroll-mt-285">
            <div className="text-4xl flex flex-row justify-center mt-[40px] mb-[60px]">Frameworks/Libraries</div>
            <div className="flex flex-row flex-wrap justify-center">
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-react-original"></i>React</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-tailwindcss-original"></i>Tailwind CSS</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-nodejs-plain"></i>Node.js</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-express-original"></i>Express</div>
            </div>
          </div>

          <div style = {{ background: activeFg }} className="w-90 h-90 rounded-lg shadow-xl">
            <div className="text-4xl flex flex-row justify-center mt-[40px] mb-[60px]">Tools</div>
            <div className="flex flex-row flex-wrap justify-center">
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-vscode-plain"></i>VS Code</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-visualstudio-plain"></i>Visual Studio</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-rstudio-plain"></i>RStudio</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-github-original"></i>GitHub</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-dbeaver-plain"></i>DBeaver</div>
              <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-supabase-plain"></i>Supabase</div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="text-white scroll-mt-35 h-screen">
        <div style={{ color: activeFg }} className="text-5xl font-bold ml-25 mt-25">
            Projects
        </div>
        <div className="flex flex-col items-center gap-[40px] mx-auto font-bold">
          <div style={{ background: activeFg }} className={"w-[80%] h-90 flex justify-between rounded-lg shadow-xl"}>
            <div className="">
              <div className="text-white text-4xl mt-[40px] mb-[10px] flex justify-center">Cougar Connect Volunteering Application</div>
              <div className="text-white text-3xl px-15 mb-[10px] flex justify-center">A full-stack application that fulfills the needs of a volunteering organization. It allows for account creation, email verification, event management, volunteer assignment based on availability, and participating history for volunteers</div>
              <div className="text-3xl flex flex-row flex-wrap justify-center">
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-react-original"></i>React</div>
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-javascript-plain"></i>JavaScript</div>
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-nodejs-plain"></i>Node.js</div>
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-express-original"></i>Express</div>
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-postgresql-plain"></i>PostgreSQL</div>
              </div>
              <a href="https://github.com/SamuelAlvarez690/4353-Project/tree/main" target="_blank" className="text-3xl flex items-center gap-[8px] w-[120px] px-[10px] mx-[40px] outline-[3px] border-white rounded-lg"><i className="devicon-github-original"></i>GitHub</a>
            </div>
            <img src="/Cougar_Connect_Application.png" className="rounded-tr-lg rounded-br-lg"></img>
          </div>

          <div style={{ background: activeFg }} className={"w-[80%] h-90 flex justify-between rounded-lg shadow-xl"}>
            <div className="flex flex-col justify-center">
                <div className="text-white text-4xl  mb-[10px] flex justify-center">Post Office Database</div>
                <div className="text-white text-3xl px-15 mb-[10px] flex justify-center">A database application that manages post office functions such as package tracking, customer data management, and sales reporting.</div>
                <div className="text-3xl flex flex-row flex-wrap justify-center">
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-html5-plain"></i>HTML</div>
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-css3-plain"></i>CSS</div>
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-javascript-plain"></i>JavaScript</div>
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-nodejs-plain"></i>Node.js</div>
                <div className="flex items-center gap-[8px] px-[10px] mb-[14px]"><i className="devicon-mysql-original"></i>SQL</div>
              </div>
              <a href="https://github.com/SamuelAlvarez690/ShipNGo" target="_blank" className="text-3xl flex items-center gap-[8px] w-[120px] px-[10px] mx-[40px] outline-[3px] border-white rounded-lg"><i className="devicon-github-original"></i>GitHub</a>
            </div>
            <img src="/ShipNGo_Application.png" className="rounded-tr-lg rounded-br-lg"></img>
          </div>
        </div>
      </section>

      <section id="contact" className="text-white scroll-mt-35 h-screen">
        <div style={{ color: activeFg }} className="text-5xl font-bold ml-25 mt-[400px]">
            Contact Me
        </div>
        
        <div style={{ background: activeFg }} className=" w-[30%] h-[450px] px-[15px] mx-auto flex flex-col justify-center rounded-lg shadow-xl">
          <div className="text-white text-3xl font-bold mx-auto mb-[15px]">Let me know your favorite color!</div>
          <form className="text-3xl w-full px-[25px]" action="https://formsubmit.co/samuelralvarez2004@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New message from portfolio"/>
            <input type="hidden" name="_captcha" value="True"/>
            <input type="hidden" name="_template" value="table"/>

            <input className="px-[10px] mx-auto mb-[25px] outline-[3px] border-white rounded-lg" type="text" name="name" placeholder="Your Name" required></input>
            <input className="px-[10px] mx-auto mb-[25px] outline-[3px] border-white rounded-lg" type="text" name="email" placeholder="Your Email" required></input>
            <textarea className="px-[10px] mx-auto mb-[25px] h-[150px] outline-[3px] border-white rounded-lg" name="message" placeholder="Your Message" required></textarea>
            <button style={{ background: activeBg }} className="mx-auto w-full rounded-lg hover:opacity-80" type="submit">Send</button>
          </form>
        </div>
      </section>

      <div style={{ background: activeFg }} className="text-white flex justify-between items-center h-14 px-20" >
        <div className="text-2xl">© 2026 Sam Alvarez</div>
        <div className="text-2xl">Good luck finding all the secret themes! (7 in total) </div>
        <div className="text-3xl flex gap-[14px] mt-3">
          <a href="https://github.com/SamuelAlvarez690" target="_blank"><i className="devicon-github-original"></i></a>
          <a href="https://www.linkedin.com/in/samuel-alvarez-4a9606240/" target="_blank"><i className="devicon-linkedin-plain"></i></a>
          <a href="mailto:samuelralvarez2004@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.33 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></a>
        </div>
      </div>
    </>
  );
}
