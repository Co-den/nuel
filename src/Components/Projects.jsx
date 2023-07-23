import React from "react";
import img1 from '../Assets/projects/IMG-20230621-WA0050.jpg';
import img2 from "../Assets/projects/IMG-20230621-WA0046.jpg";
import img3 from "../Assets/projects/IMG-20230621-WA0049.jpg";

const Projects = () => {
  const projects = [
    {
      title: "TRIBAL",
      description:
        "A drawing of a boy from mursi tribe in Ethopia.",
      photo: img1,
    },
    {
      title: "STRANGER-THING",
      description:
        "An art picture of Max Mayfield from stranger-things.",
      photo: img2,
    },
    {
      title: "AFRICA",
      description:
        "An art painting portraying an african woman.",
      photo: img3,
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-lime-500 font-semibold text-3xl mt-16">
        Featured works:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on different projects over the course of being an artist,
        here are a few of my live, real-world art projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} className="h-40 w-56" />
              </a>
              <h3 className="text-lime-500 font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                
                <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
