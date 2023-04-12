import Image from "next/image";
import React from "react";
import Button from "../../components/mainButton/MainButton";
import Video from "../video/Video.jsx";
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
}) {

  return (
      <div
      className={`overflow-hidden wrapper relative flex justify-center items-center z-40 text-white ${containerheight ? containerheight : "h-screen"}`}
      >
        <div
          className={`${
            classChangeText
              ? `${classChangeText}`
              : "w-11/12 z-50 absolute text-center justify-center m-auto md:w-1/2 gap-4 flex flex-col"
          } ${!headerText && "hidden"} `}
        >
          <div className="z-40 flex flex-col gap-2">
            <p className="font-semibold  font-serif text-5xl ">{headerText}</p>
            <div
              className={`${
                contentPosition === "center"
              } ? "m-auto" : " sm: w-3/4" `}
            >
              {subheadingText}
            </div>
          </div>
          <div className={buttonText ? "z-40 button flex py-6 " : "hidden"}>
            <Button
              buttonColor={buttonColor ? `${buttonColor}` : "bg-orange-600"}
              link={buttonLink}
              text={buttonText}
              buttonPosition={contentPosition}
            ></Button>
          </div>
        </div>
        {children}
        <div className=" h-full w-full absolute z-0 bg-gradient-to-b from-slate-900/10 to-black/70"></div>
        <div className={image ? "object-cover" : "hidden"}>
          <div className="contain">
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
