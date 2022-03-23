import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="fixed px-5 py-2 bg-white border border-transparent border-gray-200 rounded-2xl bottom-14 bg-blackbg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10">
      <div className="flex gap-3">
        <Link href="#about">
          <a>
            <div className="px-3 border-2 rounded-md bg-bgVariant">A</div>
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
            <div className="px-3 border-2 rounded-md bg-bgVariant">C</div>
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
