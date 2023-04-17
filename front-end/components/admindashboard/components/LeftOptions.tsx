"use client";
import React, { useState } from "react";

const LeftOptions = ({ clickHandler }) => {
  const [option, setOption] = useState("");
  return (
    <div>
      {" "}
      <div className="h-full w-full bg-gray-100">
        <div
          onClick={() => {
            clickHandler("Events");
            setOption("Events");
          }}
          className={`${
            option == "Events" ? "bg-gray-100" : "bg-white"
          } w-full cursor-pointer border-b-2 hover:bg-gray-100`}
        >
          <p className="py-8 m-auto text-center ">Events</p>
        </div>
        <div
          onClick={() => {
            clickHandler("Churches");
            setOption("Churches");
          }}
          className={`${
            option == "Churches" ? "bg-gray-100" : "bg-white"
          } w-full cursor-pointer border-b-2 hover:bg-gray-100`}
        >
          <p className="py-8 m-auto text-center ">Cg</p>
        </div>
        <div
          onClick={() => {
            clickHandler("Other");
            setOption("Other");
          }}
          className={`${
            option == "Other" ? "bg-gray-100" : "bg-white"
          } w-full cursor-pointer border-b-2 hover:bg-gray-100`}
        >
          <p className="py-8 m-auto text-center ">Cg</p>
        </div>
      </div>
    </div>
  );
};

export default LeftOptions;
