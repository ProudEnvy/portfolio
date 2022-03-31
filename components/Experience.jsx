import React from "react";
import dockerIcon from "../experienceImages/docker-icon.svg";
import firebaseIcon from "../experienceImages/firebase-icon.svg";
import graphqlIcon from "../experienceImages/graphql-icon.svg";
import javascriptIcon from "../experienceImages/javascript-icon.svg";
import pythonIcon from "../experienceImages/python-icon.svg";
import reactjsIcon from "../experienceImages/reactjs-icon.svg";
import tailwindcssIcon from "../experienceImages/tailwindcss-icon.svg";
import typescriptlangIcon from "../experienceImages/typescriptlang-icon.svg";
import nextIcon from "../images/flutter.svg";
import flutterIcon from "../images/next-js.svg";
import strapiIcon from "../images/strapi.svg";
import Image from "next/image";

const Experience = () => {
  return (
    <div id="experience" className="mt-32">
      <div className="pb-24 text-2xl text-center underline md:text-4xl underline-offset-2">
        Erfahrung mit anderen Techniken
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src={dockerIcon.src}
            width={dockerIcon.width}
            height={dockerIcon.height}
            alt={dockerIcon.src}
          />
        </div>
        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src={firebaseIcon.src}
            width={firebaseIcon.width}
            height={firebaseIcon.height}
            alt={firebaseIcon.src}
          />
        </div>

        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src={graphqlIcon.src}
            width={graphqlIcon.width}
            height={graphqlIcon.height}
            alt={graphqlIcon.src}
          />
        </div>

        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src={javascriptIcon.src}
            width={javascriptIcon.width}
            height={javascriptIcon.height}
            alt={javascriptIcon.src}
          />
        </div>

        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src={pythonIcon.src}
            width={pythonIcon.width}
            height={pythonIcon.height}
            alt={pythonIcon.src}
          />
        </div>

        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src={reactjsIcon.src}
            width={reactjsIcon.width}
            height={reactjsIcon.height}
            alt={reactjsIcon.src}
          />
        </div>

        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src={tailwindcssIcon.src}
            width={tailwindcssIcon.width}
            height={tailwindcssIcon.height}
            alt={tailwindcssIcon.src}
          />
        </div>

        <div className="flex items-center justify-center w-24 h-24">
          <Image
            src={typescriptlangIcon.src}
            width={typescriptlangIcon.width}
            height={typescriptlangIcon.height}
            alt={typescriptlangIcon.src}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
