import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
     max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="subHeading">About</h3>

      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src="https://i.imgur.com/mmJnoiI.jpg"
      />

      {/* About me info */}
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque
          vitae perferendis unde dolore delectus, magnam error impedit obcaecati
          dolorem, sequi non officiis? Amet accusamus tempora dolorum excepturi
          similique tenetur.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
