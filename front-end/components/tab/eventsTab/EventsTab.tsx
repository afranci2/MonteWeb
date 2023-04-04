"use client";
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const something =
  "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/Images/Baptium/119045738_4418187221586712_7673039802355621537_n.jpg";
import "../sideTab/ChurchMainTab.css";

const EventsTab = ({ info, props }) => {
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
    <div className="relative">
      {click && (
        <div className="border-2 relative overflow-auto shadow-2xl rounded-lg bg-white w-screen h-5/6 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-8/12">
        <div className="flex space-between">
            <div className="button  right-0 p-8 z-50 fixed top-0">
              <AiFillCloseCircle
                color={"000"}
                size={27}
                onClick={clickHandler}
              />
            </div>
          </div>
        </div>
      )}
      <div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        onClick={clickHandler}
        className="w-20"
      >
        {" "}
        {click && (
          <div className="border-2  overflow-auto shadow-2xl rounded-lg bg-white/100 w-11/12 h-5/6 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-8/12">
            <div className="flex space-between"></div>
          </div>
        )}
        <div className=" overflow-hidden relative rounded-lg bg-white">
          <div className="absolute gradient w-full h-full"></div>
          <Image
            className="object-cover h-full w-full overflow-hidden"
            src={something}
            alt="image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="z-40 relative text-black bottom-0 py-4">
          {info ? (
            <p>
              {info.datesAndTimes[0].date} -{" "}
              {info.datesAndTimes[info.datesAndTimes.length - 1].date}
            </p>
          ) : null}

          <p className="text-xl font-semibold">{info.name}</p>
          <p>{info.location}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsTab;
