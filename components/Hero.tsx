import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  // Makes text inside words look like its being typed
  const [text, count] = useTypewriter({
    words: ["Jesse Kartabani", "<Front End Developer />"],
    loop: true, // animation never ends
    delaySpeed: 1000, // Time between words
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="p-auto">
        <BackgroundCircles />
      </div>

      {/* Own photo 
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://i.imgur.com/mmJnoiI.jpg"
        alt=""
      />
      */}

      <div className="z-20">
        <h2
          className=" ml-3 text-sm uppercase text-gray-500 pb-2 tracking-[4px]
        sm:tracking-[15px]"
        >
          Front End Developer
        </h2>

        {/* Typewriter text followed by cursor */}
        <h1 className="text-2xl sm:text-6xl font-semibold px-10">
          <span className="ml-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        {/* Nav buttons */}
        <div className="pt-5 space-x-2">
          <Link href="#about">
            <button>About</button>
          </Link>
          <Link href="#projects">
            <button>Projects</button>
          </Link>
          {/* 
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
