import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    // Up arrow svg that returns user to top of the site (the hero)
    <Link data-testid="hero-link" href="#hero">
      <footer
        data-testid="footer"
        className="sticky bottom-5 w-full cursor-pointer"
      >
        <div className="flex items-center justify-center">
          <svg
            data-testid="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </div>
      </footer>
    </Link>
  );
}

export default Footer;
