import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100  opacity-40
    transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.imgur.com/mmJnoiI.jpg"
        alt="Company logo"
      />

      <div className="px-0 md:px-10">
        {/* Job role */}
        <h4 className="text-2xl sm:text-4xl font-light">CEO</h4>

        {/* Company worked for */}
        <p className="font-bold text-1xl sm:text-2xl mt-1">Netlfix</p>

        {/* Tech stack used at job (their logos) */}
        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
            src="https://i.imgur.com/mmJnoiI.jpg"
            alt="Tech logo"
          />
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
            src="https://i.imgur.com/mmJnoiI.jpg"
            alt="Tech logo"
          />
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
            src="https://i.imgur.com/mmJnoiI.jpg"
            alt="Tech logo"
          />
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
            src="https://i.imgur.com/mmJnoiI.jpg"
            alt="Tech logo"
          />
        </div>

        {/* Starting and ending dates worked */}
        <p className="uppercase py-5 text-gray-300 text-sm sm:text-base">
          Started work... - Ended...
        </p>

        {/* Summary points on what you did/acheived at the job */}
        <ul className="list-disc space-y-4 ml-5 text-base sm:text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
