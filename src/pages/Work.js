import React from "react";

const projects = [
  {
    image: "./images/aaryans-fitness.jpg",
    name: "Aaryan's Fitness",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate a vero enim consectetur veniam. Neque rem laboriosam provident facilis.",
    techstack: ["React", "Tailwindcss"],
  },
  {
    image: "./images/demoTemplate.png",
    name: "Aaryan's Fitness",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate a vero enim consectetur veniam. Neque rem laboriosam provident facilis.",
    techstack: ["React", "Tailwindcss"],
  },
];

const Work = () => {
  return (
    <section className="mb-32 flex list-none justify-center items-center">
      <section className="xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full flex md:flex-row flex-col md:items-start items-center gap-10 lg:px-0 px-4">
        <div
          className="md:w-[60%] w-full md:px-0 space-y-4"
          data-aos="fade-right"
        >
          <div className="flex">
            <span className=" title-number">02.</span>
            <h2 className="mb-7 numbered-heading">Somethings I've built</h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Work;
