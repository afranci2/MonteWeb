import React from "react";
import Image from "next/image";
import MainButton from "../mainButton/MainButton";

const ChurchWindowInfo = ({ church }) => {
  return (
    <div className="w-32 h-32">
      <div className="flex">
        <Image src={church.images.main} alt="wef" width={100} height={100} />
        <div className="text">
          <h2>{church.name}</h2>
          <p>{church.description}</p>
        </div>
      </div>
      <MainButton />
    </div>
  );
};

export default ChurchWindowInfo;
