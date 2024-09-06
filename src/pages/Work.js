import React from "react";
import { useState } from "react";
const projects = [
  {
    link: "https://marketplace.visualstudio.com/items?itemName=CoffeeDark.coffee-dark",
    image: "./images/vscode-theme-marketplace.jpg",
    name: "Coffee Dark",
    description: `Published a minimal, dark theme for VS Code, with smooth contrasts and a focus on readability. Available on <a href="https://marketplace.visualstudio.com/items?itemName=CoffeeDark.coffee-dark" target="_blank" class="highlighted-text hover:underline">Visual Studio Marketplace</a>, providing a distraction-free coding experience.`,
    techstack: [""],
  },
  {
    link: "https://crypto-template-beta.vercel.app/",
    image: "./images/crypto.jpg",
    name: "Crypto Template",
    description:
      "Designed a sleek cryptocurrency landing page with a dark blue theme, featuring an intuitive layout and clean design. Optimized for responsiveness across all devices to ensure a seamless user experience.",
    techstack: ["Nextjs", "Tailwindcss", "Shadcn ui"],
  },
  {
    link: "https://education-templatee.netlify.app/",
    image: "./images/schooltemplate.jpg",
    name: "School Website Template",
    description:
      "Developed a modern school website template with a light theme, featuring user-friendly navigation and professional design. Ensured responsiveness across all devices for optimal accessibility and experience.",
    techstack: ["React", "Tailwindcss"],
  },
  // {
  //   link: "https://ujjwalbasnet.vercel.app/",
  //   image: "./images/aaryans-fitness.jpg",
  //   name: "Another Portfolio Design",
  //   description:
  //     "Crafted a vibrant gym website template with fee, gallery,classes and map sections, ensuring seamless responsiveness for optimal user experience.",
  //   techstack: ["React", "Tailwindcss"],
  // },
  // {
  //   link: "https://ideagennepal.netlify.app/",
  //   image: "./images/ideagen.jpg",
  //   name: "Ideagen Nepal",
  //   description:
  //     "Built a responsive, modern website for Ideagen with comprehensive service sections, interactive portfolios, team profiles, and optimized user experience.",
  //   techstack: ["React", "Tailwindcss"],
  // },
  {
    link: "https://aaryans-fitness.netlify.app/",
    image: "./images/aaryans-fitness.jpg",
    name: "Aaryan's Fitness",
    description:
      "Crafted a vibrant gym website template with fee, gallery,classes and map sections, ensuring seamless responsiveness for optimal user experience.",
    techstack: ["React", "Tailwindcss"],
  },
  // {
  //   link: "https://demotemplatee.netlify.app/",
  //   image: "./images/demotemplate.jpg",
  //   name: "Business Landing Page",
  //   description:
  //     "Designed a sophisticated business landing page, showcasing static designs with elegance and professionalism to highlight your portfolio effectively.",
  //   techstack: ["React", "Tailwindcss"],
  // },
];

const otherProjects = [
  {
    link: "https://github.com/ujjwal-B7/Netflix-cinema.git",
    title: "Netflix Clone",
    description:
      "A streaming app using Next.js, TypeScript, and the MovieDB API, offering a sleek interface and dynamic content.",
    technologies: [
      "NextJs",
      "TailwindCss",
      "Typescript",
      "Mongodb",
      "MovieDB_Api",
    ],
  },

  {
    link: "https://github.com/ujjwal-B7/discord-clone.git",
    title: "Discord Clone",
    description:
      "A real-time chat and video platform built with Next.js, Socket.io, TypeScript, and LiveKit for seamless communication.",
    technologies: [
      "NextJs",
      "TailwindCss",
      "React-Query",
      "Typescript",
      "Socket.io",
      "LiveKit",
      "Mysql",
      "prisma",
    ],
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
    <section id="work" className="lg:px-[150px] md:px-[100px] px-4">
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
                className={`md:bg-transparent rounded bg-[#0a192f]/[88%]  md:shadow-none shadow-custom  md:absolute  md:pl-0 p-4 details lg:w-[52%] md:w-[60%] z-50 ${
                  index % 2 === 0 ? "md:left-[55%] left-0" : "md:left-[0%]"
                }`}
              >
                <h3 className="highlighted-text font-sf text-[14px] font-medium">
                  Featured Project
                </h3>
                <h1 className="title text-[28px] pt-3 md:pb-3 pb-5">
                  <a target="_blank" rel="noreferrer" href={project.link}>
                    {project.name}
                  </a>
                </h1>
                <div
                  className="md:shadow-md md:bg-[#112240] rounded-md skills-text  md:text-[20px] text-[17px] md:p-4"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></div>
                {/* <div className="md:shadow-md md:bg-[#112240] rounded-md skills-text  md:text-[20px] text-[17px] md:p-4">
                  {project.description}
                </div> */}
                <div className="project-text md:mt-3 mt-5 text md:text-[20px] text-[17px]">
                  <ul className="flex gap-4 flex-wrap ">
                    {project.techstack.map((tech, index) => (
                      <li className="font-sf text-[14px]" key={index}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* other projects */}

        <div className="pt-20">
          <h2
            className="noteworthy-projects text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Other Noteworthy Projects
          </h2>

          <div
            className="flex sm:flex-row flex-col sm:justify-center items-center sm:items-start gap-7 mt-14 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="max-w-[22rem] rounded shadow-custom h-80 p-6 otherProjectsCard"
              >
                <div className="flex justify-end">
                  {/* <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-folder"
                    >
                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </span> */}
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="mt-6 flex flex-col">
                  <h3 className="text-[22px] ">{project.title}</h3>
                  <p className="text-[17px] mt-3">{project.description}</p>
                  <div className="text-[12px] gap-2 flex flex-wrap mt-14">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Work;
