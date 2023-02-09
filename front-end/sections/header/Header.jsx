"use client"

import React from "react";
import Button from "../../components/mainButton/MainButton";
import Video from "../video/Video";

function Header(props) {
  return (
    <div className="overflow-hidden wrapper relative flex justify-center items-center w-screen h-screen z-40">
      <div
        className={`${
          props.classChangeText
            ? `${props.classChangeText}`
            : "w-11/12 z-50 absolute text-center justify-center m-auto md:w-1/2 gap-4 flex flex-col"
        } ${!props.headerText && "hidden"} `}
      >
        <div className="z-40 flex flex-col gap-2">
          <p className="font-semibold text-4xl">{props.headerText}</p>
          <div
            className={`${
              props.contentPosition === "center"
            } ? "m-auto" : " sm: w-3/4" `}
          >
            {props.subheadingText}
          </div>
        </div>
        <div className={props.buttonText ? "z-40 button flex py-6" : "hidden"}>
          <Button
            buttonColor={
              props.buttonColor
             ? `${props.buttonColor}` : "bg-red-800" }
            link={props.buttonLink}
            text={props.buttonText}
            buttonPosition={props.contentPosition}
          ></Button>
        </div>
      </div>
      {props.children}
      
<div className="bg-gradient-to-b from-slate-600/20 to-black/50 h-full w-full absolute z-0"></div>
        <img className="min-h-screen object-cover " src={props.image} />
      <Video className={props.video ? "hidden" : ""} video={props.video} />
    </div>
  );
}

export default Header;