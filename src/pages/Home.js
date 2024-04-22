import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };
  const iconVariants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        staggerChildren: 2,
      },
    },
  };
  return (
    <>
      <section className="relative h-[calc(100vh-5rem)] flex justify-center items-center">
        <motion.div
          className="xl:w-[60%] md:w-[80%] xl:ml-0 sm:ml-10 sm:px-0 px-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            className="text-[1.2rem] highlighted-text"
          >
            Hi, my name is
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="pt-5 big-heading font-[600] title"
          >
            Ujjwal Basnet.
          </motion.h1>
          <motion.h3
            variants={textVariants}
            className="big-heading secondary-text text-7xl font-[600]"
          >
            I build things for the web.
          </motion.h3>
          <motion.p variants={textVariants} className="sm:w-[70%] mt-5 mb-9">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products
          </motion.p>
          <motion.button
            variants={textVariants}
            className="
          border-[#64ffda] border-[1px]  rounded highlighted-text resume-link px-10 pt-4 pb-2 
          "
          >
            Hire Me
          </motion.button>
        </motion.div>
        {/* social media links */}
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="md:block hidden fixed bottom-0 lg:left-14 left-10 space-y-6 social-media-icons"
        >
          <div className="icons">
            <a href="https://github.com/ujjwal-B7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/ujjwal.basnet.1257">
              <svg className="w-5" viewBox="0 0 128 128">
                <rect fill="none" x="4.83" y="4.83" rx="6.53" ry="6.53"></rect>
                <path
                  fill="#8892b0"
                  d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="icons">
            <a href="https://www.instagram.com/ujjwal_basnet7/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          <div className="icons">
            <a href="https://twitter.com/basnetujjwal98">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-twitter"
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/ujjwal-basnet-560893239/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <div className="ml-2 border-l-[#a8b2d1] border-l-2 h-24"></div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
