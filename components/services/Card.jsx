import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col items-center max-w-xs my-5 transition-all duration-200 bg-gray-800 bg-opacity-50 border-2 border-gray-700 rounded-md hover:-translate-y-2 hover:shadow-md backdrop-blur backdrop-opacity-50 lg:w-96">
      <div className="p-5 text-3xl text-center">{data.title}</div>
      <div className="m-3 w-14 h-14">
        {data.logo ? (
            <Image
              src={data.logo.src}
              height={data.logo.height}
              width={data.logo.width}
              alt={data.logo.src}
            />
          ) : (<div></div>)}
      </div>
      <div className="p-5 pb-32 text-lg">{data.description}</div>
      <div className="absolute p-5 mt-3 text-sm bottom-5">{data.popular}</div>
      <a
        href={data.more}
        target="_blank"
        rel="npppener noreferrer"
        className="absolute text-xs underline underline-offset-1 right-2 bottom-2"
      >
        Mehr erfahren...
      </a>
    </div>
  );
};

export default Card;
