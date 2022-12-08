import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Jesse Kartabani", "<Front End Developer />"],
    loop: true,
    delaySpeed: 1000, // Time between words
  });

  return (
    <div>
      {/* Typewriter text followed by cursor */}
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="red" />
      </h1>
    </div>
  );
}

export default Hero;
