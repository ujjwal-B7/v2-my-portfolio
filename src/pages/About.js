import React from "react";
const About = () => {
  return (
    <section
      id="about"
      className="mb-32 flex list-none justify-center items-center"
    >
      <section
        className="xl:w-[60%] lg:w-[70%] md:w-[80%] w-full flex md:flex-row flex-col md:items-start items-center gap-10 lg:px-0 px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="md:w-[60%] w-full md:px-0 space-y-4">
          <div className="flex">
            <span className="title-number">01.</span>
            <h2 className="mb-7 numbered-heading">About Me</h2>
          </div>
          <p>
            Hello! My name is{" "}
            <span className="highlighted-text">Ujjwal Basnet</span> . I am now
            pursuing a bachelor's degree in computer applications at DWIT.
            Despite being in the middle of my academic journey, my enthusiasm
            for web development motivates me to explore and contribute in
            significant ways. I'm enthused about the prospect of putting my
            theoretical background into practice and eager to take up new
            learning possibilities. Let's connect and discuss how my dedication
            and fresh perspective can bring value to your projects!
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skills grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 lg:gap-0 gap-x-4 w-full lg:text-[15px] text-[13px]">
            <li>Html</li>
            <li>Css</li>
            <li>Tailwind Css</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>Git/GitHub</li>
          </ul>
        </div>
        <div className="md:mt-16 profile-section relative lg:h-72 h-60">
          <div className="profile lg:w-72 w-60">
            <img
              className="rounded w-full lg:h-72 h-60 object-cover "
              src="./images/cropprofilepic.png"
              alt="profile-pic"
            />
          </div>
          <div className="rect -z-10 top-5 left-4 absolute border-2 lg:w-72 w-60 aspect-[5/4.9] rounded border-[##64ffda]"></div>
        </div>
      </section>
    </section>
  );
};

export default About;
