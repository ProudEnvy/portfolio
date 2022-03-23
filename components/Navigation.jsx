import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="fixed z-50 px-5 py-2 bg-white border border-transparent border-gray-200 rounded-2xl bottom-14 bg-blackbg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10">
      <div className="flex gap-3">
        <Link href="#header">
          <a>
            <div className="p-2 text-white border-2 rounded-md bg-bgVariant">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" stroke-white fill-white"
              >
                <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
                <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
              </svg>
            </div>
          </a>
        </Link>
        <Link href="#about">
          <a>
            <div className="p-2 text-white border-2 rounded-md bg-bgVariant">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" stroke-white fill-white"
              >
                <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
                <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
              </svg>
            </div>
          </a>
        </Link>
        <Link href="#services">
          <a>
            <div className="px-3 border-2 rounded-md bg-bgVariant">S</div>
          </a>
        </Link>
        <Link href="#portfolio">
          <a>
            <div className="px-3 border-2 rounded-md bg-bgVariant">P</div>
          </a>
        </Link>
        <Link href="#experience">
          <a>
            <div className="px-3 border-2 rounded-md bg-bgVariant">E </div>
          </a>
        </Link>
        <Link href="#testimonials">
          <a href="">
            <div className="px-3 border-2 rounded-md bg-bgVariant">T</div>
          </a>
        </Link>
        <Link href="#contact">
          <a href="">
            <div className="p-2 border-2 rounded-md bg-bgVariant">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </a>
        </Link>
        <Link href="#footer">
          <a href="">
            <div className="px-3 border-2 rounded-md bg-bgVariant">F</div>
          </a>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Navigation;
