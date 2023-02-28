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
    <div className="w-5/6 m-auto cursor-pointer">
      {click && (
        <div className="border-2  overflow-auto shadow-2xl rounded-lg bg-white/100 w-11/12 h-5/6 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-8/12">
          <div className="flex space-between">
            <div className=" w-10/12 py-12 m-auto lg:flex md:py-14 md:px-16 md:ml-0 md:w-auto space-between content text-black">
              {" "}
<p>23r2r23r23t3t3</p>
            </div>
          </div>
        </div>
      )}
      <div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        onClick={clickHandler}
        className={`cursor-pointer overflow-hidden ${
          showDetails ? "" : ""
        }`}
      >
        <div className="w-2 rounded-lg overflow-hidden">
          <img src={props.image} alt="dfsf" />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-2xl">{props.heading}</p>
        <p>{props.subheading}</p>
      </div>
    </div>
  );
};

export default LideresTab;
