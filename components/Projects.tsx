import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../constants/projects.js";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      // Fades the whole component in
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
        {/* Maps through all projects */}
        {projects.map((project) => (
          <div
            data-testid="project-card"
            key={project.id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-10 md:p-44 "
          >
            {/* Image of project */}
            <motion.div
              // Makes project image animate in from the top of the screen
              initial={{ opacity: 1, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                data-testid="project-image"
                className="w-auto h-auto"
                src={project.image}
                alt="Project Demo"
                width={700}
                height={700}
                priority={true}
              />
            </motion.div>
            {/* Project name */}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl sm:text-4xl font-semibold text-center">
                {project.name}
              </h4>

              {/* Project description */}
              <p className="hidden sm:block text-xs sm:text-lg text-center">
                {project.description}
              </p>

              {/* Nav buttons */}
              <div className="flex pt-5 space-x-6 justify-center">
                <Link
                  data-testid="code-button"
                  href={project.github}
                  target="_blank"
                >
                  <button>{`<Code />`}</button>
                </Link>
                {project.website != "" && (
                  <Link
                    data-testid="website-button"
                    href={project.website}
                    target="_blank"
                  >
                    <button>Website</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical background stripe with a color gradient */}
      <div className="w-full absolute top-[30%] sm:h-[500px] h-[150px] bg-gradient-to-b from-[#F7AB0A]/40 via-[#D4920E]/40 to-[#B2730F]/40 left-0 -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
