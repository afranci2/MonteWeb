import Image from "next/image";
import React from "react";
import Button from "../../components/mainButton/MainButton";
import Video from "../video/Video.jsx";
import "./header.css";
import ChurchBanner from "../../components/banner/ChurchBanner";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import './church.css'

function Header({
  children,
  image,
  headerText,
  classChangeText,
  buttonColor,
  buttonLink,
  buttonText,
  contentPosition,
  containerheight,
  mapLink,
  direction,
}) {
  return (
    <div className="h-screen w-screen overflow-hidden wrapper relative flex justify-center items-center z-20 text-white">
      <div className="hidden md:flex">
        <div
          className={`${
            classChangeText
              ? `${classChangeText}`
              : "z-40 absolute bottom-0 py-20 px-8  text-left gap-4 flex flex-col"
          } ${!headerText && "hidden"} `}
        >
          <div className="z-20 px-8 flex flex-col gap-2 py-12 text-4xl">
            <div className="font-serif text-4xl">Monte Sinai</div>
            <p className="font-semibold text-6xl">{headerText}</p>
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
      </div>
      <div
        className={`${
          classChangeText
            ? `${classChangeText}`
            : "w-11/12 z-40 absolute md:hidden gap-4 flex flex-col"
        } ${!headerText && "hidden"} `}
      >
        <div className=" m-auto z-40 flex flex-col gap-2">
          <div className={"text-2xl font-serif "}>Monte Sinai</div>
          <p className="font-semibold text-5xl">{headerText}</p>
        </div>
        <div className={buttonText ? "z-20 button flex py-6" : "hidden"}>
          <Button
            buttonColor={buttonColor ? `${buttonColor}` : "bg-red-800"}
            link={buttonLink}
            text={buttonText}
            buttonPosition={contentPosition}
          ></Button>
        </div>
      </div>
      {children}
      <div className="bg-black/30 h-screen w-screen absolute z-20"></div>
      <div className={image ? "w-full" : "hidden"}>
        <div className="contain">
          {image ? (
            <img
              id="hello"
              className="object-cover"
              src={image}
              alt="some"
            />
          ) : null}
        </div>
        <Link href={mapLink}>
          <ChurchBanner position={" bottom-0 absolute"}>
            <div className="px-8 content align-center items-center h-16 justify-center flex gap-4 text-sm">
              <div>
                <p className="text-black p-16 font-semibold">{direction}</p>
              </div>
              <IoIosArrowForward className="flex items-center m-auto" size={15} color="000" />
            </div>
          </ChurchBanner>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Header;
