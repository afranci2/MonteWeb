"use client";
import React, { useState } from "react";
import Tab from "../Tab";
import { AiFillCloseCircle } from "react-icons/ai";

const LideresTab = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  function clickHandler() {
    setClick(!click);

    console.log("het");
  }

  return (
    <div className="h-72 m-auto cursor-pointer">
      <div
        className="max-h-100px] overflow-hidden"
      >
        <div className="h-full object-cover">
          <img
            className="object-cover h-full w-auto"
            src={props.image}
            alt="dfsf"
          />
        </div>
      </div>
      <div className="bg-red-500 py-4 flex flex-col">
        <p className="font-bold text-2xl">{props.heading}</p>
        <p>{props.subheading}</p>
      </div>
    </div>
  );
};

export default LideresTab;
