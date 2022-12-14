import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  // Framer animation settings
  const variants = {
    hidden: { opacity: 0, scale: 0.5, x: -500 },
    visible: { opacity: 1, scale: 1, x: 0 },
    hovering: { scale: 1.2, transition: { duration: 0.2 } },
  };
  return (
    <header className="sticky top-0 p-5 flex  justify-between max-w-7xl mx-auto z-20 items-center">
      <div className="flex flex-row items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
          whileHover="hovering"
          variants={variants}
        >
          {/* Social media icons */}
          <SocialIcon
            target="_blank"
            fgColor="#9CA3AF"
            bgColor="transparent"
            url="https://github.com/JesseKartabani"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
          whileHover="hovering"
          variants={variants}
        >
          <SocialIcon
            target="_blank"
            fgColor="#9CA3AF"
            bgColor="transparent"
            url="https://www.linkedin.com/in/jesse-kartabani/"
          />
        </motion.div>
      </div>
      <Link href="#contact">
        <motion.div
          // Using a different inital x value because this div is coming in
          // from the right side of screen instead of the left
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate="visible"
          transition={{ duration: 1.5 }}
          whileHover="hovering"
          variants={variants}
          className="flex flex-row items-center text-grey-300 pr-2 py-2"
        >
          {/* Contact Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 stroke-gray-400 fill-transparent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ml-1">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
