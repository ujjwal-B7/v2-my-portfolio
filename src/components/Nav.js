import React, { useState } from "react";
import Headroom from "react-headroom";
import { motion } from "framer-motion";
const Nav = () => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);

  const textVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <Headroom>
      <nav
        className={`${
          scroll > 100
            ? "shadow-md bg-transparent backdrop-blur-xl"
            : "shadow-0 "
        } `}
      >
        <motion.section
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="max-w-screen-2xl mx-auto lg:px-16 px-4 h-20 flex items-center justify-between"
        >
          <motion.a
            variants={textVariants}
            className="font-semibold text-3xl highlighted-text"
            href="#home"
            rel="noreferror"
          >
            Ujjwal Basnet
          </motion.a>
          <motion.div
            variants={textVariants}
            className="flex items-center text-[15px]"
          >
            <ol className="md:flex hidden items-center gap-7 font-sf  title nav-links">
              <motion.li variants={textVariants}>
                <a href="#about">
                  <span>01. </span>
                  About
                </a>
              </motion.li>
              <motion.li variants={textVariants}>
                <a href="#work">
                  <span>02. </span>
                  Work
                </a>
              </motion.li>
              <motion.li variants={textVariants}>
                <a href="#skills">
                  <span>03. </span>
                  Skills
                </a>
              </motion.li>
              <motion.li variants={textVariants}>
                <a href="#contact">
                  <span>04. </span>
                  Contact
                </a>
              </motion.li>
            </ol>
            <motion.li
              variants={textVariants}
              className="ml-10 list-none border-[#64ffda] border-[1px]  rounded highlighted-text  resume-link px-4 pt-2 pb-1"
            >
              <a className="font-sf " href="./cv/Ujjwal-Basnet-cv.pdf" download>
                Resume
              </a>
            </motion.li>
          </motion.div>
          {/* <div
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
          </div> */}
        </motion.section>
      </nav>
    </Headroom>
  );
};

export default Nav;
