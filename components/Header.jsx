import React from "react";
import Image from "next/image";
import avatar from "../images/Download.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <div id="header" className="pt-32">
      <header>
        <div className="flex flex-col items-center justify-center w-screen">
          <h5>Hallo, ich bin</h5>
          <h1>Marko Kezic</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <div className="flex flex-col justify-around w-full p-12 lg:flex-row">
            <div>
              <div className="max-w-sm pb-20 text-6xl">
                Let's build something great.
              </div>
              <Link href="#services">
                <a className="px-5 py-2 text-lg font-bold text-gray-900 bg-gray-200 border-2 border-gray-900 rounded-md ">
                  Let's go
                </a>
              </Link>
            </div>
            <div>
              <Image src={avatar} alt="Marko_Kezic" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
