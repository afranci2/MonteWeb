import Image from "next/image";
import React from "react";
import Button from "../../components/mainButton/MainButton";
import Video from "../video/Video.jsx";
import { IoIosArrowDown } from "react-icons/io";
import "./header.css";

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
  containerheight,
  show
}) {
  return (
    <div
      className={`overflow-hidden wrapper relative flex justify-center items-center z-40 text-white ${
        containerheight ? containerheight : "h-screen"
      }`}
    >
      <div
        className={`${
          classChangeText
            ? `${classChangeText}`
            : "w-10/12 z-50 absolute text-center justify-center m-auto md:w-1/2 gap-4 flex flex-col"
        } ${!headerText && "hidden"} `}
      >
        <div className="z-40 flex flex-col gap-2">
          <h className="font-semibold font-serif text-5xl ">{headerText}</h>
          <div
            className={`w-3/4 ${
              contentPosition === "center"
             && "m-auto" } `}
          >
            {subheadingText}
          </div>
        </div>
        <div className={buttonText ? "z-40 button flex py-6 " : "hidden"}>
          <Button
            buttonColor={buttonColor ? `${buttonColor}` : "bg-orange-500"}
            link={buttonLink}
            text={buttonText}
            buttonPosition={contentPosition}
          ></Button>
        </div>
        <div className={`${show!=undefined ? "hidden" :""} m-auto`}>
          <IoIosArrowDown />
        </div>
      </div>
      {children}
      <div className=" h-full w-full absolute z-30 bg-gradient-to-b from-black/10 to-black/40"></div>
      <div className={image ? "object-cover h-full" : "hidden"}>
        <div className="contain h-full">
          {image ? (
            <Image
              className="min-h-screen object-cover"
              src={image}
              alt="some"
              width={10000}
              height={10000}
            />
          ) : null}
        </div>
      </div>
      <div className={video ? "w-full h-full" : "hidden"}>
        <Video video={video} priority />
      </div>
    </div>
  );
}

export default Header;
