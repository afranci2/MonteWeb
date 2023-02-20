import React from "react";
import Tab from "../Tab";

const LideresTab = (props) => {
  return (
    <div className="w-5/6 m-auto">
      <Tab className="flex flex-col ">      
        <img src={props.image} alt="dfsf" />
      </Tab>
      <div className="flex flex-col">
          <p className="font-bold text-2xl">{props.heading}</p>
          <p>{props.subheading}</p>
        </div>
    </div>
  );
};

export default LideresTab;
