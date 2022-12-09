import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      name: "Netflix Clone",
      description:
        "Clone of the popular streaming service Netflix. It has been built using React and allows users to browse and watch movies and TV shows. The project uses TMDB API to fetch data about the available movies and shows.",
      website: "https://netflix-clone-528b0.web.app/",
      github: "https://github.com/JesseKartabani/netflix-clone",
      image: "https://i.imgur.com/mmJnoiI.jpg",
    },

    {
      id: 2,
      name: "Uber Clone",
      description:
        "This Uber clone uses several external APIs to provide its functionality, including the Google Places, Google Directions, and Google Distance Matrix APIs. These APIs allow the project to provide features such as searching for locations, tracking the progress of rides, and calculating estimated ride distances and times. In addition to these APIs, the project also uses the tailwind CSS framework and the Redux state management library. ",
      website: "",
      github: "https://github.com/JesseKartabani/Uber-clone",
      image: "https://i.imgur.com/mmJnoiI.jpg",
    },

    {
      id: 3,
      name: "NBA Stats",
      description:
        "Cross-platform mobile and web app for tracking and displaying NBA statistics. It has been built using React Native, and uses an external API to fetch data about NBA games and players.",
      website: "https://nba-stats-3da74.web.app/",
      github: "https://github.com/JesseKartabani/nba-stats",
      image: "https://i.imgur.com/mmJnoiI.jpg",
    },

    {
      id: 4,
      name: "Clash Of Clans Stats",
      description:
        "Cross-platform mobile and web app for tracking and displaying statistics for the popular mobile game Clash of Clans. It has been built using React Native. The app uses its own backend Express server to call the Clash of Clans API and fetch data about players, clans, and other game information. It then uses the React Query library to manage and cache this data, providing optimized performance. The app displays the data in a user-friendly format on both mobile and web platforms",
      website: "",
      github: "https://github.com/JesseKartabani/clash-of-clans-stats",
      image: "https://i.imgur.com/mmJnoiI.jpg",
    },

    {
      id: 5,
      name: "PokeDex",
      description:
        "Digital encyclopedia of Pokemon characters. It uses the PokeApi to fetch data about different Pokemon, including their statistics, and displays this information in an attractive and easy-to-use format with the help of animate.css. The project includes a search function to help users quickly find the Pokemon they are looking for. Built using React",
      website: "https://pokedex-c348e.web.app/",
      github: "https://github.com/JesseKartabani/Pokedex",
      image: "https://i.imgur.com/mmJnoiI.jpg",
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
              src={project.image}
              alt="Project Demo"
            />

            {/* Project name */}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl sm:text-4xl font-semibold text-center">
                {project.name}
              </h4>

              {/* Project description */}
              <p className="text-sm sm:text-lg text-center">
                {project.description}
              </p>

              {/* Nav buttons */}
              <div className="flex pt-5 space-x-6 justify-center">
                <Link href={project.github} target="_blank">
                  <button className="projectButton">{`<Code />`}</button>
                </Link>
                {project.website != "" && (
                  <Link href={project.website} target="_blank">
                    <button className="projectButton">Website</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
