import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Jesse Kartabani", "<Front End Developer />"],
    loop: true,
    delaySpeed: 1000, // Time between words
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* Own photo 
      <img
        className="relative rounded-fill h-32 w-32 mx-auto object-cover"
        src=""
        alt=""
      /> */}

      {/* Typewriter text followed by cursor */}
      <div>
        <h2 className=" ml-3 text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Front End Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="ml-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
