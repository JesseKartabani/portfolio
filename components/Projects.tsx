import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    { id: 1, name: "Netflix Clone", description: "Welcome to learning React!" },
    {
      id: 2,
      name: "Uber Clone",
      description: "You can install React from npm.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="subHeading">Projects</h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 "
          >
            {/* Image of project */}
            <motion.img
              initial={{ opacity: 1, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://i.imgur.com/mmJnoiI.jpg"
              alt="Project Demo"
            />

            {/* Project name */}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl sm:text-4xl font-semibold text-center">
                {project.name}
              </h4>

              {/* Project description */}
              <p className="text-sm sm:text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
