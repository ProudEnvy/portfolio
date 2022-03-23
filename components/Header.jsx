import React from "react";
import Image from 'next/image';
import avatar from '../images/Download.jpg'
import Link from "next/link";

const Header = () => {
  return (
    <div id="header" className="mt-32 h-96">
      <header>
        <div className="flex flex-col justify-center items-center">
          <h5>Hallo, ich bin</h5>
          <h1>Marko Kezic</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <div>
            <Image src={avatar} alt="Marko_Kezic" />
          </div>
          <Link href="#contact">
            test
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
