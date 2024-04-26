import React from "react";
import { useState } from "react";
const projects = [
  {
    link: "https://aaryans-fitness.netlify.app/",
    image: "./images/aaryans-fitness.jpg",
    name: "Aaryan's Fitness",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate a vero enim consectetur veniam. Neque rem laboriosam provident facilis.",
    techstack: ["React", "Tailwindcss"],
  },
  {
    link: "https://demotemplatee.netlify.app/",
    image: "./images/demotemplate.jpg",
    name: "Business Landing Page",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate a vero enim consectetur veniam. Neque rem laboriosam provident facilis.",
    techstack: ["React", "Tailwindcss"],
  },
];

const Work = () => {
  const [show, setShow] = useState(false);

  function resetNavOnResize() {
    if (window.innerWidth >= 768) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  window.addEventListener("resize", resetNavOnResize);
  return (
    <section className="lg:px-[150px] md:px-[100px] px-4">
      <section className="max-w-[980px] mx-auto">
        <div className="flex mb-10">
          <span className=" title-number">02.</span>
          <h2 className="mb-7 numbered-heading">Somethings I've built</h2>
        </div>
        <div className="relative px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-div rounded relative lg:mb-32 md:mb-24 mb-16 flex  section bg-cover items-center bg-center    
              "
              style={{
                backgroundImage: show ? `url(${project.image})` : "none",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={project.link}
                className="md:block lg:mt-0 mt-10 hidden relative lg:w-[60%] w-[70%] lg:aspect-[5/3.4] md:aspect-[5/4]  md:opacity-50 md:hover:opacity-100 skills-transition"
              >
                <img
                  className="relative w-full rounded h-full object-cover"
                  src={project.image}
                  alt="project_image"
                />
              </a>
              <div
                className={`md:bg-transparent rounded bg-[#0a192f]/90 md:shadow-none shadow-md  md:absolute  md:pl-0 p-4 details lg:w-[52%] md:w-[60%] z-50 ${
                  index % 2 === 0 ? "md:left-[55%] left-0" : "md:left-[0%]"
                }`}
              >
                <h3 className="highlighted-text text-lg">Featured Project</h3>
                <h1 className="title text-[28px] py-3">
                  <a target="_blank" rel="noreferrer" href={project.link}>
                    {project.name}
                  </a>
                </h1>
                <div className="md:shadow-md md:bg-[#112240] rounded-md skills-text  md:text-[20px] text-[17px] md:p-4">
                  {project.description}
                </div>
                <div className="project-text mt-3 text md:text-[20px] text-[17px]">
                  <ul className="flex gap-4 flex-wrap">
                    {project.techstack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <ul className="project-card">
          <li className="project-li">
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="aaryans-fitness.netlify.app"
                  >Aaryans fitness</a>
                </h3>
                <div className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tempora eos sequi quos voluptate consequuntur rerum similique, distinctio expedita adipisci!</div>
                <ul class="project-tech-list"><li>VS Code</li><li>Sublime Text</li><li>Atom</li><li>iTerm2</li><li>Hyper</li></ul>
              </div>
            </div>
<div className="project-image">
  <a href="/aaryans-fitness.netlify.app"></a>
  <div>
    <img src="./images/demotemplate.jpg" alt="" />
  </div>
</div>
          </li>
        </ul> */}
      </section>
    </section>
  );
};

export default Work;
