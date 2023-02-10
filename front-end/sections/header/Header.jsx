"use client";
import Image from "next/image";
import React from "react";
import Button from "../../components/mainButton/MainButton";
import Video from "../video/Video.jsx";
import NewImage from "../../public/img/hero.png";

function Header({
  children,
  image,
  headerText,
  classChangeText,
  buttonColor,
  buttonLink,
  buttonText,
  contentPosition,
  video,
  subheadingText,
}) {
  return (
    <div className="overflow-hidden wrapper relative flex justify-center items-center w-screen h-screen z-40">
      <div
        className={`${
          classChangeText
            ? `${classChangeText}`
            : "w-11/12 z-50 absolute text-center justify-center m-auto md:w-1/2 gap-4 flex flex-col"
        } ${!headerText && "hidden"} `}
      >
        <div className="z-40 flex flex-col gap-2">
          <p className="font-regular font-serif text-5xl">{headerText}</p>
          <div
            className={`${
              contentPosition === "center"
            } ? "m-auto" : " sm: w-3/4" `}
          >
            {subheadingText}
          </div>
        </div>
        <div className={buttonText ? "z-40 button flex py-6" : "hidden"}>
          <Button
            buttonColor={buttonColor ? `${buttonColor}` : "bg-red-800"}
            link={buttonLink}
            text={buttonText}
            buttonPosition={contentPosition}
          ></Button>
        </div>
      </div>
      {children}
      <div className="bg-gradient-to-b from-slate-600/20 to-black/50 h-full w-full absolute z-0"></div>
      <div className={image ? "relative object-cover h-full" : "hidden"}>
        <Image src={image} alt="some" fill quality={100}/>
      </div>
      <div className={video ? "w-full h-full" : "hidden"}>
        <Video video={video} priority />
        
      </div>
    </div>
  );
}

export default Header;
