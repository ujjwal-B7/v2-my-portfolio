import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
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

  return (
    <>
      <section
        id="home"
        className="relative h-[calc(100vh-5rem)] flex justify-center items-center"
      >
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
        <div className="md:block hidden">
          <SocialLinks />
        </div>
      </section>
    </>
  );
};

export default Home;
