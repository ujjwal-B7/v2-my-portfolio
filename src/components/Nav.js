import React, { useState } from "react";
import Headroom from "react-headroom";

const Nav = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <Headroom>
      <nav
        className={`${
          scroll > 100
            ? "shadow-md bg-transparent backdrop-blur-sm"
            : "shadow-0 "
        } `}
      >
        <section className="max-w-screen-2xl mx-auto lg:px-16 px-4 h-20 flex items-center justify-between">
          <a
            className="font-semibold text-3xl highlighted-text"
            href="#home"
            rel="noreferror"
          >
            Ujjwal Basnet
          </a>
          <div>
            <ol className="md:flex hidden items-center gap-10 font-sf text-[1rem] title list-decimal">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="list-none border-[#64ffda] border-[1px]  rounded highlighted-text resume-link px-2 pt-2 pb-1">
                <a href="./cv/Ujjwal-Basnet-cv.pdf" download>
                  Download Resume
                </a>
              </li>
            </ol>
          </div>
          <div
            className="md:hidden hamburger cursor-pointer rounded"
            tabIndex="0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#64ffda"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
        </section>
      </nav>
    </Headroom>
  );
};

export default Nav;
