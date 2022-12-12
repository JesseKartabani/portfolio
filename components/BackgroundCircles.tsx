import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 6,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="rounded-full  border border-[#333333] h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] absolute mt-52 animate-ping" />
      <div className="rounded-full  border border-[#333333] h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] absolute mt-52" />
      <div className="rounded-full  border border-[#333333]  h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] absolute mt-52" />
      <div className="rounded-full  border border-[#F7AB0A] opacity-20 h-[325px] w-[325px] sm:h-[650px] sm:w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full  border border-[#333333] h-[400px] w-[400px] sm:h-[800px] sm:w-[800px] absolute mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
