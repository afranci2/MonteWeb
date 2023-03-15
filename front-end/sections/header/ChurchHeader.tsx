import Image from "next/image";
import React from "react";
import Button from "../../components/mainButton/MainButton";
import Video from "../video/Video.jsx";
import "./header.css";
import ChurchBanner from '../../components/banner/ChurchBanner'
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from 'next/link'

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
  direction
}) {
  return (
    <div
      className={`overflow-hidden wrapper relative flex justify-center items-center z-20 text-white ${
        containerheight ? containerheight : "h-screen"
      }`}
    >
      <div className="hidden md:flex">
        <div
          className={`${
            classChangeText
              ? `${classChangeText}`
              : "z-50 absolute bottom-0 py-20 px-8  text-left gap-4 flex flex-col"
          } ${!headerText && "hidden"} `}
        >
          <div className="z-40 px-8 flex flex-col gap-2 py-12 text-4xl">
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
            : "w-11/12 z-50 absolute md:hidden gap-4 flex flex-col"
        } ${!headerText && "hidden"} `}
      >
        <div className=" m-auto z-40 flex flex-col gap-2">
          <div className={"text-lg text-left"}>Monte Sinai</div>
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
      {children}
      <div className="bg-gradient-to-b from-slate-600/20 to-black/50 h-full w-full absolute z-0"></div>
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
        <Link href={mapLink}>
        <ChurchBanner position={" bottom-0 absolute"} >
          <div className="content align-center items-center h-16 justify-center flex gap-2 text-sm">
            <div>
              <p className="text-black p-8">{direction}</p>
            </div>
          </div>
        </ChurchBanner>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Header;
