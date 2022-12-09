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
        className="md:mb-0 flex-shrink-0 h-20 w-20 mt-10 rounded-full object-cover
        sm:w-56 sm:h-56 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
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
        <h4 className="text-1xl sm:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-xs sm:text-base">
          Hi there! My name is Jesse and I am a front-end developer with a
          passion for creating intuitive and engaging user experiences. I have a
          strong background in HTML, CSS, and JavaScript, as well as experience
          with popular front-end frameworks such as React.
          <br />
          <br />
          As a highly organized and detail-oriented individual, I take pride in
          ensuring that my projects are delivered on time and to the highest
          standards. I am also a strong problem solver and enjoy finding
          creative solutions to complex issues.
          <br />
          <br />I am excited about the potential of the web and am constantly
          seeking out new technologies and techniques to improve my skills and
          stay at the forefront of the industry. If you have a project that you
          think would be a good fit for my skills, please do not hesitate to get
          in touch. I would love the opportunity to discuss it with you further.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
