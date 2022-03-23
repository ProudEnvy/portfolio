import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col items-center max-w-xs my-5 transition-all duration-200 bg-gray-800 rounded-md hover:-translate-y-2 hover:shadow-md bg-opacity-30 backdrop-blur backdrop-opacity-100 lg:w-96">
      <div className="p-5 text-3xl text-center">{data.title}</div>
      <div className="m-3 w-14 h-14">
        <Image
          src={data.logo.src}
          height={data.logo.height}
          width={data.logo.width}
        />
      </div>
      <div className="p-5 text-lg">{data.description}</div>
      <div className="p-5 mt-3 text-sm">{data.popular}</div>
    </div>
  );
};

export default Card;
