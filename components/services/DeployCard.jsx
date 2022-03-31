import React from "react";
import Image from "next/image";

const DeployCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center max-w-xs my-5 transition-all duration-200 bg-gray-800 bg-opacity-50 border-2 border-gray-700 rounded-md hover:-translate-y-2 hover:shadow-md backdrop-blur backdrop-opacity-50 lg:w-96">
      <div className="p-5 text-3xl text-center">{data.title}</div>
      <div className="m-3">
        {data.logo ? (
          <div className="flex flex-row gap-3 w-28 h-28">
            {data.logo.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                height={logo.height}
                width={logo.width}
              />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="p-5 pb-16 text-lg">{data.description}</div>
    </div>
  );
};

export default DeployCard;
