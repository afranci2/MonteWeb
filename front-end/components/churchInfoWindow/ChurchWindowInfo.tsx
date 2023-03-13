import React from "react";
import Image from "next/image";
import MainButton from "../mainButton/MainButton";

const ChurchWindowInfo = ({ church }) => {
  return (
    <div className="w-[100px] h-32 overflow-auto">
      <div className="overflow-auto flex flex-col gap-4 p-4">
        <div className="image w-full h-auto object-cover">
          <Image src={church.images.main} alt="wef" fill />
        </div>
        <div className="text">
          <p className="font-bold text-md">{church.name}</p>
          <p className="text-xs">{church.description}</p>
        </div>
      </div>
      <MainButton />
    </div>
  );
};

export default ChurchWindowInfo;
