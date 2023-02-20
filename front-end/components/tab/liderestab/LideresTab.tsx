import React from "react";
import Tab from "../Tab";
import Image from "next/image";

const LideresTab = (props) => {
  return (
    <div className="bg-red-400 p-8">
      <Tab className="flex flex-col">      
        <img src={props.image} alt="" />
      </Tab>
      <div className="flex flex-col">
          <p className="font-bold text-2xl">{props.heading}</p>
          <p>{props.subheading}</p>
        </div>
    </div>
  );
};

export default LideresTab;
